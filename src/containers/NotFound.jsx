import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import notFoundImg from "../images/not-found.svg";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <img src={notFoundImg} alt="page not found" />
      <p className="mt-7 mb-1 text-2xl">404</p>
      <p className="ml-4 text-base text-[#00000073]">
        Sorry, the page you visited does not exist.
      </p>
      <Button className="mt-5 bg-[#228BE6]" onClick={() => navigate("/")}>
        Back Home
      </Button>
    </div>
  );
};

export default NotFound;
