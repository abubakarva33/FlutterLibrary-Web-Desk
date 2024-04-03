const Footer = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <img src="/images/logo.webp" alt="" />
          <p>
            Beautifully designed, expertly crafted Flutter components and templates, to jumpstart
            your projects and speed up your development process.
          </p>
          <div className="flex">
            <img src="/images/x.webp" alt="" />
            <img src="/images/linkedin.webp" alt="" />
            <img src="/images/instragram.webp" alt="" />
            <img src="/images/facebook.webp" alt="" />
          </div>
        </div>
        <div className="flex ms-auto">
          <div>
            <h6>Explore</h6>
            <p>Blogs</p>
            <p>Templates</p>
            <p>Screens</p>
          </div>
          <div>
            <h6>Support</h6>
            <p>Pricing</p>
            <p>Become a sponsor</p>
            <p>Hire top Flutter Devs</p>
          </div>
        </div>
      </div>
      <div className="flex align-middle justify-between">
        <p>Copyright 2024 TheFlutterLibrary. All rights reserved.</p>
        <div className="flex">
          <p> Privacy Policy </p>
          <p> Terms & Conditions </p>
          <p> Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
