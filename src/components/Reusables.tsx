import styled from "styled-components";

import "@/index.css";
import * as Dialog from "@radix-ui/react-dialog";
import { devices } from "@/styles/breakpoints";
import { PDFViewer } from "@react-pdf/renderer";

export const StyledSection = styled.section`
    padding: 80px 16px;

    @media ${devices.mobile} {
        padding: 40px 16px;
    }
`;

export const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const StyledInput = styled.div`
    height: fit-content;
    display: flex;
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
        top: 6px;

        transition: 250ms ease-in-out;

        &:hover {
            transform: translateY(-1px);
        }

        &:active {
            transform: translateY(1px);
        }
    }
`;

export const StyledBtn = styled.button`
    border: none;
    border-radius: 4px;
    font-family: var(--main-font);
    background-color: var(--bg-medium);
    transition: 250ms ease-in-out;

    padding: 9px 12px;
    text-align: center;

    &:hover {
        transform: translateY(-2px);
    }

    &:active {
        background-color: var(--bg-ultra-dark);
    }
`;

export const ErrorMessage = styled.p`
    color: var(--error-color);
`;

export const Loading = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 50px;

    width: 100%;
    height: 100%;

    h3 {
        font-family: var(--main-font);
        text-align: center;
    }
`;

export const StyledOverlay = styled(Dialog.Overlay)`
    background-color: color-mix(in srgb, var(--bg-ultra-dark) 70%, transparent);
    position: fixed;
    inset: 0;
`;

export const StyledCloseBtn = styled(StyledBtn)`
    background: transparent;
    align-self: flex-end;
    padding: 0;
`;

export const StyledDialogContent = styled(Dialog.Content)`
    background-color: var(--gray-1);
    border-radius: 6px;
    box-shadow: var(--shadow-6);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;

    display: flex;
    justify-content: center;

    height: fit-content;

    &:focus {
        outline: none;
    }
`;

export const StyledPDFViewer = styled(PDFViewer)`
    width: 100%;
    height: 100%;
    max-width: 90vw;
`;

export const PreviewText = styled.p`
    color: #222;
    font-family: var(--main-font);
`;
