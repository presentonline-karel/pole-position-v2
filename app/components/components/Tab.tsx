// Types
import { TabProps } from "@/types/components/Tab";



export default function Tab({ label, active, onClick }: TabProps) {
  return (
    <div
      className={`tab ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  )
}