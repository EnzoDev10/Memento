import { StyledInput, StyledWrapper } from "@/components/Reusables";
import { DateContext } from "@/global/DateContext";
import { DiceSixIcon } from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";

interface QuotesProps {
  setQuote: (value: string) => void;
  setAuthor: (value: string) => void;
}

export const QuoteSelector = ({ setQuote, setAuthor }: QuotesProps) => {
  // Crea la funconalidad para que al escribir en el input se actualice el contenido de quote.

  const { setChange } = useContext(DateContext);

  return (
    <>
      <StyledWrapper>
        <h6>Cita</h6>
        <StyledInput>
          <input
            type="text"
            placeholder="Escribe una cita aqui..."
            onChange={(e) => {
              setQuote(e.target.value);
              setChange(false);
            }}
          />
          <button type="button">
            <DiceSixIcon size={28} />
          </button>
        </StyledInput>
      </StyledWrapper>
      <StyledWrapper>
        <h6>Autor</h6>
        <StyledInput>
          <input
            type="text"
            placeholder="Escribe el autor aqui..."
            onChange={(e) => {
              setAuthor(e.target.value);
              setChange(false);
            }}
          />
        </StyledInput>
      </StyledWrapper>
    </>
  );
};
