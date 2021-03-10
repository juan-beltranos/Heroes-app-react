import React,{useMemo} from "react";
import { getHeoresByPublisher } from "../../selectors/getHeoresByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

 const heroes = useMemo(() => getHeoresByPublisher(publisher), [publisher]);

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {
        heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero}></HeroCard>
        ))
      }
    </div>
  );
};
