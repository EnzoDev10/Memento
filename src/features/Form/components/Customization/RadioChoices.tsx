import styled from "styled-components";

import "@/index.css";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;

  legend {
    font-size: var(--body-size);
    margin-bottom: var(--spacing-2);
  }
`;

const Options = styled.div`
  display: flex;
  gap: var(--spacing-3);
`;

const Option = styled.div`
  display: flex;
  gap: var(--spacing-1);
`;

const StyledRadioBtn = styled.input`
  accent-color: var(--green-5);
`;

export const RadioChoices = () => {
  return (
    <StyledDiv>
      <StyledFieldset>
        <legend>¿usar meses o semanas?</legend>
        <Options>
          <Option>
            <StyledRadioBtn
              type="radio"
              name="tiempo"
              value="semanas"
              id="semanas"
              defaultChecked
            />
            <label htmlFor="semanas">Semanas</label>
          </Option>
          <Option>
            <StyledRadioBtn
              type="radio"
              name="tiempo"
              value="meses"
              id="meses"
            />
            <label htmlFor="meses">Meses</label>
          </Option>
        </Options>
      </StyledFieldset>

      <StyledFieldset>
        <legend>¿Usar cuadrados o circulos?</legend>
        <Options>
          <Option>
            <StyledRadioBtn
              type="radio"
              name="aspecto"
              value="cuadrados"
              id="cuadrados"
            />
            <label htmlFor="cuadrados">Cuadrados</label>
          </Option>
          <Option>
            <StyledRadioBtn
              type="radio"
              name="aspecto"
              value="círculos"
              id="círculos"
            />
            <label htmlFor="círculos">Círculos</label>
          </Option>
        </Options>
      </StyledFieldset>
    </StyledDiv>
  );
};
