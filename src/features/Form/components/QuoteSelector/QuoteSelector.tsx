import { StyledInput } from "@/components/Reusables";
import { CustomizationContext } from "@/global/customizationContext";
import { DateContext } from "@/global/DateContext";
import { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";

const animationTest = keyframes`
    0% {
        display:none;
        top: -5px;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        top: 0;
        opacity: 1;
    }

`;

const AnimatedWrapper = styled.div`
    animation: ${animationTest} 500ms ease-in-out forwards;
    position: relative;
`;

export const QuoteSelector = () => {
    const { setShowDocument } = useContext(DateContext);
    const { quote, author, setQuote, setAuthor } =
        useContext(CustomizationContext);

    const [showAuthorInput, setShowAuthorInput] = useState(false);

    const handleQuoteChange = (value: string) => {
        if (value != "") {
            setShowAuthorInput(true);
        } else {
            setShowAuthorInput(false);
            setAuthor("");
        }
        setQuote(value);
        setShowDocument(false);
    };

    const handleAuthorChange = (value: string) => {
        setAuthor(value);
        setShowDocument(false);
    };

    return (
        <>
            <div>
                <label>Quote</label>
                <StyledInput>
                    <input
                        type='text'
                        placeholder='Write a quote here...'
                        onChange={(e) => handleQuoteChange(e.target.value)}
                        value={quote}
                    />
                </StyledInput>
            </div>

            {showAuthorInput && (
                <AnimatedWrapper>
                    <label>Author</label>
                    <StyledInput>
                        <input
                            type='text'
                            placeholder='Write the author here...'
                            onChange={(e) => handleAuthorChange(e.target.value)}
                            value={author}
                        />
                    </StyledInput>
                </AnimatedWrapper>
            )}
        </>
    );
};
