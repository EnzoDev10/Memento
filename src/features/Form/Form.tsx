import { Container, StyledBtn } from "@/components/Reusables";
import { DateOfBirth } from "@/features/Form/components/DateOfBirth/DateOfBirth";
import { DateContext } from "@/global/DateContext";
import { differenceInWeeks } from "date-fns";
import { useContext, useState } from "react";
import { QuoteSelector } from "@/features/Form/components/QuoteSelector/QuoteSelector";
import styled from "styled-components";

import { devices } from "@/styles/breakpoints";

const FormContainer = styled(Container)``;

const StyledForm = styled.form`
    padding: 16px;
    background-color: var(--bg-dark);

    h3 {
        font-size: 25px;

        @media ${devices.mobile} {
            font-size: 20px;
        }
    }
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

    return (
        <FormContainer>
            <StyledForm noValidate>
                <h3>Crea tu calendario</h3>
                <DateOfBirth setFormDate={setBirthday} />
                <QuoteSelector setAuthor={setAuthor} setQuote={setQuote} />
                <StyledBtn type='button' onClick={handleFormSubmit}>
                    Crear
                </StyledBtn>
            </StyledForm>
        </FormContainer>
    );
};
