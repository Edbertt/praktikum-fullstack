'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import apiRouter from '@/api/router';
import { TrashIcon } from "@/assets/icons";

type Props = {
    id: number;
};

export function DeleteButton({ id }: Props) {
    const { data, refetch } = useQuery({ queryKey: ['getBarangs', id], queryFn: () => apiRouter.barangs.getBarang(id) })

    const router = useRouter()
    const queryClient = useQueryClient()


    const deleteMutation = useMutation({
        mutationFn: apiRouter.barangs.deleteBarang,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getBarangs'] });
            alert("Data berhasil dihapus!");
            // router.push("/barang")
        } //to fetch latest data, to re-render
    })

    return (
        <button className="hover:text-indigo-600" onClick={() => {
            const confirmDelete = confirm('Yakin ingin menghapus barang ini?');
            if (confirmDelete) {
                deleteMutation.mutate(data)
            }
        }}>
            <span className="sr-only">Delete Barang</span>
            <TrashIcon />
        </button>
    )
}