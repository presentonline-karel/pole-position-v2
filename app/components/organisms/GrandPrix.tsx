// Types
import { GrandPrixProps } from "@/types/organisms/GrandPrix";

// Styles
import classes from "./GrandPrix.module.scss";
import Image from "next/image";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";



export default function GrandPrix(data: GrandPrixProps) {
  return (
    <div className={classes.grandPrix}>
      <div>

        {/* GP heading */}
        <div>
          <div>
            <div className={classes.testTextRed}>
              Round {data.round}
            </div>

            <div>
              UP NEXT
            </div>
          </div>

          <div>
            {data.raceName}
            <FontAwesomeIcon 
              icon={faChevronRight} 
            />
          </div>

          <div>
            FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024
          </div>

          <div>
            {data.date}
          </div>
        </div>

        {/* Circuit map */}
        <div className={classes.grandPrix__circuitMap}>
          <div>
            <Image
              src="/Bahrain-Circuit-Map.png"
              alt="Bahrain circuit map"
              fill={true}
            />
          </div>
        </div>
      </div>

      {/* GP preview img */}
      <div>
        <Image 
          src="/GP-Preview-Image.jpg"
          alt="GP preview image"
          fill={true} 
        />
      </div>

      {/* GP timetable */}
      <div>

        {/* friday */}
        <div>
          <div>
            <div>
              FP1
            </div>

            <div>
              <div>Fri</div>
              <div>15:30 - 16:30</div>
            </div>
          </div>

          <div>
            <div>
              Qualifying
            </div>

            <div>
              <div>Fri</div>
              <div>20:30 - 21:30</div>
            </div>
          </div>
        </div>

        {/* saturday */}
        <div>
          <div>
            <div>
              Sprint shootout
            </div>

            <div>
              <div>Sat</div>
              <div>14:30 - 15:30</div>
            </div>
          </div>

          <div>
            <div>
              Sprint
            </div>

            <div>
              <div>Sat</div>
              <div>20:30</div>
            </div>
          </div>
        </div>

        {/* sunday */}
        <div>
          <div>
            <div>
              Race
            </div>

            <div>
              <div>Sun</div>
              <div>14:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}