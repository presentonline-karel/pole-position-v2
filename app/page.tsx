// Components
import GrandPrix from "./components/organisms/GrandPrix";

// Types
import { GrandPrixProps } from "@/types/organisms/GrandPrix";

// Styles
import styles from "./Schedule.module.css";



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
      <div className={styles.scheduleGrid}>
        {races.map((race: GrandPrixProps, index: number) => (
          <GrandPrix {...race} key={index} />
        ))}
      </div>
    </main>
  );
}