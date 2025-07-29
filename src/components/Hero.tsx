import Image from "next/image";
import Container from "./Container";
import data from "./../../public/data.json";
import { LuChevronsRight } from "react-icons/lu";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const me = data.personal;
const socials = data.socials;

export default function Hero() {
  return (
    <div className="h-full min-h-svh relative bg-[url('/low_poly_banner_design_2203.webp')] bg-center bg-cover">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent"></div>

      <Container className="relative z-10">
        <div className="min-h-svh grid grid-cols-1 place-items-center md:grid-cols-2">
          <div className="w-max h-max p-2 bg-white flex items-center justify-center rounded-full shadow-lg">
            <Image
              width={224}
              height={224}
              src={"/me.webp"}
              alt={"Me"}
              className="max-w-56 max-h-56 rounded-full"
            />
          </div>
          <div className="h-max">
            <h1 className="mb-4 text-5xl"><span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 capitalize">{data.greeting}</span> I am <span className="capitalize">{me.firstName} {me.middleName} {me.lastName}</span></h1>

            <div className="mb-8 flex items-center gap-4 flex-wrap">
              <p className="uppercase text-xl">let&apos;s connect</p>

              <LuChevronsRight className="w-6 h-6 text-sky-600" />

              <ul className="flex items-center gap-4 flex-wrap">
                <li>
                  <Link href={socials.linkedin}><FaLinkedinIn className="w-5 h-5 hover:text-sky-600" /></Link>
                </li>
                <li>
                  <Link href={socials.github}><FaGithub className="w-5 h-5 hover:text-sky-600" /></Link>
                </li>
              </ul>
            </div>

            <Link href={data.cv_link} className="me-4 px-4 py-2 text-nowrap border text-sky-600 border-sky-600 rounded-lg hover:bg-sky-100">Curriculum vitae</Link>
            <Link href={data.cv_link} className="px-4 py-2 border text-sky-600 border-sky-600 rounded-lg hover:bg-sky-100">Résumé</Link>

          </div>
        </div>
      </Container>
    </div>
  )
}