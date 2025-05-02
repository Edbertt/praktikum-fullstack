'use client'

import InputGroup from "@/component/InputGroup"
import { Button } from "@/component/ui-elements/button";

import { useQuery,useMutation,useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import apiRouter from "@/api/router";

type Props = {
    idBarang: string;
};

const defaultState = {
    kode_barang: '',
    nama_barang: '',
    harga: '',
}

export default function EditForm({ idBarang }: Props) {

    const [state, setState] = useState(defaultState)
    const {kode_barang, nama_barang, harga} = state

    const { data, isLoading, refetch, status } = useQuery({ queryKey: ['getBarangs', idBarang], queryFn: () => apiRouter.barangs.getBarang(idBarang) })

    console.log(data)

    const queryClient = useQueryClient()

    const router = useRouter()

    const updateMutation = useMutation({
        mutationFn: apiRouter.barangs.updateBarang, 
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getBarangs'] });
            // refetch()
            alert("Barang berhasil diperbarui");
            router.push("/barang")
        }
    })

    useEffect(() => {
        if (status === 'success'){
            setState({
                kode_barang: data?.kode_barang || '',
                nama_barang: data?.nama_barang || '',
                harga: data?.harga?.toString() || '',
            })
        }
    }, [status])

    return(
        <>
            <div className="p-8">
                <div className="p-8 rounded-lg border border-gray-200 bg-white shadow-md sm:p-8">
                    {!isLoading && (
                    <form onSubmit={(e) => {
                            e.preventDefault()
                            updateMutation.mutate({
                                id:data?.id,
                                kode_barang,
                                nama_barang,
                                harga: Number(harga),
                            })
                        }}>
                        <h1> Update Barang </h1>
                        <InputGroup label="Kode Barang" placeholder="Kode Barang" type="text" value={kode_barang} handleChange={(e) => setState((prevState) => ({
                        ...prevState,
                        kode_barang: e.target.value,
                        }))}/>
                        <InputGroup label="Nama Barang" placeholder="Nama Barang" type="text" value={nama_barang} handleChange={(e) => setState((prevState) => ({
                        ...prevState,
                        nama_barang: e.target.value,
                        }))} />
                        <InputGroup label="Harga Barang" placeholder="Harga Barang" type="number" value={harga} handleChange={(e) => setState((prevState) => ({
                        ...prevState,
                        harga: e.target.value,
                        }))}/>
                        <Button label="Save" variant="primary" shape="rounded" type="submit" />
                    </form>
                    )}
                </div>
            </div>
        </>
    )
}