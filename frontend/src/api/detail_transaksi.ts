import api from './index'

type DetailTransaksi = {
    id: number;
    kode_faktur?: string;
    kode_barang?: string;
    qty?: number;
    total_harga?: number;
    createdAt: string;
    updatedAt: string;
}

type Endpoints = {
    getDetailTransaksis: () => Promise<DetailTransaksi[]>;
    getByKodeFaktur: (kodeFaktur: string) => Promise<DetailTransaksi[]>;
    // getBarang: (idBarang: number) => Promise<DetailTransaksi>;
    createDetailTransaksis: (detail_transaksi: Partial<DetailTransaksi>) => Promise<DetailTransaksi>;
    // updateDetailTransaksis: (detail_transaksi: Partial<DetailTransaksi>) => Promise<DetailTransaksi>;
    // deleteDetailTransaksis: (detail_transaksi: Partial<DetailTransaksi>) => Promise<DetailTransaksi>;
}

const endpoints = {
    getDetailTransaksis: async () => {
        return await api('detail_transaksis')
    },
    getByKodeFaktur: async (kodeFaktur: string) => {
        return await api(`detail_transaksis?kf=${kodeFaktur}`)
    },
    createDetailTransaksis: async (detail_transaksi: Partial<DetailTransaksi>) => {
        return await api('detail_transaksis', {
            method: 'post',
            data: detail_transaksi,
        })
    },
    // updateDetailTransaksis: async (detail_transaksi: Partial<DetailTransaksi>) => {
    //     return await api(`detail_transaksis/${detail_transaksi.id}`, {
    //         method: 'put',
    //         data: detail_transaksi,
    //     })
    // },
    // deleteDetailTransaksis: async (detail_transaksi: Partial<DetailTransaksi>) => {
    //     return await api(`detail_transaksis/${detail_transaksi.id}`, {
    //         method: 'delete',
    //     })
    // },
}

export default endpoints