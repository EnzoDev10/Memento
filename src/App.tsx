import "@/index.css";

import "@/components/Reusables";

import { Form } from "@/features/Form/Form";

import { Calendar } from "@/features/Document/Calendar";
import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useRef, useState } from "react";

import { DateContext } from "@/global/DateContext";

function App() {
    const currentDate = new Date();
    const [userDate, setUserDate] = useState<Date>(currentDate);
    const [weeksDifference, setWeeksDifference] = useState<number>(0);
    const [quote, setQuote] = useState<string>("");
    const [author, setAuthor] = useState<string>("");

    const [change, setChange] = useState(false);

    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [isIframeLoading, setIsIframeLoading] = useState(true);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        if (iframe.contentDocument?.readyState === "complete") {
            setIsIframeLoading(false);
            return;
        }

        setIsIframeLoading(true);

        function handleLoad() {
            setIsIframeLoading(false);
        }

        iframe.addEventListener("load", handleLoad);

        return () => {
            iframe.removeEventListener("load", handleLoad);
        };
    }, [userDate]);

    return (
        <>
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
                        change,
                        setChange,
                    }}
                >
                    <Form />
                </DateContext.Provider>
            </section>
            <section
                style={{
                    width: "650px",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                {change && (
                    <>
                        {isIframeLoading && (
                            <h3
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                {" "}
                                Cargando...
                            </h3>
                        )}

                        <PDFViewer
                            style={{ width: "100%", height: "100%" }}
                            innerRef={iframeRef}
                            showToolbar={false}
                        >
                            <Calendar
                                weeksDifference={weeksDifference}
                                quote={quote}
                                author={author}
                            />
                        </PDFViewer>
                    </>
                )}
            </section>
        </>
    );
}

export default App;
