import Link from 'next/link';

interface RouteContext {
    params: { lng: string; path: string[] }
    searchParams: Record<string, string | string[]>
  }

export default function Page({
    params: {
        lng
    }
}: RouteContext) {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <>
    <h1>landing page {lng}</h1>

    <section className="cards-container">
      {photos.map((id) => (
        <Link className="card" key={id} href={`${lng}/photos/${id}`}>
          {id}
        </Link>
      ))}
    </section>
    </>
  )
}
