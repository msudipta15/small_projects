import Image from "next/image";
import { GiBrain } from "react-icons/gi";

export default function Home() {
  return (
    <div className="h-screen">
      <div>
        <div>
          <h1 className="text-center">Mondal Enterprise</h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <GiBrain size={90} />
        </div>
      </div>
    </div>
  );
}
