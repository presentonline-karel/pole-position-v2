// Next & React
import Image from "next/image";
import Link from "next/link";

// Components
import Wrapper from "../helpers/Wrapper";

// Styles
import styles from "./Footer.module.scss";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.wrapper}>

          {/* Logo */}
          <div className={`${styles.logo} relative`}>
            <Image
              className="object-contain"
              src="/Pole-Position-Logo.png"
              alt="Pole Position logo"
              fill={true}
            />
          </div>

          {/* Arrow up */}
          <Link className={`${styles.arrowContainer} absolute`} href="#container">
            <FontAwesomeIcon className={styles.arrowUp} icon={faArrowUp} />
          </Link>

          {/* Footer links */}
          <div className={styles.linkGroups}>
            <div className={styles.linkGroup}>
              <div className={styles.linkTitle}>Main pages</div>

              <div className={styles.links}>
                <Link className={styles.link} href="/">Schedule</Link>
                <Link className={styles.link} href="/">Results</Link>
                <Link className={styles.link} href="/">Drivers</Link>
                <Link className={styles.link} href="/">Teams</Link>
              </div>
            </div>

            <div className={`${styles.linkGroup} ${styles.linkGroupSocials}`}>
              <div className={styles.linkTitle}>Socials</div>

              <div className={styles.links}>
                <Link className={styles.link} href="/">Facebook</Link>
                <Link className={styles.link} href="/">Instagram</Link>
                <Link className={styles.link} href="/">Twitter</Link>
              </div>
            </div>

            <div className={styles.linkGroup}>
              <div className={styles.linkTitle}>Others</div>

              <div className={styles.links}>
                <Link className={styles.link} href="/">Privacy policy</Link>
                <Link className={styles.link} href="/">Partners</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.footerBottom}`}>
          <div className={styles.copyright}>
            © POLE POSITION 2024
          </div>

          <div className={`${styles.socials} flex`}>
            <FontAwesomeIcon className={styles.social} icon={faInstagram} />
            <FontAwesomeIcon className={styles.social} icon={faTwitter} />
            <FontAwesomeIcon className={styles.social} icon={faFacebookF} />
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}