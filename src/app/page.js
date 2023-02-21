import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <section className=' bg-zinc-700 h-screen'>
        <div className="bg-gray-800 h-screen w-1/4 text-white">
          <ul className="mt-6">
            <li className="px-4 py-2 text-lg">Dashboard</li>
            <li className="px-4 py-2 text-lg">Netfllix</li>
            <li className="px-4 py-2 text-lg">Disney</li>
            <li className="px-4 py-2 text-lg">Amazon</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
