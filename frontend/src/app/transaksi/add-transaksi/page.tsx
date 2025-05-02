'use client'

import InputGroup from "@/component/InputGroup"
import { Button } from "@/component/ui-elements/button";

import { useQuery,useMutation,useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ListBarang } from "@/component/Tables/invoice-table";
import apiRouter from "@/api/router";

const defaultState = {
    kode_faktur: '',
    tanggal: '',
}

export default function TambahBarang() {
    const [state, setState] = useState(defaultState)
    const {kode_faktur, tanggal} = state
    const [quantities, setQuantities] = useState<{ [kode_barang: string]: number }>({});

    const { data } = useQuery({
            queryKey: ['getBarangs'], 
            queryFn: apiRouter.barangs.getBarangs,
    })

    const queryClient = useQueryClient()

    const router = useRouter()

    const createMutation = useMutation({
        mutationFn: async () => {
            // Step 1: Create transaksi
            const created = await apiRouter.transaksis.createTransaksis(state);
            const kode_faktur = created.kode_faktur;
        
            // Step 2: filter qty > 0
            const selected = data.filter((barang) => (quantities[barang.kode_barang] || 0) > 0);

            console.log("Selected barang with qty > 0:", selected);
        
            // Step 3: create detail_transaksis
            await Promise.all(
              selected.map((barang) => {
                console.log("Inserting detail for:", barang.kode_barang); // ✅ confirm each item
                apiRouter.detail_transaksis.createDetailTransaksis({
                  kode_faktur,
                  kode_barang: barang.kode_barang,
                  qty: quantities[barang.kode_barang],
                  total_harga: quantities[barang.kode_barang] * barang.harga,
                })}
              )
            );
          },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getTransaksis'] });
            alert("Transaksi berhasil dibuat");
            // router.push('/transaksi');
            // router.push('/barang')
        }
    })

    useEffect(() => {
        if (createMutation.isSuccess) {
          router.push('/transaksi');
        }
    }, [createMutation.isSuccess]);

    return(
        <>
            <div className="p-8">
                <div className="p-8 rounded-lg border border-gray-200 bg-white shadow-md sm:p-8">
                    <form onSubmit={(e) => {
                            e.preventDefault()
                            createMutation.mutate();
                        }}>
                        <h1> Buat Transaksi </h1>
                        <InputGroup label="Kode Faktur" placeholder="Kode Faktur" type="text" value={kode_faktur} handleChange={(e) => setState((prevState) => ({
                        ...prevState,
                        kode_faktur: e.target.value,
                        }))}/>
                        <InputGroup label="Tanggal" placeholder="Tanggal" type="date" value={tanggal} handleChange={(e) => setState((prevState) => ({
                        ...prevState,
                        tanggal: e.target.value,
                        }))} />

                        <ListBarang data={data} quantities={quantities} setQuantities={setQuantities} />
                        <Button label="Save" variant="primary" shape="rounded" type="submit" />
                    </form>
                </div>
            </div>
        </>
    )
}