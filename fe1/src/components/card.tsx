export function Card() {
  return (
    <div className="bg-[#1f2535] w-full flex flex-col justify-between   sm:w-[400px] h-[200px] rounded-2xl p-4 border border-gray-600">
      <div className="flex items-start gap-1 ">
        <div className="min-w-[80px]">
          <img src="src/assets/images/logo-dom-snapshot.svg" />
        </div>
        <div className="max-w-fit">
          <h1 className="text-xl text-white font-semibold mb-1">DevLens</h1>
          <p className="text-gray-200">
            Enables annotation Enables annotation Enables annotationannotation .
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="px-4 py-1.5 rounded-2xl border border-gray-600 text-gray-200  hover:border-double hover:border-red-400 hover:bg-slate-600 cursor-pointer">
          Remove
        </button>
        <button>toggle</button>
      </div>
    </div>
  );
}
