// Import styled components
import { StyledGrandPrixs } from "@/styles/styles-schedule";

// Components
import GrandPrix from "./components/organisms/GrandPrix";

// Types
import { GrandPrixProps } from "@/types/organisms/GrandPrix";



async function getRaceSchedule() {
  const response = await fetch("https://ergast.com/api/f1/2024.json", {
    method: "GET",
    next: {
      revalidate: 5000,
    },
  });

  return response.json();
}



export default async function Page() {
  const schedule = await getRaceSchedule();
  const races = schedule.MRData.RaceTable.Races;
  console.log(schedule.MRData.RaceTable.Races);

  return (
    <main>
      <StyledGrandPrixs>
        {races.map((race: GrandPrixProps, index: number) => (
          <GrandPrix {...race} key={index} />
        ))}
      </StyledGrandPrixs>
    </main>
  );
}



// STYLED COMPONENTS TRIGGERS AN ERROR WITH THIS WAY OF FETCHING!!!

// Styles
/* export const Title = styled.h1`
  color: red;
`; */