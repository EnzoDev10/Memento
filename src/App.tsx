import "@/index.css";

import "@/components/Reusables";

import { Hero } from "@/components/Hero";

import { Form } from "@/features/Form/Form";

import { Calendar } from "@/features/Document/Calendar";
import { useEffect, useRef, useState } from "react";

import { DateContext } from "@/global/DateContext";

import { styled } from "styled-components";
import { StyledBtn, StyledPDFViewer } from "@/components/Reusables";
import { ReusableDialog } from "./components/ReusableDialog";
import { PDFDownloadLink } from "@react-pdf/renderer";

const StyledButtonsContainer = styled.article`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

function App() {
    const currentDate = new Date();
    const [userDate, setUserDate] = useState<Date>(currentDate);
    const [weeksDifference, setWeeksDifference] = useState<number>(0);
    const [quote, setQuote] = useState<string>("");
    const [author, setAuthor] = useState<string>("");

    const [showDocument, setShowDocument] = useState(false);

    const [open, setOpen] = useState(false);

    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (showDocument) {
            console.log("enrique");
            setOpen(true);
        } else {
            console.log("andreaaa");
        }
    }, [showDocument]);

    const calendar = (
        <Calendar
            weeksDifference={weeksDifference}
            quote={quote}
            author={author}
        />
    );

    return (
        <>
            <Hero />
            <section>
                <DateContext.Provider
                    value={{
                        userDate,
                        setUserDate,
                        weeksDifference,
                        setWeeksDifference,
                        quote,
                        setQuote,
                        author,
                        setAuthor,
                        showDocument,
                        setShowDocument,
                    }}
                >
                    <Form />
                </DateContext.Provider>
            </section>

            <ReusableDialog
                title='title'
                description='descriotion'
                open={open}
                setOpen={setOpen}
            >
                {showDocument && (
                    <>
                        <StyledPDFViewer
                            innerRef={iframeRef}
                            showToolbar={false}
                        >
                            {calendar}
                        </StyledPDFViewer>
                        <StyledButtonsContainer>
                            <PDFDownloadLink
                                document={calendar}
                                fileName='Memento-Mori-calendar'
                                style={{}}
                            >
                                <StyledBtn>Download</StyledBtn>
                            </PDFDownloadLink>
                            <StyledBtn onClick={() => setOpen(false)}>
                                Close
                            </StyledBtn>
                        </StyledButtonsContainer>
                    </>
                )}
            </ReusableDialog>
        </>
    );
}

export default App;
