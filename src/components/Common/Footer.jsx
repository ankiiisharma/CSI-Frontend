import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-footer bg-no-repeat bg-cover w-screen h-[500px] relative">
      <div className="flex items-center absolute top-[5%] left-[5%]">
        <img src={logo} alt="logo" width={80} height={80} />
        <div>
          <p className="font-medium text-2xl text-black ml-2 relative">
            Computer Society of India
            <span className="text-chip absolute bottom-3">TM</span>
          </p>
          <p className="font-medium text-sm text-black text-right">
            Since 1965
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
