import { Dashboard } from "../components/Dashboard";
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Front Froge</title>
      </Head>
      <main>
        <Dashboard />
      </main>
    </div>
  )
}
