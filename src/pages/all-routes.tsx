import Link from "next/link";

export default function AllRoutes() {
  return (
    <main>
      <h1>React + @ Rocketseat</h1>
      <ul>
        <li><Link href={`/project/event-plataform`}>Event Plataform</Link></li>
        <li><Link href={`/project/ignite-feed`}>Ignite Feed</Link></li>
        <li><Link href={`/project/todo-list`}>Todo List</Link></li>
        <li><Link href={`/project/ignite-timer`}>Ignite Timer</Link></li>
        <li><Link href={`/project/coffe-delivery`}>Coffee Delivery</Link></li>
        <li><Link href={`/project/dt-money`}>DT Money</Link></li>
        <li><Link href={`/project/ignite-shop`}>Ignite Shop</Link></li>
        <li><Link href={`/project/frontend-artesanal`}>Frontend Artesanal</Link></li>
      </ul>

      <h1>Projects (ignite)</h1>
      <ul>
        <li><Link href={`/project/fridge`}>Fridge</Link></li>
        <li><Link href={`/project/diplomata`}>Diplomata </Link></li>
        <li><Link href={`/project/diplomata-backend`}>Diplomata (Backend)</Link></li>
        <li><Link href={`/project/tabnews-clone`}>Tabnews (clone)</Link></li>
      </ul>
    </main>
  )
}