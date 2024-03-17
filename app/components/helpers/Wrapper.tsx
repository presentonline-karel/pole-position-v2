// Styles
import styles from "./Wrapper.module.scss";



export default function Wrapper({ className, children }: { className?: string, children: JSX.Element | JSX.Element[] }) {
  return (
    <div className={`${styles.wrapper}`}>
      {children}
    </div>
  )
}