import { TrashIcon } from "@/assets/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
// import dayjs from "dayjs";
import { getInvoiceTableData } from "./fetch";
import { DownloadIcon, PreviewIcon } from "./icons";

export async function BarangTable() {
  const data = await getInvoiceTableData();

  return (
    <div className="p-8 rounded-lg border border-gray-200 bg-white shadow-md sm:p-8">
      <Table>
        <TableHeader>
          <TableRow className="border-none bg-gray-50 [&>th]:py-4 [&>th]:text-base [&>th]:text-gray-900">
            <TableHead className="min-w-[155px] xl:pl-8">Kode Barang</TableHead>
            <TableHead>Nama Barang</TableHead>
            <TableHead>Harga Barang</TableHead>
            <TableHead className="text-right xl:pr-8">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} className="border-gray-200">
              <TableCell className="min-w-[155px] xl:pl-8">
                <h5 className="text-gray-900">{item.name}</h5>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  ${item.price}
                </p>
              </TableCell>

              <TableCell>
                <p className="text-gray-900">
                  Test
                </p>
              </TableCell>

              <TableCell>
                <div
                  className={cn(
                    "max-w-fit rounded-full px-4 py-1 text-sm font-medium",
                    {
                      "bg-green-100 text-green-600": item.status === "Paid",
                      "bg-red-100 text-red-600": item.status === "Unpaid",
                      "bg-yellow-100 text-yellow-600": item.status === "Pending",
                    },
                  )}
                >
                  {item.status}
                </div>
              </TableCell>

              <TableCell className="xl:pr-8">
                <div className="flex items-center justify-end gap-4">
                  <button className="hover:text-indigo-600">
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
    </div>
  );
}

export async function TransaksiTable() {
  const data = await getInvoiceTableData();

  return (
    <div className="p-8 rounded-lg border border-gray-200 bg-white shadow-md sm:p-8">
      <Table>
        <TableHeader>
          <TableRow className="border-none bg-gray-50 [&>th]:py-4 [&>th]:text-base [&>th]:text-gray-900">
            <TableHead className="min-w-[155px] xl:pl-8">Kode Faktur</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead>Total Harga</TableHead>
            <TableHead className="text-right xl:pr-8">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} className="border-gray-200">
              <TableCell className="min-w-[155px] xl:pl-8">
                <h5 className="text-gray-900">{item.name}</h5>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  ${item.price}
                </p>
              </TableCell>

              <TableCell>
                <p className="text-gray-900">
                  Test
                </p>
              </TableCell>

              <TableCell>
                <div
                  className={cn(
                    "max-w-fit rounded-full px-4 py-1 text-sm font-medium",
                    {
                      "bg-green-100 text-green-600": item.status === "Paid",
                      "bg-red-100 text-red-600": item.status === "Unpaid",
                      "bg-yellow-100 text-yellow-600": item.status === "Pending",
                    },
                  )}
                >
                  {item.status}
                </div>
              </TableCell>

              <TableCell className="xl:pr-8">
                <div className="flex items-center justify-end gap-4">
                  <button className="hover:text-indigo-600">
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
    </div>
  );
}