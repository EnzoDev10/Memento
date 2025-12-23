import "@/index.css";

import "@/components/Reusables";

import { Form } from "@/features/Form/Form";

import { MyDocument } from "@/features/Document/Document";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";

import { DateContext } from "@/global/DateContext";

function App() {
  const currentDate = new Date();
  const [userDate, setUserDate] = useState<Date>(currentDate);
  const [weeksDifference, setWeeksDifference] = useState<number>(0);

  return (
    <>
      <section>
        <DateContext.Provider
          value={{
            userDate,
            setUserDate,
            weeksDifference,
            setWeeksDifference,
          }}
        >
          <Form />
          <p>{currentDate.toDateString()}</p>
          {userDate && <p>{userDate.toDateString()}</p>}
          {userDate && <p>{weeksDifference}</p>}
        </DateContext.Provider>
      </section>
      <section style={{ width: "80%", height: "700px" }}>
        {weeksDifference > 0 && (
          <PDFViewer style={{ width: "100%", height: "100%" }}>
            <MyDocument weeksDifference={weeksDifference} />
          </PDFViewer>
        )}
      </section>
    </>
  );
}

export default App;
