import * as Dialog from "@radix-ui/react-dialog";
import type React from "react";
import { StyledDialogContent, StyledOverlay } from "./Reusables";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import styled from "styled-components";

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

    padding: 100px 0;
    h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
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
                    <Dialog.Title>{title}</Dialog.Title>
                    <VisuallyHidden>
                        <Dialog.Description>{description}</Dialog.Description>
                    </VisuallyHidden>
                    {children}
                </PDFDialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
