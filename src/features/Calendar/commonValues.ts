export interface documentProps {
    weeksDifference: number;
    quote: string;
    author: string;
    fill: string;
    stroke: string;
}

export interface yearProps {
    year: number;
    amountToFill: number;
    strokeColor: string;
    color: string;
    index: number;
}

export const weekSize = 4.75;
export const gap = 4;
export const topPadding = 2;
export const bottomPadding = 2;
export const totalWeeks = 53; // semana extra para dejar un cuadrado en blanco después de la semana 26
export const svgWidth = totalWeeks * (weekSize + gap);
export const svgHeight = weekSize + topPadding + bottomPadding;

export interface weekProps {
    index: number;
    strokeColor: string;
    fillColor: string;
}

export const quotesAndAuthors = [
    {
        quote: "Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested.",
        author: "Seneca",
    },
    {
        quote: "He who fears death will never do anything worthy of a man who is alive.",
        author: "Seneca",
    },
    {
        quote: "You act like mortals in all that you fear, and like immortals in all that you desire.",
        author: "Seneca",
    },
    {
        quote: "He does only what is his to do, and considers constantly what the world has store for him—doing his best, and trusting that all is for the best. For we carry our fate with us—and it carries us.",
        author: "Marcus Aurelius",
    },
    {
        quote: "He who every day puts the finishing touches to his life is never short of time.",
        author: "Seneca",
    },
    {
        quote: "You could leave life right now. Let that determine what you do and say and think.",
        author: "Marcus Aurelius",
    },
    {
        quote: "There is only one thing that is important — to live honestly and die honestly.",
        author: "Leo Tolstoy",
    },
    {
        quote: "Do not act as if you were going to live ten thousand years. Death hangs over you.",
        author: "Marcus Aurelius",
    },
];
