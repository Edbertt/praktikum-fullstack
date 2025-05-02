'use client'

import { TableBarang } from "@/component/Tables/invoice-table";

import {useQuery} from "@tanstack/react-query";

import apiRouter from "@/api/router";

import darkLogo from '@/assets/logos/dark.svg';

// export const metadata: Metadata = {
//   title: "Tables",
// };

export default function Barang() {
    const { data } = useQuery({
        queryKey: ['getBarangs'], 
        queryFn: apiRouter.barangs.getBarangs,
      })

    return(
        <>
            <div className="p-8">
                <TableBarang data = {data} />
            </div>
        </>
    )
}