export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div className="card">DETAIL PAGE ID: {id}</div>;
}
