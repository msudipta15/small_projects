import { IoMoonSharp } from "react-icons/io5";

export function Topbar({
  darkmode,
  toggledark,
}: {
  darkmode: boolean;
  toggledark: () => void;
}) {
  return (
    <div
      className={`w-full h-18 ${
        darkmode ? "bg-[#2b3743] text-gray-100" : "bg-[#ffffff] text-slate-900"
      }  flex justify-between items-center px-10 sm:px-33`}
    >
      <h1 className=" text-xl sm:text-2xl font-semibold">
        Where in the world?
      </h1>
      <button
        onClick={() => toggledark()}
        className=" text-sm sm:text-lg font-medium flex items-center gap-2 cursor-pointer"
      >
        <IoMoonSharp size={17} /> <p className="pb-0.5">Dark Mode</p>
      </button>
    </div>
  );
}
