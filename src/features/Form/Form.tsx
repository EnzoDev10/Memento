import { DateOfBirth } from "@/features/Form/components/DateOfBirth/DateOfBirth";
import { Container } from "@/components/Reusables";
import { RadioChoices } from "@/features/Form/components/Customization/RadioChoices";
import styled from "styled-components";

const FormContainer = styled(Container)`
  max-width: 345px;
`;

export const Form = () => {
  return (
    <FormContainer>
      <DateOfBirth />
      <RadioChoices />
    </FormContainer>
  );
};
