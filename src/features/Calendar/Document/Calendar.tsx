import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font,
} from "@react-pdf/renderer";

import type { documentProps } from "../commonValues";

import "@/index.css";
import { Year } from "@/features/Calendar/Document/Year";

import Merriweather from "../fonts/Merriweather-VariableFont_opsz,wdth,wght.ttf";

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

export const Calendar = ({
    weeksDifference,
    quote,
    author,
    fill,
    stroke,
}: documentProps) => {
    const maxYears = 75;

    const content = [];
    let remaining = weeksDifference;

    for (let index = 0; index < maxYears; index++) {
        const weeksForThisYear = Math.min(remaining, 52);
        content.push(
            <React.Fragment key={`year-${index}`}>
                <Year
                    year={index + 1}
                    amountToFill={weeksForThisYear}
                    strokeColor={stroke}
                    color={fill}
                    index={index}
                />
                {/*Adds a blank space after five and ten years*/}
                {(index + 1) % 10 === 0 || (index + 1) % 10 === 5 ? (
                    <View style={{ marginTop: 2, marginBottom: 2 }} />
                ) : null}
            </React.Fragment>,
        );
        remaining -= weeksForThisYear;
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
                        padding: "8 70 0 55",
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
