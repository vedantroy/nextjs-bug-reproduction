import db from "@/lib/db"

export default function Home() {
  return (
    <main>
      <div>
        <p>DB: {db.data()}</p>
        <p>Get started by editing...</p>
      </div>
    </main>
  )
}
