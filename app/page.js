import Footer from "@/mycomponents/footer";
import Subheader from "@/mycomponents/subheader";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between" style={{backgroundColor: "#FFFFE3"}}>
      <div className="flex md:justify-center md:ml-72 md:mr-72 border-b-4 border-[#808036]">
        <a href="https://github.com/MeerIsmailAli" target="_blank" className=" p-3 bg-purple-300  font-bold m-6 text-lg md:text-2xl text-purple-950 rounded-full">Github</a>
        <a href="mailto:meeraliakhil@gmail.com" target="_blank" className="p-3 bg-purple-300  font-bold m-6 text-lg md:text-2xl text-purple-950 rounded-full"> Email</a>
        <a href="https://x.com/nooz311504" target="_blank" className="p-3 bg-purple-300  font-bold m-6 text-lg md:text-2xl text-purple-950 rounded-full">Twitter</a>
      </div>
      {/* make a top bar kind of  */}
      <div className="flex flex-col justify-around mt-12">
        <Subheader/>
      </div>
      <Footer/>
  </div>
  );
}
