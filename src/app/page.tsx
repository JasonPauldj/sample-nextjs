import Link from 'next/link'
import {ProductHomePage} from "./products/page";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <ProductHomePage />
    </div>
  )
}
