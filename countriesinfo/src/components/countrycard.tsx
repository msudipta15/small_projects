export function Card({
  darkmode,
  name,
  population,
  region,
  capital,
  imagelink,
}: {
  darkmode: boolean;
  name: string;
  capital: string;
  population: number;
  region: string;
  imagelink: string;
}) {
  return (
    <div
      className={`w-[320px] h-[400px] rounded-lg overflow-hidden ${
        darkmode ? "bg-[#2b3743] text-gray-100" : "bg-[#ffffff] text-slate-900"
      }`}
    >
      <div className="w-full h-1/2">
        <img src={imagelink} className="w-full h-full" />
        <div className="px-6 pt-6 flex flex-col justify-center gap-3">
          <div>
            <h1 className="text-2xl font-semibold">{name}</h1>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="flex gap-1.5">
              <p className="font-medium">Population:</p>
              <p
                className={` font-light ${
                  darkmode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {population}
              </p>
            </span>
            <span className="flex gap-1.5">
              <p className="font-medium">Region:</p>
              <p
                className={` font-light ${
                  darkmode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {region}
              </p>
            </span>
            <span className="flex gap-1.5">
              <p className="font-medium">Capital:</p>
              <p
                className={` font-light ${
                  darkmode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {capital}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
