import { StyledInput } from "@/components/Reusables";
import { CustomizationContext } from "@/global/customizationContext";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";
import styled from "styled-components";

const StyledDetails = styled.details`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    &:open {
        gap: 8px;
    }

    label {
        font-size: 14px;
    }

    summary {
        display: flex;
        align-items: center;
    }
`;

const StyledColorInput = styled(StyledInput)`
    width: 50%;
    flex-direction: column;
    gap: 8px;

    input[type="color"] {
        width: 70%;
        padding: 0;
    }
`;

const StrokeInput = styled(StyledColorInput)`
    align-items: flex-end;
`;

const InputsWrappers = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`;

export const Extras = () => {
    const { fillColor, strokeColor, setFillColor, setStrokeColor } =
        useContext(CustomizationContext);

    return (
        <StyledDetails>
            <summary>
                Extras <CaretDownIcon size={18} />
            </summary>
            <InputsWrappers>
                <StyledColorInput>
                    <label>Fill Color</label>
                    <input
                        type='color'
                        defaultValue={fillColor}
                        onChange={(e) => setFillColor(e.target.value)}
                    />
                </StyledColorInput>
                <StrokeInput>
                    <label>Stroke Color</label>
                    <input
                        type='color'
                        defaultValue={strokeColor}
                        onChange={(e) => setStrokeColor(e.target.value)}
                    />
                </StrokeInput>
            </InputsWrappers>
        </StyledDetails>
    );
};
