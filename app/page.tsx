// Components
import GrandPrix from "./components/organisms/GrandPrix";
import HeaderSimple from "./components/section/HeaderSimple";
import Wrapper from "./components/helpers/Wrapper";

// Types
import { GrandPrixProps } from "@/types/organisms/GrandPrix";

// Styles
import styles from "./Schedule.module.scss";



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

  // Header data
  const dataHeader = {
    title: "F1 Schedule 2024",
    subtitle: "2023 FIA Formula One World Championship Race Calendar"
  }

  return (
    <main>
      <HeaderSimple data={dataHeader} />

      <div className={styles.tabs}>
        <div className={styles.container}>
          <div className={`${styles.tab} ${styles.active}`}>Upcoming</div>
          <div className={styles.tab}>Past</div>
        </div>
      </div>

      <Wrapper>
        <div className={styles.scheduleGrid}>
          {races.map((race: GrandPrixProps, index: number) => (
            <GrandPrix {...race} key={index} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}