import LeftBar from "@/components/LeftBar";
import MainSection from "@/components/MainSection";
import Navbar from "@/components/Navbar";
import RightBar from "@/components/RightBar";

export default function Home() {
  return (
    <>
      <section className="bg-[#E5E5E5] h-screen">
        <div className="sm:px-12 px-4 py-4">
          <Navbar />
        </div>
        <div className="md:flex gap-4 sm:px-12 px-4">
          <div className="sm:w-2/12 w-full mx-auto">
            <LeftBar />
          </div>
          <div className="sm:w-7/12 w-full mx-auto">
            <MainSection />
          </div>
          <div className="w-3/12 mx-auto sm:block hidden">
            <RightBar />
          </div>
        </div>
      </section>
    </>
  );
}
