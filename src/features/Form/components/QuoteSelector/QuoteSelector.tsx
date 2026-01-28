import { StyledInput, StyledWrapper } from "@/components/Reusables";
import { DateContext } from "@/global/DateContext";
import { useContext } from "react";

interface QuotesProps {
    setQuote: (value: string) => void;
    setAuthor: (value: string) => void;
}

export const QuoteSelector = ({ setQuote, setAuthor }: QuotesProps) => {
    const { setChange, quote, author } = useContext(DateContext);

    const handleQuoteChange = (value: string) => {
        setQuote(value);
        setChange(false);
    };

    const handleAuthorChange = (value: string) => {
        setAuthor(value);
        setChange(false);
    };

    return (
        <>
            <StyledWrapper>
                <label>Quote</label>
                <StyledInput>
                    <input
                        type='text'
                        placeholder='Write a quote here...'
                        onChange={(e) => handleQuoteChange(e.target.value)}
                        value={quote}
                    />
                </StyledInput>
            </StyledWrapper>
            <StyledWrapper>
                <label>Author</label>
                <StyledInput>
                    <input
                        type='text'
                        placeholder='Write the author here...'
                        onChange={(e) => handleAuthorChange(e.target.value)}
                        value={author}
                    />
                </StyledInput>
            </StyledWrapper>
        </>
    );
};
