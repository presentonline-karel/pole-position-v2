import { GrandPrixProps } from "../organisms/GrandPrix"

export interface ScheduleProps {
    grandPrixs: GrandPrixProps[];
    map(arg0: (race: GrandPrixProps, index: number) => import("react").JSX.Element): import("react").ReactNode;
}