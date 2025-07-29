import Container from "./Container";
import SectionHeader from "./SectionHeader";
import data from "./../../public/data.json";
import Image from "next/image";

const experience = data.experience;

export default function Experience() {
  return (
    <div id="experience" className="py-8 min-h-svh">
      <Container>
        <SectionHeader title="my experience" subTitle="Here are the workspaces I've been 🤵" />

        <ul className="mt-12 grid gap-4 grid-cols-1 md:grid-cols-2">
          {
            experience.map((exp, idx) => {
              return (
                <li key={idx} className="p-8 bg-white rounded-lg border border-gray-300">
                  <div className="flex items-center flex-col gap-2 sm:flex-row">
                    <Image width={480} height={480} src={exp.companyLogo} alt={"Company Logo"} className="max-w-20 aspect-square grayscale" />
                    <div>
                      <h4 className="text-xl text-center font-bold uppercase text-gray-600 sm:text-start">{ exp.company }</h4>
                      <p className="text-center text-gray-600 capitalize sm:text-start">{ exp.companyInfo }</p>
                    </div>
                  </div>
                  <p className="my-2">{ exp.date }</p>
                  <p className="my-2 font-semibold uppercase text-sky-600">{ exp.position }</p>
                  <p>{ exp.details }</p>
                </li>
              )
            })
          }
        </ul>
      </Container>
    </div>
  )
}