import React from "react";
import styled from "styled-components";
import type { documentProps } from "../commonValues";

import { YearPreview } from "./YearPreview";
import { PreviewText } from "@/components/Reusables";
import { devices } from "@/styles/breakpoints";

// * agregar estilos para las citas asi se parecen mas a los estilos del documento.
// * Acomodar mejor los botones.
// * agregar animaciones de entrada y salida.
// * buscar la forma de escalar el preview para que se vea bien en pantallas mas chicas.

const StyledPreviewContainer = styled.article`
    display: flex;
    flex-direction: column;
    background-color: #e9ecef;
    align-items: center;
    font-family: Merriweather;
    padding: 10px;
    border-radius: 8px;
`;

const StyledPreviewTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 20px;
`;

export const CalendarPreview = ({
    weeksDifference,
    quote,
    author,
    fill,
    stroke,
}: documentProps) => {
    const maxYears = 75;

    const content = [];
    let remaining = weeksDifference;

    for (let index = 0; index < maxYears; index++) {
        const weeksForThisYear = Math.min(remaining, 52);

        content.push(
            <React.Fragment key={`year-${index}`}>
                <YearPreview
                    year={index + 1}
                    amountToFill={weeksForThisYear}
                    strokeColor={stroke}
                    color={fill}
                    index={index}
                />
                {/* adds a blank space after five and ten years */}
                {(index + 1) % 10 === 0 || (index + 1) % 10 === 5 ? (
                    <div style={{ marginTop: 2, marginBottom: 2 }} />
                ) : null}
            </React.Fragment>,
        );
        remaining -= weeksForThisYear;
    }

    return (
        <>
            <StyledPreviewContainer>
                <PreviewText
                    style={{
                        fontSize: 20,
                        textAlign: "center",
                        width: "100%",
                        padding: "8px 0",
                    }}
                >
                    Memento Mori
                </PreviewText>

                <div style={{ alignSelf: "center" }}>{content}</div>
                <StyledPreviewTextContainer>
                    <PreviewText
                        style={{
                            fontSize: 10,
                            alignSelf: "center",
                            textAlign: "center",
                        }}
                    >
                        {quote}
                    </PreviewText>
                    <PreviewText style={{ fontSize: 8, alignSelf: "center" }}>
                        - {author}
                    </PreviewText>
                </StyledPreviewTextContainer>
            </StyledPreviewContainer>
        </>
    );
};
