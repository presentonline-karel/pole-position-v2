// Types
import { GrandPrixProps } from "@/types/organisms/GrandPrix";

// Import styled components
import { StyledGrandPrix } from "@/styles/styles-schedule";



export default function GrandPrix(data: GrandPrixProps) {
  return (
    <StyledGrandPrix>
      {data.raceName}
    </StyledGrandPrix>
  )
}