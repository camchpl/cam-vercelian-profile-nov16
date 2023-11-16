/**
 * v0 by Vercel.
 * @see https://v0.dev/t/t3PQWalL7JE
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-4 p-4">
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View Monday's Tip</span>
        </Link>
        <div className="bg-white p-4 dark:bg-zinc-950">
          <h3 className="font-bold text-xl">Monday's Tip</h3>
          <p className="text-sm text-gray-500">Start your day with a healthy breakfast.</p>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View Tuesday's Tip</span>
        </Link>
        <div className="bg-white p-4 dark:bg-zinc-950">
          <h3 className="font-bold text-xl">Tuesday's Tip</h3>
          <p className="text-sm text-gray-500">Prioritize your tasks for the day.</p>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View Wednesday's Tip</span>
        </Link>
        <div className="bg-white p-4 dark:bg-zinc-950">
          <h3 className="font-bold text-xl">Wednesday's Tip</h3>
          <p className="text-sm text-gray-500">Take regular breaks to refresh your mind.</p>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View Thursday's Tip</span>
        </Link>
        <div className="bg-white p-4 dark:bg-zinc-950">
          <h3 className="font-bold text-xl">Thursday's Tip</h3>
          <p className="text-sm text-gray-500">Stay hydrated for better concentration.</p>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View Friday's Tip</span>
        </Link>
        <div className="bg-white p-4 dark:bg-zinc-950">
          <h3 className="font-bold text-xl">Friday's Tip</h3>
          <p className="text-sm text-gray-500">End your week by reviewing your accomplishments.</p>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View Saturday's Tip</span>
        </Link>
        <div className="bg-white p-4 dark:bg-zinc-950">
          <h3 className="font-bold text-xl">Saturday's Tip</h3>
          <p className="text-sm text-gray-500">Relax and recharge for the next week.</p>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View Sunday's Tip</span>
        </Link>
        <div className="bg-white p-4 dark:bg-zinc-950">
          <h3 className="font-bold text-xl">Sunday's Tip</h3>
          <p className="text-sm text-gray-500">Plan for the next week to stay ahead.</p>
        </div>
      </div>
    </div>
  )
}

