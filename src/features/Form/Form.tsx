import { Container, StyledBtn } from "@/components/Reusables";
import { DateOfBirth } from "@/features/Form/components/DateOfBirth/DateOfBirth";
import { DateContext } from "@/global/DateContext";
import { differenceInWeeks } from "date-fns";
import { useContext, useState } from "react";
import { QuoteSelector } from "@/features/Form/components/QuoteSelector/QuoteSelector";
import styled from "styled-components";

const FormContainer = styled(Container)`
  width: 30vw;
  min-width: 300px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`;

export const Form = () => {
  const [birthday, setBirthday] = useState<Date>(new Date());

  const { setUserDate, setWeeksDifference, setAuthor, setQuote, setChange } =
    useContext(DateContext);

  const handleFormSubmit = () => {
    setUserDate(birthday);
    setWeeksDifference(differenceInWeeks(new Date(), birthday));
    setChange(true);
  };

  // revisar por que cuando se le da al boton del form la pagina se vuelve blanca
  return (
    <FormContainer>
      <StyledForm noValidate>
        <h5>Crea tu calendario</h5>
        <DateOfBirth setFormDate={setBirthday} />
        <QuoteSelector setAuthor={setAuthor} setQuote={setQuote} />
        <StyledBtn type="button" onClick={handleFormSubmit}>
          Crear
        </StyledBtn>
      </StyledForm>
    </FormContainer>
  );
};
