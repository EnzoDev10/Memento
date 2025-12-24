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
}

const Week = ({
  index,
  strokeColor: color = "#222",
  remainingAmount,
}: weekProps) => {
  const fillColor = remainingAmount > 0 ? "#284283 " : "";
  return (
    <Rect
      key={index}
      x={index * (weekSize + gap)}
      y={topPadding}
      width={weekSize}
      height={weekSize}
      fill={fillColor}
      stroke={color}
      strokeWidth={0.5}
    />
  );
};

interface Props {
  year: number;
  amountToFill: number;
}

export const Year = ({ year, amountToFill }: Props) => {
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
        // Creates an empty column to separate the year in two parts.
        strokeColor={isSeparator ? "" : "#222"}
        remainingAmount={shouldFill ? remaining : 0}
      />,
    );
    if (shouldFill) remaining--;
  }

  return (
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Svg width={svgWidth} height={svgHeight} style={{ padding: "0 1px" }}>
        {weeks}
      </Svg>
      {stringYear.endsWith("0") ||
        (stringYear.endsWith("5") && (
          <Text
            style={{ color: "#222", fontSize: weekSize * 2, marginLeft: 5 }}
          >
            {stringYear}
          </Text>
        ))}
      {}
    </View>
  );
};
