import Container from "./Container";
import data from "./../../public/data.json";
import Link from "next/link";

export default function Footer() {
  return <>
    <hr className="text-gray-300" />
    <footer className="py-8 bg-white">
      <Container>
        <p>© ELRAPiZ {new Date().getFullYear()}</p>

        <div className="mt-8">
          <p className="font-bold uppercase text-xl">Credits</p>
          <ul className="flex items-center flex-wrap">
            {
              data.credits.map((item, idx) => {
                return <li key={idx} className="me-4"><Link href={item.link} className="text-gray-500 text-nowrap hover:text-sky-600">{ item.label }</Link></li>
              })
            }
          </ul>
        </div>
      </Container>
    </footer>
  </>
}