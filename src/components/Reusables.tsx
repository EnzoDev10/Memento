import styled from "styled-components";

import "@/index.css";

export const Container = styled.div``;

export const StyledWrapper = styled.div``;

export const StyledInput = styled.div`
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    input {
        background-color: var(--bg-light);
        border: none;
        width: 100%;
        height: 35px;
        border-radius: 4px;
        padding: 0 5px;
    }

    button {
        background: var(--bg-light);
        border: none;
        height: 24px;
        position: absolute;
        right: 5px;
    }
`;

export const StyledBtn = styled.button`
    border: none;
    border-radius: 4px;
    height: 35px;
    font-family: var(--main-font);
    background-color: var(--bg-medium);
    &:hover {
    }

    &:active {
    }
`;
