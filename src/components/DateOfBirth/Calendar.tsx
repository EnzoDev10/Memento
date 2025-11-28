import styled from "styled-components";

import "../../index.css";

import { Container } from "../Reusables";

export const CalendarWrapper = styled(Container)`
  width: fit-content;
  padding: var(--spacing-2);
  .mi-calendario-base {
    width: 100%;
    /*Por defecto, DayPicker es 'display: table',  */
    display: block;
  }

  & .nombre-dia {
    font-size: var(--body-size);
    font-weight: normal;
  }

  & .dia {
    width: 2.9rem;
    height: 2.9rem;
    padding: 0;
    line-height: 2.5rem;
    border-radius: var(--radius-small, 4px);

    &:hover:not(.dia-seleccionado):not(.rdp-outside) {
      background-color: var(--green-3);
      cursor: pointer;
    }

    & .dia-boton {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: none;
      border-radius: var(--radius-small);
    }
  }
  & .dia-seleccionado {
    background-color: var(--green-6);

    font-weight: bold;
  }

  .selector-mes-año {
    background-color: transparent;
    border: none;
    padding: var(--spacing-1);
    border-radius: var(--radius-small);
    font-size: var(--body-size);
    margin-bottom: var(--spacing-1);
    padding-top: 0;
    padding-left: 14px;

    &:first-child {
      margin-right: 10px;
    }
  }
  .label {
    display: none;
  }
`;
