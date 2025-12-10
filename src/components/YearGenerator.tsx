import { Svg, Rect, Text, View } from "@react-pdf/renderer";

// Cambiar la forma en la que se acomadan
// las semanas para que tengan separadores por x cantidad de años.
// Asegurarse que entre la cita en el final.
// Agregar la fuente ancient geek.

interface Props {
  year: number;
  separator?: boolean;
}

const weekSize = 4.75;
const gap = 4;
const topPadding = 2;
const bottomPadding = 2;
const totalWeeks = 53; // an extra week to add a separator right after the 26th week.
const svgWidth = totalWeeks * (weekSize + gap) - gap;
const svgHeight = weekSize + topPadding + bottomPadding;

interface weekProps {
  index: number;
  strokeColor: string;
}

const Week = ({ index, strokeColor: color = "#222" }: weekProps) => {
  return (
    <Rect
      key={index}
      x={index * (weekSize + gap)}
      y={topPadding}
      width={weekSize}
      height={weekSize}
      fill="none"
      stroke={color}
      strokeWidth={1}
    />
  );
};

export const Year = ({ year: year }: Props) => {
  const stringYear = year.toString();

  return (
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Svg width={svgWidth} height={svgHeight}>
        {Array.from({ length: totalWeeks }).map((_, index) => (
          // Creates a column of empty weeks to divide the year in two parts.
          <Week
            key={index}
            index={index}
            strokeColor={index === 27 ? "" : "#222"}
          />
        ))}
      </Svg>
      {stringYear.endsWith("0") ||
        (stringYear.endsWith("5") && (
          <Text
            style={{ color: "#f00", fontSize: weekSize * 2, marginLeft: 5 }}
          >
            {stringYear}
          </Text>
        ))}
      {}
    </View>
  );
};
