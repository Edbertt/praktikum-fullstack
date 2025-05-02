'use client'

import { TrashIcon, PencilSquareIcon } from "@/assets/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/component/ui/table";
import { DeleteButton } from './delete-button';
// import { getInvoiceTableData } from "./fetch";
import { DownloadIcon, PreviewIcon } from "./icons";
import { Button } from "@/component/ui-elements/button";
import Link from "next/link";
import { useState } from "react";
import TransaksiDetailModal from "@/component/TransaksiDetail/TransaksiDetailModel";

type PropsBarang = {
  data?: Barang[];
  quantities: { [kode_barang: string]: number };
  setQuantities: React.Dispatch<React.SetStateAction<{ [kode_barang: string]: number }>>;
}

type PropsTransaksi = {
  data?: Transaksi[];
}


export function TableBarang(props: PropsBarang) {
  return (
    <div className="p-8 rounded-lg border border-gray-200 bg-white shadow-md sm:p-8">
      <Link href="/barang/add-barang">
        <Button label="Tambah Barang" variant="primary" shape="rounded"/>
      </Link>
      <Table>
        <TableHeader>
          <TableRow className="border-none bg-gray-50 [&>th]:py-4 [&>th]:text-base [&>th]:text-gray-900">
            <TableHead className="min-w-[155px] xl:pl-8">Kode Barang</TableHead>
            <TableHead>Nama Barang</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead className="text-right xl:pr-8">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {props.data?.map((barang) => (
            <TableRow key={barang.id} className="border-gray-200">
              <TableCell className="min-w-[155px] xl:pl-8">
                <h5 className="text-gray-900">{barang.kode_barang}</h5>
              </TableCell>

              <TableCell>
                <p className="text-gray-900">
                  {barang.nama_barang}
                </p>
              </TableCell>

              <TableCell>
                <div className="max-w-fit rounded-full px-4 py-1 text-sm font-medium">
                  {barang.harga}
                </div>
              </TableCell>

              <TableCell className="xl:pr-8">
                <div className="flex items-center justify-end gap-4">

                  <Link href={`/barang/${barang.id}`}>
                    <button className="hover:text-indigo-600">
                      <span className="sr-only">Edit Barang</span>
                      <PencilSquareIcon />
                    </button>
                  </Link>

                  <DeleteButton id={barang.id}/>

                  {/* <button className="hover:text-indigo-600" >
                    <span className="sr-only">Delete Barang</span>
                    <TrashIcon />
                  </button> */}

                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function TableTransaksi(props: PropsTransaksi) {
  const [selectedKodeFaktur, setSelectedKodeFaktur] = useState<string | null>(null);

  return (
    <div className="p-8 rounded-lg border border-gray-200 bg-white shadow-md sm:p-8">
      <Link href="/transaksi/add-transaksi">
        <Button label="Tambah Transaksi" variant="primary" shape="rounded" />
      </Link>
      <Table>
        <TableHeader>
          <TableRow className="border-none bg-gray-50 [&>th]:py-4 [&>th]:text-base [&>th]:text-gray-900">
            <TableHead className="min-w-[155px] xl:pl-8">Kode Transaksi</TableHead>
            <TableHead>Tanggal Transaksi</TableHead>
            <TableHead>Total Harga</TableHead>
            <TableHead className="text-right xl:pr-8">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {props.data?.map((transaksi) => (
            <TableRow key={transaksi.id} className="border-gray-200">
              <TableCell className="min-w-[155px] xl:pl-8">
                <h5 className="text-gray-900">{transaksi.kode_faktur}</h5>
              </TableCell>

              <TableCell>
                <p className="text-gray-900">
                  {transaksi.tanggal}
                </p>
              </TableCell>

              <TableCell>
                <div className="max-w-fit rounded-full px-4 py-1 text-sm font-medium">
                  Test
                </div>
              </TableCell>

              <TableCell className="xl:pr-8">
                <div className="flex items-center justify-end gap-4">
                  <button className="hover:text-indigo-600" onClick={() => setSelectedKodeFaktur(transaksi.kode_faktur)}>
                    <span className="sr-only">View Invoice</span>
                    <PreviewIcon />
                  </button>

                  <button className="hover:text-indigo-600">
                    <span className="sr-only">Delete Invoice</span>
                    <TrashIcon />
                  </button>

                  <button className="hover:text-indigo-600">
                    <span className="sr-only">Download Invoice</span>
                    <DownloadIcon />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedKodeFaktur && (
          <TransaksiDetailModal
          kode_faktur={selectedKodeFaktur}
          onClose={() => setSelectedKodeFaktur(null)}
          />
      )}
    </div>
  );
}

export function ListBarang(props: PropsBarang) {
  return (
    <div className="p-8 rounded-lg border border-gray-200 bg-white shadow-md sm:p-8">
      <Table>
        <TableHeader>
          <TableRow className="border-none bg-gray-50 [&>th]:py-4 [&>th]:text-base [&>th]:text-gray-900">
            <TableHead className="min-w-[155px] xl:pl-8">No</TableHead>
            <TableHead>Kode Barang</TableHead>
            <TableHead>Nama Barang</TableHead>
            <TableHead>Harga Per Satuan</TableHead>
            <TableHead>Jumlah</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {props.data?.map((barang, index) => (
            <TableRow key={barang.id} className="border-gray-200">
              <TableCell className="min-w-[155px] xl:pl-8">
                <h5 className="text-gray-900">{index + 1}</h5>
              </TableCell>

              <TableCell>
                <h5 className="text-gray-900">{barang.kode_barang}</h5>
              </TableCell>

              <TableCell>
                <p className="text-gray-900">
                  {barang.nama_barang}
                </p>
              </TableCell>

              <TableCell>
                <div className="max-w-fit rounded-full px-4 py-1 text-sm font-medium">
                  {barang.harga}
                </div>
              </TableCell>

              <TableCell>
                <input style={{border:"3px solid"}} type="number" id="quantity" 
                  min={0}
                  value={props.quantities?.[barang.kode_barang] || 0}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    props.setQuantities((prev) => ({
                      ...prev,
                      [barang.kode_barang]: value,
                    }));
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}