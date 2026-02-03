import { Svg, Rect, Text, View } from "@react-pdf/renderer";

// Asegurarse que entre la cita en el final.
// Agregar la fuente ancient geek.

const weekSize = 4.75;
const gap = 4;
const topPadding = 2;
const bottomPadding = 2;
const totalWeeks = 53; // an extra week to add a separator right after the 26th week.
const svgWidth = totalWeeks * (weekSize + gap);
const svgHeight = weekSize + topPadding + bottomPadding;

interface weekProps {
    index: number;
    strokeColor: string;
    remainingAmount: number;
    squareColor: string;
}

const Week = ({
    index,
    strokeColor,
    remainingAmount,
    squareColor,
}: weekProps) => {
    const fillColor = remainingAmount > 0 ? squareColor : "";
    return (
        <Rect
            key={index}
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

interface Props {
    year: number;
    amountToFill: number;
    strokeColor: string;
    color: string;
}

export const Year = ({ year, amountToFill, strokeColor, color }: Props) => {
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
                remainingAmount={shouldFill ? remaining : 0}
                squareColor={color}
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
            {}
        </View>
    );
};
