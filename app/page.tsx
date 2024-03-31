// Components
import HeaderSimple from "./components/section/HeaderSimple";
import Schedule from "./components/section/Schedule";

// Types
import { GrandPrixProps } from "@/types/organisms/GrandPrix";



// Get 2024 schedule
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

  // Schedule data
  const schedule = await getRaceSchedule();
  const races = schedule.MRData.RaceTable.Races;

  // Filter races between past & upcoming
  const currentDate = new Date();
  const upcomingGPs = races.filter((race:GrandPrixProps) => new Date(race.date) > currentDate);
  const pastGPs = races.filter((race:GrandPrixProps) => new Date(race.date) < currentDate);

  // Header data
  const dataHeader = {
    title: "F1 Schedule 2024",
    subtitle: "2023 FIA Formula One World Championship Race Calendar"
  }



  return (
    <main>
      <HeaderSimple data={dataHeader} />
      <Schedule races={races} upcomingGPs={upcomingGPs} pastGPs={pastGPs} />
    </main>
  );
}