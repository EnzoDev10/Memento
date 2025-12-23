import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Hacer que su contenido sea mutable a traves del formulario.

import "@/index.css";
import { Year } from "@/features/Document/Year";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#e9ecef",
    alignItems: "center",
  },
  section: {
    padding: 4,
    alignSelf: "center",
  },
});

// Hace que el componente que contiene las semanas se repita 80 veces
export const MyDocument = ({
  weeksDifference,
}: {
  weeksDifference: number;
}) => {
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
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ fontSize: 24 }}>Memento Mori</Text>
        </View>
        <View style={styles.section}>{content}</View>
        <Text style={{ fontSize: 12, alignSelf: "center" }}>
          Life, if well lived, is long enough.
        </Text>
        <Text style={{ fontSize: 10, alignSelf: "center" }}>Seneca</Text>
      </Page>
    </Document>
  );
};
