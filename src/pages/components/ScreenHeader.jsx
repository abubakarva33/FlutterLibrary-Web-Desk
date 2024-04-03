const screens = [
  "All",
  "New",
  "Popular",
  "Onboarding",
  "Auth",
  "Shop",
  "Chat",
  "TOP Verification",
  "Dashboard",
  "Food",
  "Restaurent",
  "Fitness",
];
const ScreenHeader = () => {
  return (
    <div className="flex items-center mb-4 flex-wrap	">
      <div className="flex items-center px-4 py-2 border rounded-3xl me-2 bg-slate-50">
        <img src="/images/filterIcon.webp" alt="" className="w-4 h-4 me-2" />
        <span>Filters</span>
      </div>
      {screens?.map((item, ind) => (
        <button
          key={ind}
          className={`px-4 py-2 border rounded-3xl border-slate-300 me-2 hover:bg-black hover:text-indigo-50 ${
            item === "All" && "bg-black text-indigo-50 "
          }`}
        >
          {item}
        </button>
      ))}
      <img src="/images/arroIcon.webp" alt="" />
    </div>
  );
};

export default ScreenHeader;
