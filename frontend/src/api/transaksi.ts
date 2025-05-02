import api from './index'

type Transaksi = {
    id: number;
    kode_faktur?: string;
    tanggal?: string;
    createdAt: string;
    updatedAt: string;
}

type Endpoints = {
    getTransaksis : () => Promise<Transaksi[]>;
    createTransaksis : (transaksi: Partial<Transaksi>) => Promise<Transaksi>;
}

const endpoints ={
    getTransaksis: async () => {
        return await api('transaksis')
    },
    createTransaksis: async (transaksi: Partial<Transaksi>) => {
        return await api('transaksis', {
            method: 'post',
            data: transaksi,
        })
    }
}
    
export default endpoints