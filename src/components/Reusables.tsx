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

    input {
        border: none;
        width: 100%;
        width: 85%;
        background-color: transparent;
    }

    button {
        background: transparent;
        border: none;
        height: 24px;
    }
`;

export const StyledBtn = styled.button`
    &:hover {
    }

    &:active {
    }
`;
