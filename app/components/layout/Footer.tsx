// Next & React
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>

          {/* Logo */}
          <div className={styles.logo}>
            <Image
              className="object-contain"
              src="/Pole-Position-Logo.png"
              alt="Pole Position logo"
              fill={true}
            />
          </div>

          {/* Footer links */}
          <div className="flex justify-between gap-md">
            <div className={styles.linkGroup}>
              <div className={`${styles.linkTitle} mb-md`}>Main pages</div>

              <div className="flex flex-col gap-xs">
                <Link className={styles.link} href="/">Schedule</Link>
                <Link className={styles.link} href="/">Results</Link>
                <Link className={styles.link} href="/">Drivers</Link>
                <Link className={styles.link} href="/">Teams</Link>
              </div>
            </div>

            <div className={styles.linkGroup}>
              <div className={`${styles.linkTitle} mb-md`}>Others</div>

              <div className="flex flex-col gap-xs">
                <Link className={styles.link} href="/">Privacy policy</Link>
                <Link className={styles.link} href="/">Partners</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.footerBottom} flex items-center justify-between`}>
          <div className={styles.copyright}>
            © POLE POSITION 2024
          </div>

          <div className={`${styles.socials} flex`}>
            <FontAwesomeIcon className={styles.social} icon={faInstagram} />
            <FontAwesomeIcon className={styles.social} icon={faTwitter} />
            <FontAwesomeIcon className={styles.social} icon={faFacebookF} />
          </div>
        </div>
      </div>
    </footer>
  )
}