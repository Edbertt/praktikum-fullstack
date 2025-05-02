// components/TransaksiDetailModal.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import apiRouter from '@/api/router';

export default function TransaksiDetailModal({ kode_faktur, onClose }: { kode_faktur: string, onClose: () => void }) {
  const { data, isLoading } = useQuery({
    queryKey: ['detailTransaksi', kode_faktur],
    queryFn: () => apiRouter.detail_transaksis.getByKodeFaktur(kode_faktur),
  });

  console.log(data)

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-[90%] max-w-2xl relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">✕</button>
        <h2 className="text-lg font-semibold mb-4">Detail Transaksi: {kode_faktur}</h2>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th>Kode Barang</th>
                <th>Qty</th>
                <th>Total Harga</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((detail: any) => (
                <tr key={detail.id} className="border-b">
                  <td>{detail.nama_barang}</td>
                  <td>{detail.qty}</td>
                  <td>{detail.total_harga}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
