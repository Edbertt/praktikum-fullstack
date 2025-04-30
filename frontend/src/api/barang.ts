import api from './index'

type Barang = {
    id: number;
    kode_barang?: string;
    nama_barang?: string;
    harga?: number;
    createdAt: string;
    updatedAt: string;
}

type Endpoints = {
    getBarangs: () => Promise<Barang[]>;
    getBarang: (idBarang: number) => Promise<Barang>;
    createBarang: (barang: Partial<Barang>) => Promise<Barang>;
    updateBarang: (barang: Partial<Barang>) => Promise<Barang>;
    deleteBarang: (barang: Partial<Barang>) => Promise<Barang>;
}

const endpoints ={
    getBarangs: async () => {
        return await api('barangs')
    },
    getBarang: async (idBarang) => {
        return await api(`barangs/${idBarang}`)
    },
    createBarang: async (barang: Partial<Barang>) => {
        return await api('barangs', {
            method: 'post',
            data: barang,
        })
    },
    updateBarang: async (barang: Partial<Barang>) => {
        return await api(`barangs/${barang.id}`, {
            method: 'put',
            data: barang,
        })
    },
    deleteBarang: async (barang: Partial<Barang>) => {
        return await api(`barangs/${barang.id}`, {
            method: 'delete',
        })
    },
}
	
export default endpoints