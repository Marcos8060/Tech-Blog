import LeftBar from "@/components/LeftBar";
import MainSection from "@/components/MainSection";
import Navbar from "@/components/Navbar";
import RightBar from "@/components/RightBar";

export default function Home() {
  return (
    <>
      <section className="bg-[#E5E5E5] h-screen">
        <div className="px-12 py-4">
          <Navbar />
        </div>
        <div className="flex gap-4 px-12">
          <div className="w-2/12 mx-auto">
            <LeftBar />
          </div>
          <div className="w-7/12 mx-auto">
            <MainSection />
          </div>
          <div className="w-3/12 mx-auto">
            <RightBar />
          </div>
        </div>
      </section>
    </>
  );
}
