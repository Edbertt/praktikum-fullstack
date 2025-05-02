import EditForm from "./Editform"

export default async function EditBarang({ params }: { params: { idBarang: string } }) {
    const { idBarang } = await params

    return(
    <>
        <EditForm idBarang={idBarang} />;
    </>
   )
}