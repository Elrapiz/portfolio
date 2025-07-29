import Container from "./Container";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import data from "./../../public/data.json";
import Link from "next/link";

export default function Skills() {
  return (
    <div id="skills" className="py-8 min-h-svh">
      <Container>
        <SectionHeader title="here's what I'm good at" subTitle="These are the technologies I can offer 😄" />

        <ul className="mt-12 flex items-center gap-4 flex-wrap justify-center">
          {
            data.skills.map((item, idx) => {
              return (
                <li key={idx} className="mb-4 mx-8">
                  <Link href={item.homeLink}>
                    <Image width={100} height={100} src={item.logoLink} alt={item.name} unoptimized className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24" />
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </Container>
    </div>
  )
}