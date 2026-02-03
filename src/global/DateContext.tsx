import { createContext } from "react";

interface DateContextType {
    userDate: Date;
    setUserDate: React.Dispatch<React.SetStateAction<Date>>;
    weeksDifference: number;
    setWeeksDifference: (weeks: number) => void;
    showDocument: boolean;
    setShowDocument: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DateContext = createContext<DateContextType>({
    userDate: new Date(),
    setUserDate: () => {},
    weeksDifference: 0,
    setWeeksDifference: () => {},
    showDocument: false,
    setShowDocument: () => {},
});
