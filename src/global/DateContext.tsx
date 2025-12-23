import { createContext } from "react";

interface DateContextType {
  userDate: Date;
  setUserDate: React.Dispatch<React.SetStateAction<Date>>;
  weeksDifference: number;
  setWeeksDifference: (weeks: number) => void;
}
export const DateContext = createContext<DateContextType>({
  userDate: new Date(),
  setUserDate: () => {},
  weeksDifference: 0,
  setWeeksDifference: () => {},
});