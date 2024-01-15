import Image from 'next/image'
import Test from './componants/test'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
      <Test/>
     </div>
    </main>
  )
}
