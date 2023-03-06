import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const TeamCard = () => {
  return (
    <div className="shadow-teamCard w-[350px] flex flex-col items-center justiy-center py-6 rounded-xl">
      <img
        src="https://i.pravatar.cc/150"
        alt="member-photo"
        className="rounded-full"
      />
      <p className="text-textColor-header text-lg font-medium mt-2">
        Sparsh Malhotra
      </p>
      <p className="text-textColor-header text-base">President</p>
      <p className="text-textColor-subheader text-sm mt-2 px-6 text-center">
        Please stop looking at your phone and pet me rub face on owner for have
        secret
      </p>
      <div className="flex items-center gap-4 mt-3">
        <div className="rounded-full w-10 h-10 bg-[#898989]/[.19] flex items-center justify-center">
          <AiFillGithub fontSize={24} />
        </div>
        <div className="rounded-full w-10 h-10 bg-[#898989]/[.19] flex items-center justify-center">
          <AiFillLinkedin fontSize={24} />
        </div>
        <div className="rounded-full w-10 h-10 bg-[#898989]/[.19] flex items-center justify-center">
          <AiFillInstagram fontSize={24} />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
