import styled from "styled-components";

import "@/index.css";

export const Container = styled.div``;

export const StyledWrapper = styled.div``;

export const StyledInput = styled.div`
    height: fit-content;
    background-color: var(--bg-light);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    height: 35px;
    align-items: center;
    padding: 0 5px;

    position: relative;

    input {
        border: none;
        width: 100%;
        background-color: transparent;
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
    &:hover {
    }

    &:active {
    }
`;
