import { FaBarsStaggered } from "react-icons/fa6";

const Header = ({ setIsOpen }) => {
  return (
    <div className="flex mt-5">
      <label
        htmlFor="search"
        className="sm:flex items-center	 bg-slate-100 me-auto  px-4 rounded-3xl w-1/4	hidden"
      >
        <img src="/images/searchIcon.webp" alt="" className="max-w-6 max-h-6 pe-2" />
        <input
          type="text"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="search..."
          className="bg-transparent py-2 outline-transparent border-transparent "
        />
      </label>
      <div className="flex items-center	justify-between w-full sm:w-auto">
        <img src="/images/brightnessIcon.webp" alt="" className="max-w-6 max-h-6 me-4" />
        <button className="px-4 py-2 bg-slate-50 rounded-3xl me-4 hover:bg-slate-100">Login</button>
        <button className="px-4 py-2 bg-zinc-950 text-indigo-50 rounded-3xl hover:bg-zinc-800">
          Get Pro
        </button>
        <div
          className="block lg:hidden px-4 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FaBarsStaggered />
        </div>
      </div>
    </div>
  );
};

export default Header;
