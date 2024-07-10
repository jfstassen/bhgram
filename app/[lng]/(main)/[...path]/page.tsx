import Link from 'next/link';

interface RouteContext {
    params: { lng: string; path: string[] }
  }

export default function Page({
    params: {
        path,
        lng
    }
}: RouteContext) {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <>
    <h1>CATCH ALL PAGE {JSON.stringify(path)}</h1>

    <section className="cards-container">
      {photos.map((id) => (
        <Link className="card" key={id} href={`photos/${id}`}>
          {id}
        </Link>
      ))}
    </section>
    </>
  )
}
