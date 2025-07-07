function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#050a1e] px-16 via-[#07102f] to-[#09153f] ">
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
    </div>
  );
}

export default App;
