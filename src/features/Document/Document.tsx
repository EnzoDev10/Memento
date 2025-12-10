import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Hacer que su contenido sea mutable a traves del formulario.

import "@/index.css";
import { Year } from "@/components/YearGenerator";

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
export const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ fontSize: 24 }}>Memento Mori</Text>
        </View>
        <View style={styles.section}>
          {Array.from({ length: 75 }).map((_, index) => (
            <>
              <Year key={index} year={index + 1} />
               {((index + 1) % 10 === 0 || (index + 1) % 10 === 5) ? (
                 <View style={{ marginTop: 2, marginBottom: 2 }} />
               ) : null}
            </>
          ))}
        </View>
      </Page>
    </Document>
  );
};
