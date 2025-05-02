'use client'

import InputGroup from "@/component/InputGroup"
import { Button } from "@/component/ui-elements/button";

import { useQuery,useMutation,useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import apiRouter from "@/api/router";

const defaultState = {
    kode_barang: '',
    nama_barang: '',
    harga: '',
}

export default function TambahBarang() {
    const [state, setState] = useState(defaultState)
    const {kode_barang, nama_barang, harga} = state

    const queryClient = useQueryClient()

    const router = useRouter()

    const createMutation = useMutation({
        mutationFn: apiRouter.barangs.createBarang, 
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getBarangs'] });
            alert("Barang berhasil ditambahkan");
            // router.push('/barang')
        }
    })

    useEffect(() => {
        if (createMutation.isSuccess) {
          router.push('/barang');
        }
    }, [createMutation.isSuccess]);

    return(
        <>
            <div className="p-8">
                <div className="p-8 rounded-lg border border-gray-200 bg-white shadow-md sm:p-8">
                    <form onSubmit={(e) => {
                            e.preventDefault()
                            createMutation.mutate({
                                kode_barang,
                                nama_barang,
                                harga: Number(harga),
                            })
                        }}>
                        <h1> Tambah Barang </h1>
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
                </div>
            </div>
        </>
    )
}