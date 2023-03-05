import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="logo" width={80} height={80} />
        <div>
          <p className="font-medium text-2xl text-white ml-2 relative">
            Computer Society of India
            <span className="text-chip absolute bottom-3">TM</span>
          </p>
          <p className="font-medium text-sm text-white text-right">
            Since 1965
          </p>
        </div>
      </div>
      <div className="flex justify-evenly items-center gap-8 self-start mt-4">
        <div className="text-white text-lg cursor-pointer">
          HOME
        </div>
        <div className="text-white/50 text-lg cursor-pointer hover:text-white/80">
          OUR TEAM
        </div>
        <div className="text-white/50 text-lg cursor-pointer hover:text-white/80">
          OUR EVENTS
        </div>
        <div className="text-white/50 text-lg cursor-pointer hover:text-white/80">
          CONTACT US
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
