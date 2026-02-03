import "@/index.css";

import "@/components/Reusables";

import { Hero } from "@/components/Hero";

import { Form } from "@/features/Form/Form";

import { Calendar } from "@/features/Document/Calendar";
import { useEffect, useRef, useState } from "react";

import { DateContext } from "@/global/DateContext";
import { CustomizationContext } from "@/global/customizationContext";

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
    const [showDocument, setShowDocument] = useState(false);

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [squareColor, setSquareColor] = useState("");
    const [strokeColor, setStrokeColor] = useState("");

    const [open, setOpen] = useState(false);

    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (showDocument) {
            setOpen(true);
        }
    }, [showDocument]);

    const calendar = (
        <Calendar
            weeksDifference={weeksDifference}
            quote={quote}
            author={author}
            square={squareColor}
            stroke={strokeColor}
        />
    );

    return (
        <>
            <CustomizationContext.Provider
                value={{
                    quote,
                    setQuote,
                    author,
                    setAuthor,
                    squareColor,
                    setSquareColor,
                    strokeColor,
                    setStrokeColor,
                }}
            >
                <Hero />
                <DateContext.Provider
                    value={{
                        userDate,
                        setUserDate,
                        weeksDifference,
                        setWeeksDifference,
                        showDocument,
                        setShowDocument,
                    }}
                >
                    <Form />
                </DateContext.Provider>

                <ReusableDialog
                    title='title'
                    description='descriotion'
                    open={open}
                    setOpen={setOpen}
                >
                    <StyledPDFViewer innerRef={iframeRef} showToolbar={false}>
                        {calendar}
                    </StyledPDFViewer>
                    <StyledButtonsContainer>
                        <PDFDownloadLink
                            document={calendar}
                            fileName='Memento-Mori-calendar'
                        >
                            <StyledBtn>Download</StyledBtn>
                        </PDFDownloadLink>
                        <StyledBtn onClick={() => setOpen(false)}>
                            Close
                        </StyledBtn>
                    </StyledButtonsContainer>
                </ReusableDialog>
            </CustomizationContext.Provider>
        </>
    );
}

export default App;
