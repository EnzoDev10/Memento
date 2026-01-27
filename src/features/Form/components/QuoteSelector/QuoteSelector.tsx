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
                <h6>Cita</h6>
                <StyledInput>
                    <input
                        type='text'
                        placeholder='Escribe una cita aqui...'
                        onChange={(e) => handleQuoteChange(e.target.value)}
                        value={quote}
                    />
                </StyledInput>
            </StyledWrapper>
            <StyledWrapper>
                <h6>Autor</h6>
                <StyledInput>
                    <input
                        type='text'
                        placeholder='Escribe el autor aqui...'
                        onChange={(e) => handleAuthorChange(e.target.value)}
                        value={author}
                    />
                </StyledInput>
            </StyledWrapper>
        </>
    );
};
