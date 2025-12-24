import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import Stoic from "@/assets/fonts/STOIC.ttf";

import "@/index.css";
import { Year } from "@/features/Document/Year";

Font.register({ family: "Stoic", src: Stoic });

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#e9ecef",
    alignItems: "center",
    fontFamily: "Stoic",
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

export const MyDocument = ({
  weeksDifference,
  quote,
  author,
}: documentProps) => {
  const maxYears = 75;

  const content = [];
  let remaining = weeksDifference;

  console.log(quote, author);

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
      <Page size="A4" style={styles.page}>
        <Text style={{ fontSize: 24, marginTop: 10 }}>Memento Mori</Text>

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
          <Text style={{ fontSize: 10, alignSelf: "center" }}>- {author}</Text>
        </View>
      </Page>
    </Document>
  );
};
