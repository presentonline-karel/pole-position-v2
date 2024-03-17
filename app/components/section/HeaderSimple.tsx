// Styles
import styles from "./HeaderSimple.module.scss";

// Types
import { HeaderSimpleProps } from "@/types/sections/HeaderSimple";

// Components
import Wrapper from "../helpers/Wrapper";



export default function HeaderSimple({ data }: HeaderSimpleProps) {
  return (
    <div className={styles.headerSimple}>
      <Wrapper>
        <h1 className="mb-md">{data.title}</h1>
        <p className={styles.subtitle}>{data.subtitle}</p>
      </Wrapper>
    </div>
  )
}