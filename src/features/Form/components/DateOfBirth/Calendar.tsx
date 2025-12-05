import styled from "styled-components";

import "@/index.css";

import { Container } from "@/components/Reusables";

export const CalendarWrapper = styled(Container)`
  width: fit-content;
  padding: var(--spacing-2);
  .mi-calendario-base {
    width: 100%;
    /*Por defecto, DayPicker es 'display: table',  */
    display: block;
  }

  & .meses {
    height: 330px;
  }

  & .nombre-dia {
    font-size: var(--body-size);
    font-weight: normal;
    height: 48px;
  }

  & .dia {
    border-radius: var(--radius-small);

    & .dia-boton {
      width: 48px;
      height: 48px;
      display: grid;
      place-items: center;
      justify-content: center;
      background: transparent;
      border: none;
      border-radius: var(--radius-small);
      color: var(--neutral-7);
      font-size: 14px;

      &:hover:not(.dia-seleccionado > .dia-boton):not(.rdp-outside) {
        background-color: var(--green-3);
        cursor: pointer;
      }
    }
  }
  & .dia-seleccionado {
    .dia-boton {
      background-color: var(--green-6);
    }
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
