import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font,
} from "@react-pdf/renderer";

import "@/index.css";
import { Year } from "@/features/Document/Year";

import Merriweather from "./fonts/Merriweather-VariableFont_opsz,wdth,wght.ttf";

Font.register({ family: "Merriweather", src: Merriweather });

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#e9ecef",
        alignItems: "center",
        fontFamily: "Merriweather",
    },
    weeksContainer: {
        alignSelf: "center",
    },
});

interface documentProps {
    weeksDifference: number;
    quote: string;
    author: string;
}

//  Crear un objeto con los pares de citas y autores
const quotesAndAuthors = [
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

export const Calendar = ({ weeksDifference, quote, author }: documentProps) => {
    const maxYears = 75;

    const content = [];
    let remaining = weeksDifference;

    for (let index = 0; index < maxYears; index++) {
        const weeksForThisYear = Math.min(remaining, 52);
        content.push(
            <>
                <Year
                    key={`year-${index}`}
                    year={index + 1}
                    amountToFill={weeksForThisYear}
                />
                {/*Adds a blank space after five and ten years*/}
                {(index + 1) % 10 === 0 || (index + 1) % 10 === 5 ? (
                    <View style={{ marginTop: 2, marginBottom: 2 }} />
                ) : null}
            </>,
        );
        remaining -= weeksForThisYear;
    }

    if (quote === "") {
        const pair =
            quotesAndAuthors[(quotesAndAuthors.length * Math.random()) | 0];

        quote = pair.quote;
        author = pair.author;
    }

    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: "center",
                        width: "100%",
                        padding: "8px 0",
                    }}
                >
                    Memento Mori
                </Text>

                <View style={styles.weeksContainer}>{content}</View>
                <View
                    style={{
                        gap: 8,
                        padding: "0 70 0 55",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 10,
                            alignSelf: "center",
                            textAlign: "center",
                        }}
                    >
                        {quote}
                    </Text>
                    <Text style={{ fontSize: 8, alignSelf: "center" }}>
                        - {author}
                    </Text>
                </View>
            </Page>
        </Document>
    );
};
