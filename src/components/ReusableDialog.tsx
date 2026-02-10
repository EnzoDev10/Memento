import * as Dialog from "@radix-ui/react-dialog";
import type React from "react";
import { StyledDialogContent, StyledOverlay } from "./Reusables";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import styled from "styled-components";
import { devices } from "@/styles/breakpoints";

interface DialogProps extends React.PropsWithChildren {
    title: string;
    description: string;
    open: boolean;
    setOpen: ((open: boolean) => void) | undefined;
}

const PDFDialogContent = styled(StyledDialogContent)`
    display: flex;
    flex-direction: column;
    border: none;

    width: fit-content;
    min-width: 300px;
    padding: 20px;

    height: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    text-align: center;

    @media ${devices.mobile} {
        transform: translate(-50%, -50%) scale(0.65);
    }
`;

const StyledTitle = styled(Dialog.Title)`
    background-color: var(--bg-ultra-dark);
    border-radius: 10px;
`;

export const ReusableDialog = ({
    title,
    description,
    open,
    setOpen,
    children,
}: DialogProps) => {
    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>
                <StyledOverlay />
                <PDFDialogContent>
                    <StyledTitle>{title}</StyledTitle>
                    <VisuallyHidden>
                        <Dialog.Description>{description}</Dialog.Description>
                    </VisuallyHidden>
                    {children}
                </PDFDialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
