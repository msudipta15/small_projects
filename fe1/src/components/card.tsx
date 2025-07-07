export function Card() {
  return (
    <div className="bg-[#1f2535] w-full   sm:w-[400px] h-[200px] rounded-2xl p-4 border border-gray-600">
      <div className="flex gap-3">
        <div className="w-fit">
          <img src="src/assets/images/logo-dom-snapshot.svg" width={60} />
        </div>
        <div className="w-fit">
          <h1 className="text-xl text-white font-semibold mb-1">DevLens</h1>
          <p className="text-gray-200">
            description descriptiondescriptiondescription
          </p>
        </div>
      </div>
    </div>
  );
}
