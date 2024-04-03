const Footer = () => {
  return (
    <div>
      <div className="flex mb-5">
        <div>
          <img src="/images/logo.webp" alt="" className="max-w-32 mb-4" />
          <p className="max-w-2xl mb-4 text-slate-500	">
            Beautifully designed, expertly crafted Flutter components and templates, to jumpstart
            your projects and speed up your development process.
          </p>
          <div className="flex">
            <img src="/images/x.webp" alt="" className="me-4 hover:brightness-50" />
            <img src="/images/linkedin.webp" alt="" className="me-4 hover:brightness-50" />
            <img src="/images/instragram.webp" alt="" className="me-4 hover:brightness-50" />
            <img src="/images/facebook.webp" alt="" className="hover:brightness-50" />
          </div>
        </div>
        <div className="flex ms-auto mt-2">
          <div className="me-10 text-sm	">
            <h6 className="font-semibold mb-2 hover:underline underline-offset-4">Explore</h6>
            <p className="mb-2 hover:underline underline-offset-4">Blogs</p>
            <p className="mb-2 hover:underline underline-offset-4">Templates</p>
            <p className="hover:underline underline-offset-4">Screens</p>
          </div>
          <div className="text-sm">
            <h6 className="font-semibold mb-2 hover:underline underline-offset-4">Support</h6>
            <p className="mb-2 hover:underline underline-offset-4">Pricing</p>
            <p className="mb-2 hover:underline underline-offset-4">Become a sponsor</p>
            <p className="hover:underline underline-offset-4">Hire top Flutter Devs</p>
          </div>
        </div>
      </div>
      <div className="flex align-middle justify-between border-t-2 pt-4 text-slate-500 pb-5">
        <p>Copyright 2024 TheFlutterLibrary. All rights reserved.</p>
        <div className="flex text-sm">
          <p className="border-e-2 px-2 hover:underline underline-offset-4"> Privacy Policy </p>
          <p className="border-e-2 px-2 hover:underline underline-offset-4"> Terms & Conditions </p>
          <p className="ps-2 hover:underline underline-offset-4"> Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
