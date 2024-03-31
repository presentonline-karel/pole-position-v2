"use client";

// Next & React
import { useState, useEffect } from "react";

// Components
import Wrapper from "../helpers/Wrapper";
import GrandPrix from "../organisms/GrandPrix";

// Styles
import styles from "../../Schedule.module.scss";

// Types
import { GrandPrixProps } from "@/types/organisms/GrandPrix";
import { ScheduleProps } from "@/types/sections/Schedule";

// ClassNames
import cx from "classnames";



export default function Schedule({ races, upcomingGPs, pastGPs }: { races: ScheduleProps, upcomingGPs: ScheduleProps, pastGPs: ScheduleProps }) {

  // State
  const [showUpcomingGps, setShowUpcomingGps] = useState(true);



  return (
    <div>
      <div className={styles.tabs}>
        <div className={styles.container}>
          <div
            onClick={() => setShowUpcomingGps(true)}
            className={cx(`${styles.tab}`, {
              [styles.active]: showUpcomingGps === true
            })}
          >
            Upcoming
          </div>

          <div
            onClick={() => setShowUpcomingGps(false)}
            className={cx(`${styles.tab}`, {
              [styles.active]: showUpcomingGps === false
            })}
          >
            Past
          </div>
        </div>
      </div>

      <Wrapper>

        {/* Upcoming GPs */}
        <div
          className={cx(`${styles.scheduleGrid}`, {
            "hidden": showUpcomingGps === false
          })}
        >
          {upcomingGPs.map((race: GrandPrixProps, index: number) => (
            <GrandPrix {...race} key={index} />
          ))}
        </div>



        {/* Past GPs */}
        <div
          className={cx(`${styles.scheduleGrid}`, {
            "hidden": showUpcomingGps === true
          })}
        >
          {pastGPs.map((race: GrandPrixProps, index: number) => (
            <GrandPrix {...race} key={index} />
          ))}
        </div>



        {/* All GPs */}
        <div
          className={`${styles.scheduleGrid} ${styles.desktop}`}
        >
          {races.map((race: GrandPrixProps, index: number) => (
            <GrandPrix {...race} key={index} />
          ))}
        </div>
      </Wrapper>
    </div>
  )
}