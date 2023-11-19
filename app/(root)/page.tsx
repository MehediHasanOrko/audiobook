import { Button } from "@/components/ui/button";
import Image from "next/image";
import Heading from "./_components/Heading";
import Menu from "./_components/Menu";
import Heros from "./_components/Heros";
import RecentPod from "./_components/RecentPod";
import OnlyS2L from "./_components/OnlyS2L";
import FamousPod from "./_components/FamousPod";
import OnlyS2Lcopy from "./_components/OnlyS2Lcopy";
import ProMembers from "./_components/ProMembers";
import { FAQ } from "./_components/FAQ";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className=" p-6 flex flex-col gap-y-20 md:w-[1020px] mx-auto  ">
      <div className="space-y-5">
        <Heros />
      </div>
      <div className="space-y-16">
        <div>
          <RecentPod />
        </div>
        <div>
          <OnlyS2L />
          <OnlyS2Lcopy />
        </div>
        <div>
          <FamousPod />
        </div>
      </div>
      <div>
        <ProMembers />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}
