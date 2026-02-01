import { createContext } from "react";

interface DateContextType {
    userDate: Date;
    setUserDate: React.Dispatch<React.SetStateAction<Date>>;
    weeksDifference: number;
    setWeeksDifference: (weeks: number) => void;
    quote: string;
    setQuote: React.Dispatch<React.SetStateAction<string>>;
    author: string;
    setAuthor: React.Dispatch<React.SetStateAction<string>>;
    showDocument: boolean;
    setShowDocument: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DateContext = createContext<DateContextType>({
    userDate: new Date(),
    setUserDate: () => {},
    weeksDifference: 0,
    setWeeksDifference: () => {},
    quote: "You could leave life right now. Let that determine what you do andsay and think.",
    setQuote: () => {},
    author: "Marcus Aurelius",
    setAuthor: () => {},
    showDocument: false,
    setShowDocument: () => {},
});
