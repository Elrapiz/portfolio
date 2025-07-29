type SectionHeaderProps = {
  title: string,
  subTitle: string
}

export default function SectionHeader({ title, subTitle }: SectionHeaderProps) {
  return <>
    <h2 className="mb-4 text-sky-600 text-center text-4xl sm:text-5xl font-bold uppercase lg:text-7xl">{title}</h2>
    <h3 className="mb-6 text-center text-xl font-medium md:text-2xl">{subTitle}</h3>
  </>
}