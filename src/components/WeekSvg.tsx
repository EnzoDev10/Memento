import { Svg, Rect, Text, View } from "@react-pdf/renderer";

// Cambiar la forma en la que se acomadan
// las semanas para que tengan separadores por x cantidad de años.
// Asegurarse que entre la cita en el final.
// Agregar la fuente ancient geek.

interface Props {
  year: number;
  separator?: boolean;
}

export const WeekSvg = ({ year: year }: Props) => {
  const weekSize = 5;
  const gap = 4;
  const topPadding = 2;
  const bottomPadding = 2;
  const totalWeeks = 53; // an extra week to add a separator right after the 26th week.
  const svgWidth = totalWeeks * (weekSize + gap) - gap;
  const svgHeight = weekSize + topPadding + bottomPadding;

  const stringYear = year.toString();

  return (
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Svg width={svgWidth} height={svgHeight}>
        {Array.from({ length: totalWeeks }).map((_, index) =>
          // Creates a column of empty weeks to divide the year in two parts.
          index == 27 ? (
            <Rect
              key={index}
              x={index * (weekSize + gap)}
              y={topPadding}
              width={weekSize}
              height={weekSize}
              fill="none"
              strokeWidth={1}
            />
          ) : (
            <Rect
              key={index}
              x={index * (weekSize + gap)}
              y={topPadding}
              width={weekSize}
              height={weekSize}
              fill="none"
              stroke="#222"
              strokeWidth={1}
            />
          ),
        )}
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
