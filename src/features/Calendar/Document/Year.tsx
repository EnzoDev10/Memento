import { Svg, Rect, Text, View } from "@react-pdf/renderer";

import type { weekProps, yearProps } from "../commonValues";

import {
    weekSize,
    gap,
    topPadding,
    totalWeeks,
    svgWidth,
    svgHeight,
} from "../commonValues";

const Week = ({ index, strokeColor, fillColor }: weekProps) => {
    return (
        <Rect
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

export const Year = ({ year, amountToFill, strokeColor, color }: yearProps) => {
    const stringYear = year.toString();

    const weeks = [];
    let remaining = amountToFill;

    for (let index = 0; index < totalWeeks; index++) {
        const isSeparator = index === 26;
        const shouldFill = !isSeparator && remaining > 0;

        weeks.push(
            <Week
                key={`week-${index}`}
                index={index}
                strokeColor={isSeparator ? "" : strokeColor}
                fillColor={shouldFill ? color : ""}
            />,
        );
        if (shouldFill) remaining--;
    }

    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <Svg
                width={svgWidth}
                height={svgHeight}
                style={{ padding: "0 1px" }}
            >
                {weeks}
            </Svg>
            {stringYear.endsWith("0") ||
                (stringYear.endsWith("5") && (
                    <Text
                        style={{
                            color: "#222",
                            fontSize: weekSize * 2,
                            marginLeft: 5,
                        }}
                    >
                        {stringYear}
                    </Text>
                ))}
        </View>
    );
};
