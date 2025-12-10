import "@/index.css";

import "@/components/Reusables";

import { Form } from "@/features/Form/Form";

import { MyDocument } from "@/features/Document/Document";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  return (
    <>
      <section>
        <Form />
        <PDFViewer style={{ width: "60vw", height: "700px" }}>
          <MyDocument />
        </PDFViewer>
        <PDFDownloadLink
          document={<MyDocument />}
          fileName="Memento  Mori.pdf"
        ></PDFDownloadLink>
      </section>
    </>
  );
}

export default App;
