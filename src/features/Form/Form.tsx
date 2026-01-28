import { Container, StyledBtn, StyledWrapper } from "@/components/Reusables";
import { DateOfBirth } from "@/features/Form/components/DateOfBirth/DateOfBirth";
import { DateContext } from "@/global/DateContext";
import { differenceInWeeks } from "date-fns";
import { useContext, useState } from "react";
import { QuoteSelector } from "@/features/Form/components/QuoteSelector/QuoteSelector";
import styled from "styled-components";

import { devices } from "@/styles/breakpoints";

const FormContainer = styled(Container)`
    padding: 16px;
    border-radius: 8px;
    background-color: var(--bg-dark);
    min-width: 300px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 14px;

    h2 {
        font-size: 25px;

        @media ${devices.mobile} {
            font-size: 22px;
        }
    }

    label {
        font-size: 20px;

        @media ${devices.mobile} {
            font-size: 18px;
        }
    }

    ${StyledWrapper} {
        display: flex;
        flex-direction: column;
        gap: 8px;
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
                <h2>Create your calendar</h2>
                <DateOfBirth setFormDate={setBirthday} />
                <QuoteSelector setAuthor={setAuthor} setQuote={setQuote} />
                <StyledBtn type='button' onClick={handleFormSubmit}>
                    Create
                </StyledBtn>
            </StyledForm>
        </FormContainer>
    );
};
