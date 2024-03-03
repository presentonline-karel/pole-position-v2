// Types
import { GrandPrixProps } from "@/types/organisms/GrandPrix";

// Styles
import styles from "./GrandPrix.module.scss";
import Image from "next/image";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Utils
import { getDateGp } from "@/utils/get-date-gp";
import { isGrandPrixThisWeek } from "@/utils/is-grand-prix-this-week";



export default function GrandPrix(data: GrandPrixProps) {
  return (
    <div className={`${styles.grandPrix} flex flex-col gap-xl`}>

      {/* GP heading */}
      <div className="flex gap-xl">
        <div className={styles.heading}>
          <div className="flex items-center gap-md mb-lg">
            <div className={styles.round}>
              Round {data.round}
            </div>

            {isGrandPrixThisWeek(new Date(data.date)) && (
              <div className={styles.thisWeek}>
                THIS WEEK
              </div>
            )}
          </div>

          <div className={`${styles.name} flex gap-lg items-center mb-sm`}>
            <span>{data.raceName.replace("Grand Prix", "GP")}</span>
            <FontAwesomeIcon
              className={styles.nameIcon}
              icon={faChevronRight}
            />
          </div>

          <div className={`${styles.fullName} mb-sm`}>
            FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024
          </div>

          <div className={styles.date}>
            {getDateGp(data.date)}
          </div>
        </div>

        {/* Circuit map */}
        <div className={styles.mapWrapper}>
          <div className="w-full h-full relative">
            <Image
              className="object-contain"
              src="/Bahrain-Circuit-Map.png"
              alt="Bahrain circuit map"
              fill={true}
            />
          </div>
        </div>
      </div>

      {isGrandPrixThisWeek(new Date(data.date)) && (
        <div>

          {/* GP preview img */}
          <div className={`${styles.preview} w-full relative mb-xl`}>
            <Image
              className="object-cover object-bottom"
              src="/GP-Preview-Image.jpg"
              alt="GP preview image"
              fill={true}
            />
          </div>

          {/* GP timetable */}
          <div className={`${styles.schedule} flex flex-col gap-md`}>

            {/* friday */}
            <div className={`${styles.scheduleDay} flex flex-col gap-md`}>
              <div className={`${styles.scheduleEvent} flex justify-between gap-md`}>
                <div className={styles.event}>FP1</div>
                <div className={`${styles.dayTime} flex justify-between items-center`}>
                  <div className={styles.day}>Fri</div>
                  <div className={`${styles.time} whitespace-nowrap`}>15:30 - 16:30</div>
                </div>
              </div>

              <div className={`${styles.scheduleEvent} flex justify-between gap-md`}>
                <div className={styles.event}>Qualifying</div>
                <div className={`${styles.dayTime} flex justify-between items-center`}>
                  <div className={styles.day}>Fri</div>
                  <div className={`${styles.time} whitespace-nowrap`}>20:30 - 21:30</div>
                </div>
              </div>
            </div>

            {/* saturday */}
            <div className={`${styles.scheduleDay} flex flex-col gap-md`}>
              <div className={`${styles.scheduleEvent} flex justify-between gap-md`}>
                <div className={styles.event}>Sprint shootout</div>
                <div className={`${styles.dayTime} flex justify-between items-center`}>
                  <div className={styles.day}>Sat</div>
                  <div className={`${styles.time} whitespace-nowrap`}>14:30 - 15:30</div>
                </div>
              </div>

              <div className={`${styles.scheduleEvent} flex justify-between gap-md`}>
                <div className={styles.event}>Sprint</div>
                <div className={`${styles.dayTime} flex justify-between items-center`}>
                  <div className={styles.day}>Sat</div>
                  <div className={`${styles.time} whitespace-nowrap`}>20:30</div>
                </div>
              </div>
            </div>

            {/* sunday */}
            <div className={`${styles.scheduleDay} flex flex-col gap-md`}>
              <div className={`${styles.scheduleEvent} flex justify-between gap-md`}>
                <div className={styles.event}>Race</div>
                <div className={`${styles.dayTime} flex justify-between items-center`}>
                  <div className={styles.day}>Sun</div>
                  <div className={`${styles.time} whitespace-nowrap`}>14:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}