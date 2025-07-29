import Link from "next/link";
import data from "./../../public/data.json";
import Image from "next/image"
import Container from "./Container";

const personal = data.personal;
const fullName = `${personal.firstName} ${personal.middleName} ${personal.lastName}`

export default function About() {
  return (
    <div id="about" className="py-8 min-h-svh">
      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="uppercase text-center text-5xl text-sky-600 font-medium text-nowrap md:text-6xl lg:text-start">who am i?</h2>
            <h3 className="my-4 font-semibold text-center text-xl md:text-2xl lg:text-start">I'm <span className="capitalize">{fullName}</span>, a <abbr className="uppercase" title={personal.courses.bsit.name}>{personal.courses.bsit.abbreviation}</abbr> graduate from <Link className="text-sky-600 uppercase cursor-pointer" title={personal.universities.wmsu.name} target="_blank" href={personal.universities.wmsu.portal}>{personal.universities.wmsu.abbreviation}</Link></h3>
            <p className="text-start">{data.introduction}</p>
            <h4 className="my-4">Here are the technologies I've been experimenting with lately:</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-3">
              {
                data.experimentingTechnologies.map((item, idx) => {
                  return <li key={idx} className="before:content-['▶'] before:text-sky-600 before:text-[7px] before:align-middle before:mr-2">{item}</li>
                })
              }
            </ul>
          </div>
          <Image
            width={480}
            height={380}
            src={"/Vegan Hello GIF by joonasjoonas.gif"}
            alt={"Hello GIF by joonasjoonas"}
            className="w-80 place-self-center mix-blend-multiply order-1 lg:order-2 lg:w-[480]"
          />
      </div>
      </Container>
    </div>
  )
}