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

  return (
    <>
    <h1>Landing page</h1>
    </>
  )
}
