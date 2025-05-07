'use client'

// import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useCount } from '@/context'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { count, setCount } = useCount()
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white p-4 ">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold ">Next Js App</h1>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </header>
        <main className="flex-1 container mx-auto p-4">
          <div>
            <p>{`Count: ${count}`}</p>
          </div>
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Personal Website</p>
        </footer>
      </div>
    </>
  )
}
