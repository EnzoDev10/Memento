import { Container, StyledBtn } from "@/components/Reusables";
import { DateOfBirth } from "@/features/Form/components/DateOfBirth/DateOfBirth";
import { QuoteSelector } from "@/features/Form/components/QuoteSelector/QuoteSelector";
import styled from "styled-components";

const FormContainer = styled(Container)`
  width: 35vw;
  min-width: 300px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`;

export const Form = () => {
  return (
    <FormContainer>
      <StyledForm noValidate>
        <h5>Crea tu calendario</h5>
        <DateOfBirth />
        <QuoteSelector />
        <StyledBtn type="button">Crear</StyledBtn>
      </StyledForm>
    </FormContainer>
  );
};
