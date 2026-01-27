import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

import "@/index.css";
import { Year } from "@/features/Document/Year";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#e9ecef",
        alignItems: "center",
        gap: 8,
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

    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <Text style={{ fontSize: 24, marginTop: 10 }}>
                    Memento Mori
                </Text>

                <View style={styles.weeksContainer}>{content}</View>
                <View
                    style={{
                        gap: 10,
                        // tamaño perfecto para que la cita entre con la grilla de semanas
                        padding: "0 70 0 55",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 12,
                            alignSelf: "center",
                            textAlign: "center",
                        }}
                    >
                        {quote}
                    </Text>
                    <Text style={{ fontSize: 10, alignSelf: "center" }}>
                        - {author}
                    </Text>
                </View>
            </Page>
        </Document>
    );
};
