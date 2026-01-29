import styled from "styled-components";

import "@/index.css";

import { Container } from "@/components/Reusables";

export const CalendarWrapper = styled(Container)`
    background-color: var(--bg-dark);
    border-radius: 16px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 1px solid var(--text-muted);

    .mi-calendario-base {
        width: 100%;
        display: block;
    }

    & .meses {
        height: 330px;
    }

    & .nombre-dia {
        font-size: var(--body-size);
        font-weight: normal;
        height: 48px;
        font-family: var(--main-font);
        font-size: 18px;
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
            border-radius: 8px;
            font-size: 14px;

            &:hover:not(.dia-seleccionado > .dia-boton):not(.rdp-outside) {
                background-color: var(--bg-medium);
                cursor: pointer;
            }
        }
    }
    & .dia-seleccionado {
        .dia-boton {
            background-color: var(--bg-light);
        }
    }

    .selector-mes-año {
        background-color: transparent;
        border: none;
        margin-bottom: var(--spacing-1);
        padding-top: 0;
        padding-left: 14px;
        font-family: var(--main-font);
        font-size: 18px;
    }
    .label {
        display: none;
    }
`;
