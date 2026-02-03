import { StyledInput } from "@/components/Reusables";
import { CustomizationContext } from "@/global/customizationContext";
import { useContext } from "react";
import styled from "styled-components";

const StyledArticle = styled.article`
    display: flex;
    justify-content: space-between;

    label {
        font-size: 1rem;
    }
`;

const StrokeInput = styled(StyledInput)`
    input {
        align-self: flex-end;
    }
`;

export const Extras = () => {
    const { squareColor, strokeColor, setSquareColor, setStrokeColor } =
        useContext(CustomizationContext);

    return (
        <StyledArticle>
            <StyledInput>
                <label>Square Color</label>
                <input
                    type='color'
                    defaultValue={squareColor}
                    onChange={(e) => setSquareColor(e.target.value)}
                />
            </StyledInput>
            <StrokeInput>
                <label>Stroke Color</label>
                <input
                    type='color'
                    defaultValue={strokeColor}
                    onChange={(e) => setStrokeColor(e.target.value)}
                />
            </StrokeInput>
        </StyledArticle>
    );
};
