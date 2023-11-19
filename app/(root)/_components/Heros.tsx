import { Button } from "@/components/ui/button";
import Image from "next/image";

const Heros = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-x-5">
      <div className=" space-y-4">
        <div>
          <div>
            <h2 className="text-2xl font-extrabold">Get your</h2>
            <h2 className="text-2xl font-extrabold">imagination going</h2>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500  ">
              The best audiobooks and Originals. The most entertainment.
            </p>
            <p className="text-sm font-semibold text-gray-500">
              The podcasts you want to hear.
            </p>
          </div>
        </div>
        <Button className="px-100% w-full bg-amber-600 hover:bg-amber-400 hover:bg-opacity-80">
          Try for $0.00
        </Button>
        <p className="text-sm font-semibold text-gray-500">
          $14.95 a month after 30 days. Cancel anytime
        </p>
      </div>
      <Image alt="s2k" src="/s2k.png" width={500} height={500} />
    </div>
  );
};

export default Heros;
