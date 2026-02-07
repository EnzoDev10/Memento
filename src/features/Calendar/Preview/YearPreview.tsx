import { PreviewText } from "@/components/Reusables";
import type { weekProps, yearProps } from "../commonValues";

import {
    weekSize,
    gap,
    topPadding,
    totalWeeks,
    svgWidth,
    svgHeight,
} from "../commonValues";
import styled from "styled-components";

const StyledYearContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const StyledSvg = styled.svg`
    padding: "0 1px";
`;

const WeekPreview = ({ index, strokeColor, fillColor }: weekProps) => {
    return (
        <rect
            x={index * (weekSize + gap)}
            y={topPadding}
            width={weekSize}
            height={weekSize}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={0.5}
        />
    );
};

export const YearPreview = ({
    year,
    amountToFill,
    strokeColor,
    color,
}: yearProps) => {
    const stringYear = year.toString();

    const weeks = [];
    let remaining = amountToFill;

    const shouldShowYear = stringYear.endsWith("5") || stringYear.endsWith("0");

    for (let index = 0; index < totalWeeks; index++) {
        const isSeparator = index === 26;
        const shouldFill = !isSeparator && remaining > 0;

        weeks.push(
            <WeekPreview
                key={`week-preview-${index}`}
                index={index}
                strokeColor={isSeparator ? "" : strokeColor}
                fillColor={shouldFill ? color : "transparent"}
            />,
        );
        if (shouldFill) remaining--;
    }

    return (
        <StyledYearContainer>
            <StyledSvg width={svgWidth} height={svgHeight}>
                {weeks}
            </StyledSvg>
            {shouldShowYear && (
                <PreviewText
                    style={{
                        fontSize: weekSize * 2,
                        marginLeft: 5,
                    }}
                >
                    {stringYear}
                </PreviewText>
            )}
        </StyledYearContainer>
    );
};
