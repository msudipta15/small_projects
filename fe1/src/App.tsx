import { Card } from "./components/card";

function App() {
  return (
    <div className="min-h-screen max-h-full w-full bg-gradient-to-b from-[#050a1e] px-16 sm:px-56 via-[#07102f] to-[#09153f] ">
      <div className="w-full pt-10">
        <div className="w-full flex justify-between items-center bg-[#1f2535] py-3 px-2 rounded-2xl">
          <div>
            <img
              src="src/assets/images/logo.svg"
              alt="logo"
              className="sm:w-[200px]"
            />
          </div>
          <div>
            <button className="w-fit h-fit p-2 hover:bg-[#52576a] rounded-2xl cursor-pointer">
              <img
                src="src/assets/images/icon-sun.svg"
                alt=""
                className="w-[25px] sm:w-[35px]"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full pt-10 px-2 flex flex-col justify-center items-center gap-3 sm:flex sm:flex-row  sm:justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl text-white font-bold">
            Extensions List
          </h1>
        </div>
        <div className="flex gap-2 text-lg">
          <button className="w-fit h-fit p-2 bg-[#1f2535] px-4 text-white rounded-2xl cursor-pointer hover:bg-red-400 hover:text-black  ">
            All
          </button>
          <button className="w-fit h-fit p-2 bg-[#1f2535] px-4 text-white  rounded-2xl cursor-pointer hover:bg-red-400 hover:text-black">
            Active
          </button>
          <button className="w-fit h-fit p-2 bg-[#1f2535] px-4 text-white  rounded-2xl cursor-pointer hover:bg-red-400 hover:text-black">
            Inactive
          </button>
        </div>
      </div>
      <div className=" w-full h-full mt-10 px-2 grid  sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
