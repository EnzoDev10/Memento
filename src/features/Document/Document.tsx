import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Hacer que su contenido sea mutable a traves del formulario.

import "@/index.css";
import { WeekSvg } from "@/components/WeekSvg";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#e9ecef",
  },
  section: {
    padding: 10,
    alignSelf: "center",
  },
});

// Hace que el componente que contiene las semanas se repita 80 veces
export const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ fontSize: 28 }}>Memento Mori</Text>
        </View>
        <View style={styles.section}>
          {Array.from({ length: 75 }).map((_, index) => (
            <WeekSvg key={index} year={index + 1} />
          ))}
        </View>
      </Page>
    </Document>
  );
};
