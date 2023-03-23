import { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";

import TeamCard from "../components/Team/TeamCard";
import { Loader } from "@mantine/core";

import events_underline from "../images/events-underline.svg";

const Team = () => {
  const { data, isLoading, error } = useFetch("all/team/");
  const [teamData, setTeamData] = useState({
    core: [],
    primeCore: [],
    subheads: [],
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const primeCoreMembers = data.filter(
        (ele) => ele.type_member === "prime-core"
      );
      const coreMembers = data.filter((ele) => ele.type_member === "core");
      const subheadMembers = data.filter(
        (ele) => ele.type_member === "sub-heads"
      );
      setTeamData({
        core: coreMembers,
        primeCore: primeCoreMembers,
        subheads: subheadMembers,
      });
    }
  }, [data]);

  if (isLoading)
    return (
      <div className="w-full h-1/2 flex items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <div className="mb-8">
      <div className="w-full uppercase flex flex-col items-center justify-center mb-8">
        <h1 className="my-8 font-semibold text-4xl mb-1">Prime Core</h1>
        <img className="w-[17vw]" src={events_underline} alt="__________" />
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 justify-items-center items-center">
        {teamData?.primeCore.map((member) => (
          <TeamCard data={member} key={member.id} />
        ))}
      </div>
      <div className="w-full uppercase flex flex-col items-center justify-center mb-8">
        <h1 className="my-8 font-semibold text-4xl mb-1">Core</h1>
        <img className="w-[17vw]" src={events_underline} alt="__________" />
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 justify-items-center items-center">
        {teamData?.core.map((member) => (
          <TeamCard data={member} key={member.id} />
        ))}
      </div>
      <div className="w-full uppercase flex flex-col items-center justify-center mb-8 mt-4">
        <h1 className="my-8 font-semibold text-4xl mb-1">Sub Heads</h1>
        <img className="w-[17vw]" src={events_underline} alt="__________" />
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 justify-items-center items-center">
        {teamData?.subheads.map((member) => (
          <TeamCard data={member} key={member.id} />
        ))}
      </div>
    </div>
  );
};

export default Team;
