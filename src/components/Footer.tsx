import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import data from "./../../public/data.json";
import Link from "next/link";

export default function Footer() {
  return <>
    <hr className="text-gray-400 dark:text-gray-700" />
    <footer className="py-8 bg-white dark:bg-black">
      <Container>
        <div className="flex items-center justify-between">
          <div>© ELRAPiZ {new Date().getFullYear()}</div>
          <div className="ms-auto w-max"><ThemeToggle /></div>
        </div>

        <div>
          <p className="font-bold uppercase text-xl">Credits</p>
          <ul className="flex items-center flex-wrap">
            {
              data.credits.map((item, idx) => {
                return <li key={idx} className="me-4"><Link href={item.link} className="text-gray-500 text-nowrap hover:text-sky-600 dark:text-gray-400">{ item.label }</Link></li>
              })
            }
          </ul>
        </div>
      </Container>
    </footer>
  </>
}