'use client'

import { TableTransaksi } from "@/component/Tables/invoice-table";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import apiRouter from "@/api/router";

import TransaksiDetailModal from "@/component/TransaksiDetail/TransaksiDetailModel";

// import { Metadata } from "next";
import darkLogo from '@/assets/logos/dark.svg';

// export const metadata: Metadata = {
//   title: "Tables",
// };

export default function Transaksi() {
    const { data } = useQuery({
            queryKey: ['getTransaksis'], 
            queryFn: apiRouter.transaksis.getTransaksis,
          })

    const [selectedKodeFaktur, setSelectedKodeFaktur] = useState<string | null>(null);

    return(
        <>
            <div className="p-8">
                <TableTransaksi data = {data} />
                
            </div>
        </>
    )
}