import { useNavigate, useLocation } from "react-router-dom";

import logo from "../../images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getClasses = (navItem) => {
    const path = location.pathname;
    const navPath = "/" + navItem;
    if (path === navPath) return "text-white text-lg cursor-pointer";
    else return "text-white/50 text-lg cursor-pointer hover:text-white/80";
  };

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
        <div className={getClasses("")} onClick={() => navigate("/")}>
          HOME
        </div>
        <div className={getClasses("team")} onClick={() => navigate("/team")}>
          OUR TEAM
        </div>
        <div
          className={getClasses("events")}
          onClick={() => navigate("/events")}
        >
          OUR EVENTS
        </div>
        <div
          className="text-white/50 text-lg cursor-pointer hover:text-white/80"
          onClick={() =>
            document.querySelector("#footer").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          CONTACT US
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
