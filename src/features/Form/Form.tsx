import { StyledBtn, StyledSection } from "@/components/Reusables";
import { DateOfBirth } from "@/features/Form/components/DateOfBirth/DateOfBirth";
import { DateContext } from "@/global/DateContext";
import { differenceInWeeks } from "date-fns";
import { useContext, useState } from "react";
import { QuoteSelector } from "@/features/Form/components/QuoteSelector/QuoteSelector";
import styled from "styled-components";

import { devices } from "@/styles/breakpoints";

import { ErrorMessage } from "@/components/Reusables";
import { Extras } from "./components/Extras/Extras";
import { CustomizationContext } from "@/global/customizationContext";
import { quotesAndAuthors } from "../Calendar/commonValues";

const FormContainer = styled.article`
    padding: 16px;
    border-radius: 8px;
    background-color: var(--bg-dark);
    min-width: 300px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;

    h2 {
        font-size: 25px;

        @media ${devices.mobile} {
            font-size: 22px;
        }
    }

    label,
    legend {
        font-size: 20px;

        @media ${devices.mobile} {
            font-size: 18px;
        }
    }
`;

export const Form = () => {
    const [birthday, setBirthday] = useState<Date | undefined>(undefined);

    const [error, setError] = useState(false);

    const { setUserDate, setWeeksDifference, setShowDocument } =
        useContext(DateContext);

    const { quote, setAuthor, setQuote } = useContext(CustomizationContext);

    const handleFormSubmit = () => {
        if (birthday) {
            let differenceWithPresent = differenceInWeeks(new Date(), birthday);

            if (differenceWithPresent >= 1) {
                setWeeksDifference(differenceWithPresent);
                setUserDate(birthday);

                if (quote === "") {
                    const pair =
                        quotesAndAuthors[
                            (quotesAndAuthors.length * Math.random()) | 0
                        ];

                    setQuote(pair.quote);
                    setAuthor(pair.author);
                }

                setShowDocument(true);
            } else {
                setError(true);
            }
        } else {
            setError(true);
        }
    };

    return (
        <StyledSection>
            <FormContainer>
                <StyledForm noValidate>
                    <h2>Create your calendar</h2>
                    {error && (
                        <ErrorMessage>Introduce una fecha valida </ErrorMessage>
                    )}
                    <DateOfBirth
                        setFormDate={setBirthday}
                        setError={setError}
                    />
                    <QuoteSelector />

                    <Extras />
                    <StyledBtn type='button' onClick={handleFormSubmit}>
                        Create
                    </StyledBtn>
                </StyledForm>
            </FormContainer>
        </StyledSection>
    );
};
