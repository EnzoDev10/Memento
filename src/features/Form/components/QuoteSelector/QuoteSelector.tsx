import { StyledInput, StyledWrapper } from "@/components/Reusables";
import { DiceSixIcon } from "@phosphor-icons/react/dist/ssr";

export const QuoteSelector = () => {
  // Crea la funconalidad para que al escribir en el input se actualice el contenido de quote.
  return (
    <>
      <StyledWrapper>
        <h6>Cita</h6>
        <StyledInput>
          <input
            id="quote"
            type="text"
            placeholder="Escribe una cita aqui..."
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
            id="quote-autor"
            type="text"
            placeholder="Escribe el autor aqui..."
          />
        </StyledInput>
      </StyledWrapper>
    </>
  );
};
