// Cara Pertama untuk dynamic routec dengan server component
// export default async function BlogDetail({
//   params,
// }: {
//   params: Promise<{ id: string }>
// }) {
//   const id = (await params).id
//   return <div>Blog Detail Page {id}</div>
// }

// cara kedua untuk dynamic route dengan client component

'use client'
import { useParams, useSearchParams } from 'next/navigation'

// export default function BlogDetail() {
//   const params = useParams()
//   return <div>Blog Detail Page {params.id}</div>
// }

//cara ketika menggunakan search params

export default function BlogDetail() {
  const params = useParams()
  const search = useSearchParams()
  //   const user = search.get('user')
  const query = Object.fromEntries(search.entries())

  return (
    <div>
      Blog Detail Page{' '}
      {`dynamic : ${params.id}, user : ${query.user}, age : ${query.age}`}
    </div>
  )
}
