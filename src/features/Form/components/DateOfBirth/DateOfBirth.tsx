import { useContext, useState } from "react";

import { DayPicker } from "react-day-picker";

import { CalendarWrapper } from "@/features/Form/components/DateOfBirth/DatePickerStyles";
import { CalendarBlankIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import * as Dialog from "@radix-ui/react-dialog";

import {
    StyledInput,
    StyledOverlay,
    StyledCloseBtn,
    StyledDialogContent,
} from "@/components/Reusables";
import { DateContext } from "@/global/DateContext";

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

    const [open, setOpen] = useState(false);

    const { setShowDocument } = useContext(DateContext);

    const handleDayPickerSelect = (date: Date | undefined) => {
        setError(false);
        setShowDocument(false);

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
        setShowDocument(false);

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
            <div>
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
                    <button type='button' onClick={() => setOpen(!open)}>
                        <CalendarBlankIcon size={24} />
                    </button>
                </StyledInput>
            </div>

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
