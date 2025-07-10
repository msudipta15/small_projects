const Topbar = () => {
  return (
    <header className="w-full bg-[#2b3743] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-lg sm:text-xl font-bold">🌍 Country Info</h1>
        <button className="text-sm sm:text-base hover:underline focus:outline-none">
          🌙 Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Topbar;
