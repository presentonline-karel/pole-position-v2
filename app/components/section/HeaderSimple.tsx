// Styles
import styles from "./HeaderSimple.module.scss";

// Types
import { HeaderSimpleProps } from "@/types/sections/HeaderSimple";



export default function HeaderSimple({ data }: HeaderSimpleProps) {
  return (
    <div className={styles.headerSimple}>
      <div className={styles.container}>
        <h1 className="mb-md">{data.title}</h1>
        <p className={styles.subtitle}>{data.subtitle}</p>
      </div>
    </div>
  )
}