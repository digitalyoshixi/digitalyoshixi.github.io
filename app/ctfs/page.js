import PageLayout from '../components/pagelayout';
import Link from 'next/link'
export default function Page() {
  return (
    <PageLayout title="CTFs">
      <h1>Hello, this my collection of CTFs played:</h1> 
        <div className="m-10 rounded-md bg-black w-[50%] text-white flex flex-col items-center mx-auto">
          <li className='m-5 text-gray-500 m-5'>
            <Link className="text-pink-600" href="./ctfs/magpiectf2025">MagpieCTF - 2025</Link>
          </li>

          <li className='m-5 text-gray-500 m-5'>
            <Link className="text-blue-200" href="./ctfs/UTMSAM2025">UTMSAM Mini CTF - 2025</Link>
          </li>

          <li className='m-5 text-gray-500 m-5'>
            <Link className="text-white" href="./ctfs/issessionsctf2025">ISSESSIONSCTF - 2025</Link>
          </li>

          <li className='m-5 text-blue-500 m-5'>
            <Link className="text-blue-500" href="./ctfs/uoftctf2025">UOFTCTF - 2025</Link>
          </li>

          <li className='m-5 text-purple-500'>
            <Link className="text-purple-500" href="./ctfs/irisctf2025">IRISCTF - 2025</Link>
          </li>
        </div>
      <p>
        You can see our <Link className="text-red-500" href="https://ctftime.org/team/280084">CTFTIME</Link>
      </p>

      <p>
        You can join our <Link className="text-blue-500" href="https://discord.gg/3z6GJQdq">Discord</Link>
      </p>
    </PageLayout>
  )
}