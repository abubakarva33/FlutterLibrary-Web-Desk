const Header = () => {
  return (
    <div className="flex mt-5">
      <div className="flex items-center	 bg-slate-50 me-auto py-2 px-4 rounded-3xl w-1/4	">
        <img src="/images/searchIcon.webp" alt="" className="max-w-6 max-h-6 me-2" />
        <input type="text" name="" id="" placeholder="search..." className="bg-slate-50" />
      </div>
      <div className="flex items-center	">
        <img src="/images/brightnessIcon.webp" alt="" className="max-w-6 max-h-6 me-4" />
        <button className="px-4 py-2 bg-slate-50 rounded-3xl me-4 hover:bg-slate-100">Login</button>
        <button className="px-4 py-2 bg-zinc-950 text-indigo-50 rounded-3xl hover:bg-zinc-800">Get Pro</button>
      </div>
    </div>
  );
};

export default Header;
