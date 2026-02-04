import { createContext } from "react";

type stateActionString = React.Dispatch<React.SetStateAction<string>>;

interface CustomizationContextType {
    quote: string;
    setQuote: stateActionString;
    author: string;
    setAuthor: stateActionString;
    fillColor: string;
    setFillColor: stateActionString;
    strokeColor: string;
    setStrokeColor: stateActionString;
}

export const CustomizationContext = createContext<CustomizationContextType>({
    quote: "You could leave life right now. Let that determine what you do andsay and think.",
    setQuote: () => {},
    author: "Marcus Aurelius",
    setAuthor: () => {},
    fillColor: "#333",
    setFillColor: () => {},
    strokeColor: "#222",
    setStrokeColor: () => {},
});
