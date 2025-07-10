export function Card({ darkmode }: { darkmode: boolean }) {
  return (
    <div
      className={`w-[300px] h-[370px] rounded-lg overflow-hidden ${
        darkmode ? "bg-[#2b3743] text-gray-100" : "bg-[#ffffff] text-slate-900"
      }`}
    >
      <div className="w-full h-1/2">
        <img src="/india-flag-png-large.png" className="w-full h-full" />
        <div className="px-6 pt-6 flex flex-col justify-center gap-3">
          <div>
            <h1 className="text-2xl font-semibold">India</h1>
          </div>

          <div className="flex flex-col gap-0.5">
            <p>Population: 123000000</p>
            <p>Region: South Asia</p>
            <p>Capital: New Delhi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
