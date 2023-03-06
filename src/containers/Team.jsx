import TeamCard from "../components/Team/TeamCard";

import events_underline from "../images/events-underline.svg";

const Team = () => {
  return (
    <div className="mb-8">
      <div className="w-full uppercase flex flex-col items-center justify-center mb-8">
        <h1 className="my-8 font-semibold text-4xl mb-1">Prime Core</h1>
        <img className="w-[17vw]" src={events_underline} alt="__________" />
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 justify-items-center items-center">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
      <div className="w-full uppercase flex flex-col items-center justify-center mb-8">
        <h1 className="my-8 font-semibold text-4xl mb-1">Core</h1>
        <img className="w-[17vw]" src={events_underline} alt="__________" />
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 justify-items-center items-center">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default Team;
