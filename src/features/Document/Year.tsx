import { DateContext } from "@/App";
import { Svg, Rect, Text, View } from "@react-pdf/renderer";
import { useContext } from "react";

// Asegurarse que entre la cita en el final.
// Agregar la fuente ancient geek.

const weekSize = 4.75;
const gap = 4;
const topPadding = 2;
const bottomPadding = 2;
const totalWeeks = 53; // an extra week to add a separator right after the 26th week.
const svgWidth = totalWeeks * (weekSize + gap) - gap;
const svgHeight = weekSize + topPadding + bottomPadding;

interface weekProps {
  index: number;
  // filled: boolean;
  strokeColor: string;
  fillColor: string;
}

const Week = ({ index, strokeColor: color = "#222", fillColor }: weekProps) => {
  return (
    <Rect
      key={index}
      x={index * (weekSize + gap)}
      y={topPadding}
      width={weekSize}
      height={weekSize}
      fill={fillColor}
      stroke={color}
      strokeWidth={1}
    />
  );
};

interface Props {
  year: number;
}

export const Year = ({ year }: Props) => {
  const stringYear = year.toString();

  const dates = useContext(DateContext);

  return (
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Svg width={svgWidth} height={svgHeight}>
        {Array.from({ length: totalWeeks }).map((_, index) => (
          <Week
            key={index}
            index={index}
            // Creates an empty column to separate the year in two parts.
            strokeColor={index != 26 ? "#222" : ""}
            fillColor={
              index != 26 && dates.weeksDifference > 0 ? "#559955" : ""
            }
          />
        ))}
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
