import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Hacer que su contenido sea mutable a traves del formulario.

import "@/index.css";
import { Year } from "@/features/Document/Year";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#e9ecef",
  },
  section: {
    padding: 8,
    alignSelf: "center",
  },
});

// Hace que el componente que contiene las semanas se repita 80 veces
export const MyDocument = ({}) => {
  const maxYears = 1;

  const content = Array.from({ length: maxYears }).map((_, index) => (
    <>
      <Year key={index} year={index + 1} />
      {/*Adds a blank space after five and ten years*/}
      {(index + 1) % 10 === 0 || (index + 1) % 10 === 5 ? (
        <View style={{ marginTop: 2, marginBottom: 2 }} />
      ) : null}
    </>
  ));

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ fontSize: 24 }}>Memento Mori</Text>
        </View>
        <View style={styles.section}>{content}</View>
      </Page>
    </Document>
  );
};
