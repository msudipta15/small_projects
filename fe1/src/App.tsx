import { useEffect, useState } from "react";
import { Card } from "./components/card";

const extensions = [
  {
    logo: "src/assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "src/assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "src/assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "src/assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "src/assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "src/assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "src/assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "src/assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "src/assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "src/assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "src/assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "src/assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

function App() {
  const [darkmode, setdarkmode] = useState(false);
  const [showall, setshowall] = useState(true);
  const [showactive, setshowactive] = useState(false);
  const [showinactive, setshowinactive] = useState(false);
  const [extensionsdata, setextensionsdata] = useState(extensions);

  function toggleactive(name: string) {
    setextensionsdata((prev) =>
      prev.map((e) => (e.name === name ? { ...e, isActive: !e.isActive } : e))
    );
  }

  useEffect(() => {
    console.log(darkmode);
  }, [darkmode]);

  return (
    <div
      className={`min-h-screen max-h-full w-full  pb-10  px-10 sm:px-56  ${
        darkmode
          ? "bg-gradient-to-b   dark:from-[#050a1e] dark:via-[#07102f] dark:to-[#09153f]"
          : "bg-gradient-to-b from-[#ecf3fd] via-[#edf6fb] to-[#effbfb]"
      }   `}
    >
      <div className="w-full pt-6">
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
            onClick={() => {
              setshowall(true);
              setshowactive(false);
              setshowinactive(false);
            }}
            className={`w-fit h-fit p-2 ${
              darkmode
                ? "bg-[#1f2535] text-white hover:bg-red-400 hover:text-black"
                : "bg-[#fcfdff] hover:bg-red-400 hover:text-white"
            }  px-4  rounded-2xl cursor-pointer   `}
          >
            All
          </button>
          <button
            onClick={() => {
              setshowactive(true);
              setshowall(false);
              setshowinactive(false);
            }}
            className={`w-fit h-fit p-2 ${
              darkmode
                ? "bg-[#1f2535] text-white hover:bg-red-400 hover:text-black"
                : "bg-[#fcfdff] hover:bg-red-400 hover:text-white"
            }  px-4  rounded-2xl cursor-pointer   `}
          >
            Active
          </button>
          <button
            onClick={() => {
              setshowinactive(true);
              setshowall(false);
              setshowactive(false);
            }}
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
        {showall &&
          extensionsdata.map((e) => (
            <Card
              key={e.name}
              darkmode={darkmode}
              name={e.name}
              description={e.description}
              logo={e.logo}
              isActive={e.isActive}
              toggleactive={toggleactive}
            />
          ))}
        {showactive &&
          extensionsdata
            .filter((e) => e.isActive)
            .map((e) => (
              <Card
                key={e.name}
                darkmode={darkmode}
                name={e.name}
                description={e.description}
                logo={e.logo}
                isActive={e.isActive}
                toggleactive={toggleactive}
              />
            ))}
        {showinactive &&
          extensionsdata
            .filter((e) => !e.isActive)
            .map((e) => (
              <Card
                key={e.name}
                darkmode={darkmode}
                name={e.name}
                description={e.description}
                logo={e.logo}
                isActive={e.isActive}
                toggleactive={toggleactive}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
