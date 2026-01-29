import { useContext, useState } from "react";
import styled from "styled-components";

import { DayPicker } from "react-day-picker";

import { CalendarWrapper } from "@/features/Form/components/DateOfBirth/Calendar";
import { CalendarBlankIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import * as Dialog from "@radix-ui/react-dialog";

import { StyledInput, StyledBtn, StyledWrapper } from "@/components/Reusables";
import { DateContext } from "@/global/DateContext";

const StyledDialogContent = styled(Dialog.Content)`
    background-color: var(--gray-1);
    border-radius: 6px;
    box-shadow: var(--shadow-6);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 500px;
    max-height: 85vh;
    padding: 25px;
    display: flex;
    justify-content: center;

    &:focus {
        outline: none;
    }
`;

const StyledOverlay = styled(Dialog.Overlay)`
    background-color: color-mix(in srgb, var(--bg-ultra-dark) 70%, transparent);
    position: fixed;
    inset: 0;
`;

const StyledCloseBtn = styled(StyledBtn)`
    background: transparent;
    align-self: flex-end;
    padding: 0;
`;

interface DatePickerProps {
    setFormDate: (date: Date) => void;
    setError: (bool: boolean) => void;
}

export const DateOfBirth = ({
    setFormDate: setFormDate,
    setError,
}: DatePickerProps) => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
        undefined,
    );

    const [inputValue, setInputValue] = useState("");

    const [open, setOpen] = useState(true);

    const { setChange } = useContext(DateContext);

    const handleDayPickerSelect = (date: Date | undefined) => {
        setError(false);
        setChange(false);

        if (!date) {
            setInputValue("");
            setSelectedDate(undefined);
        } else {
            let day = ("0" + date.getDate()).slice(-2);
            let month = ("0" + (date.getMonth() + 1)).slice(-2);

            let formattedDate = date.getFullYear() + "-" + month + "-" + day;

            setSelectedDate(date);
            setInputValue(formattedDate);
            setOpen(false);
            setFormDate(date);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setChange(false);

        setInputValue(e.target.value); // Sincroniza el valor del input

        let newDate = new Date(e.target.value);

        setSelectedDate(newDate);
        setFormDate(newDate);
    };

    const customClassNames = {
        root: "mi-calendario-base",
        caption: "header-mes",
        month_grid: "meses",
        weekday: "nombre-dia",
        cell: "dia-celda",
        day: "dia",
        selected: "dia-seleccionado",
        caption_label: "label",
        day_button: "dia-boton",
        dropdown: "selector-mes-año",
    };

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <StyledWrapper>
                <label>date of birth</label>

                <StyledInput>
                    <input
                        id='date-input'
                        type='date'
                        value={inputValue}
                        placeholder='MM/dd/yyyy'
                        onChange={handleInputChange}
                        name='date'
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    />
                    <Dialog.Trigger asChild>
                        <button>
                            <CalendarBlankIcon size={24} />
                        </button>
                    </Dialog.Trigger>
                </StyledInput>
            </StyledWrapper>

            <Dialog.Portal>
                <StyledOverlay />
                <StyledDialogContent>
                    <VisuallyHidden>
                        <Dialog.Title>Elige una fecha</Dialog.Title>
                        <Dialog.Description>
                            Permite elegir una fecha de nacimiento para crear el
                            calendario de memento mori.
                        </Dialog.Description>
                    </VisuallyHidden>
                    <CalendarWrapper>
                        <Dialog.Close asChild>
                            <StyledCloseBtn>
                                <XIcon size={32} />
                            </StyledCloseBtn>
                        </Dialog.Close>
                        <DayPicker
                            autoFocus
                            mode='single'
                            selected={selectedDate}
                            onSelect={handleDayPickerSelect}
                            classNames={customClassNames}
                            captionLayout='dropdown'
                            defaultMonth={selectedDate}
                            hideNavigation
                        />
                    </CalendarWrapper>
                </StyledDialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
