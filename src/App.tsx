import "@/index.css";

import "@/components/Reusables";

import { Hero } from "@/components/Hero";

import { Form } from "@/features/Form/Form";

import { Calendar } from "@/features/Calendar/Document/Calendar";
import { useEffect, useState } from "react";

import { DateContext } from "@/global/DateContext";
import { CustomizationContext } from "@/global/customizationContext";

import { styled } from "styled-components";
import { StyledBtn } from "@/components/Reusables";
import { ReusableDialog } from "./components/ReusableDialog";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { CalendarPreview } from "./features/Calendar/Preview/CalendarPreview";

const StyledButtonsContainer = styled.div`
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
    const [fillColor, setFillColor] = useState("#333");
    const [strokeColor, setStrokeColor] = useState("#222");

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (showDocument) {
            setOpen(true);
        }
    }, [showDocument]);

    useEffect(() => {
        if (!open) {
            setQuote("");
            setAuthor("");
        }
    }, [open]);

    const calendar = (
        <Calendar
            weeksDifference={weeksDifference}
            quote={quote}
            author={author}
            fill={fillColor}
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
                    fillColor: fillColor,
                    setFillColor: setFillColor,
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
                    title='Preview'
                    description='Preview of how the calendar will look, with the quote, author and the appropriate weeks filled in with the chosen color.'
                    open={open}
                    setOpen={setOpen}
                >
                    <CalendarPreview
                        weeksDifference={weeksDifference}
                        quote={quote}
                        author={author}
                        fill={fillColor}
                        stroke={strokeColor}
                    />
                    {/* <StyledPDFViewer innerRef={iframeRef} showToolbar={false}>
                        {calendar}
                    </StyledPDFViewer> */}
                    <StyledButtonsContainer>
                        <PDFDownloadLink
                            document={calendar}
                            fileName='Memento-Mori-calendar'
                        >
                            {({ loading }) => (
                                <StyledBtn disabled={loading}>
                                    {loading ? "Generating..." : "Download"}
                                </StyledBtn>
                            )}
                        </PDFDownloadLink>
                        <StyledBtn
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            Close
                        </StyledBtn>
                    </StyledButtonsContainer>
                </ReusableDialog>
            </CustomizationContext.Provider>
        </>
    );
}

export default App;
