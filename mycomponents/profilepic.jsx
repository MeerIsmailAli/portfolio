import Image from 'next/image'
 
export default function Profilepic() {
  return (
    <div className="w-40 sm:w-56 md:w-64 lg:w-80 xl:w-96 m-10">
  <Image
    src="/pic.png"
    width={500}
    height={500}
    alt="Picture of the author"
    className="rounded-full w-full h-auto"
  />
</div>

  )
}