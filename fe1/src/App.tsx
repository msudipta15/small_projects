import { useEffect, useState } from "react";
import { Card } from "./components/card";

function App() {
  const [darkmode, setdarkmode] = useState(false);

  useEffect(() => {
    console.log(darkmode);
  }, [darkmode]);

  return (
    <div
      className={`min-h-screen max-h-full w-full  pb-10  px-10 sm:px-56 ${
        darkmode
          ? "bg-gradient-to-b   dark:from-[#050a1e] dark:via-[#07102f] dark:to-[#09153f]"
          : "bg-gradient-to-b from-[#ecf3fd] via-[#edf6fb] to-[#effbfb]"
      }   `}
    >
      <div className="w-full pt-10">
        <div
          className={`w-full flex justify-between items-center ${
            darkmode ? "bg-[#1f2535]" : "bg-[#fcfdff]"
          }  py-3 px-2 rounded-2xl`}
        >
          <div>
            <img
              src="src/assets/images/logo.svg"
              alt="logo"
              className="sm:w-[200px]"
            />
          </div>
          <div>
            <button
              onClick={() => setdarkmode(!darkmode)}
              className={`w-fit h-fit p-2 ${
                darkmode ? "hover:bg-[#52576a]" : "hover:bg-slate-300"
              }  rounded-2xl cursor-pointer`}
            >
              {darkmode ? (
                <img
                  src="src/assets/images/icon-sun.svg"
                  alt=""
                  className="w-[25px] sm:w-[35px]"
                />
              ) : (
                <img
                  src="src/assets/images/icon-moon.svg"
                  alt=""
                  className="w-[25px] sm:w-[35px]"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full pt-10 px-2 flex flex-col justify-center items-center gap-3 sm:flex sm:flex-row  sm:justify-between">
        <div>
          <h1
            className={`text-3xl sm:text-4xl ${
              darkmode ? "text-white" : "text-black"
            }  font-bold`}
          >
            Extensions List
          </h1>
        </div>
        <div className="flex gap-2 text-lg">
          <button
            className={`w-fit h-fit p-2 ${
              darkmode
                ? "bg-[#1f2535] text-white hover:bg-red-400 hover:text-black"
                : "bg-[#fcfdff] hover:bg-red-400 hover:text-white"
            }  px-4  rounded-2xl cursor-pointer   `}
          >
            All
          </button>
          <button
            className={`w-fit h-fit p-2 ${
              darkmode
                ? "bg-[#1f2535] text-white hover:bg-red-400 hover:text-black"
                : "bg-[#fcfdff] hover:bg-red-400 hover:text-white"
            }  px-4  rounded-2xl cursor-pointer   `}
          >
            Active
          </button>
          <button
            className={`w-fit h-fit p-2 ${
              darkmode
                ? "bg-[#1f2535] text-white hover:bg-red-400 hover:text-black"
                : "bg-[#fcfdff] hover:bg-red-400 hover:text-white"
            }  px-4  rounded-2xl cursor-pointer   `}
          >
            Inactive
          </button>
        </div>
      </div>
      <div className=" w-full h-full mt-10 px-2 grid  sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center">
        <Card />
      </div>
    </div>
  );
}

export default App;
