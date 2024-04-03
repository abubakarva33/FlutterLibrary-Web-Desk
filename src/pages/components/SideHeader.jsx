const navItems = [
  {
    title: "Discover",
    icon: "Discover.webp",
  },
  {
    title: "UI Kits",
    icon: "UI Kits.webp",
  },
  {
    title: "Screens",
    icon: "Screens.webp",
  },
  {
    title: "Articles",
    icon: "Articles.webp",
  },
  {
    title: "Become Sponsor",
    icon: "Become Sponsor.webp",
  },
  {
    title: "Hire Flutter Dev",
    icon: "Hire Flutter Dev.webp",
  },
];
const allScreenItems = [
  {
    title: "Sign in",
    count: 10,
  },
  {
    title: "Chat",
    count: 5,
  },
  {
    title: "Onboarding",
    count: 18,
  },
  {
    title: "E-commerce",
    count: 9,
  },
  {
    title: "Checkout",
    count: 10,
  },
  {
    title: "Error",
    count: 16,
  },
];

const SideHeader = () => {
  return (
    <div className="mx-4">
      <img src="/images/logo.webp" alt="" className="my-5 w-40	" />
      <div className="mb-4">
        {navItems?.map((item, ind) => (
          <div
            className={`flex items-center px-4 py-2 mb-1 text-slate-500 ${
              item?.title === "Discover" && "bg-slate-100 text-zinc-950"
            }`}
          >
            <img src={`/public/images/${item?.icon}`} alt="" />
            <p className="ms-2 text-sm"> {item?.title}</p>
          </div>
        ))}
        <p></p>
      </div>

      <div>
        <p className="text-sm">All Screens </p>
        <div className="mb-4">
          {allScreenItems?.map((item, ind) => (
            <div
              className={`flex items-center justify-between px-4 py-2 mb-1 text-slate-500 text-sm`}
            >
              <p className="ms-2 "> {item?.title}</p>
              <p className="">{item?.count}</p>
            </div>
          ))}
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default SideHeader;
