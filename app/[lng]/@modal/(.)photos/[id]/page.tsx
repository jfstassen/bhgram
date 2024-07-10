export default function ModalPage({
  params: { id},
}: {
  params: { id: string };
}) {
  console.log('MODAL PAGE ID:', id)
  return <div>MODAL PAGE ID: {id}</div>
}
