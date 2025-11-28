import { useState } from "react";
import styled from "styled-components";

import { DayPicker } from "react-day-picker";
import { format, isValid, parse } from "date-fns";

import { CalendarWrapper } from "./Calendar";
import { CalendarBlankIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import * as Dialog from "@radix-ui/react-dialog";

import {
  Container,
  StyledHeading,
  InputWrapper,
  StyledInput,
  StyledBtn,
} from "../Reusables";

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
  background-color: color-mix(in srgb, var(--green-1) 70%, transparent);
  position: fixed;
  inset: 0;
`;

const StyledCloseBtn = styled(StyledBtn)`
  background: transparent;
  align-self: flex-end;
  padding: 0;
`;

export const DateOfBirth = () => {
  const [month, setMonth] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const [inputValue, setInputValue] = useState("");

  const [open, setOpen] = useState(false);

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setMonth(date);
      setInputValue(format(date, "MM/dd/yyyy"));
      setOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Sincroniza el valor del input

    const parsedDate = parse(e.target.value, "MM/dd/yyyy", new Date());

    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
      setMonth(parsedDate);
    } else {
      setSelectedDate(undefined);
    }
  };

  const customClassNames = {
    root: "mi-calendario-base",
    caption: "header-mes",
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
      <Container>
        <StyledHeading>Fecha de nacimiento</StyledHeading>
        <InputWrapper>
          <StyledInput
            id="date-input"
            type="text"
            value={inputValue}
            placeholder="MM/dd/yyyy"
            onChange={handleInputChange}
          />
          <Dialog.Trigger asChild>
            <StyledBtn>
              <CalendarBlankIcon size={28} />
            </StyledBtn>
          </Dialog.Trigger>
        </InputWrapper>
      </Container>
      <Dialog.Portal>
        <StyledOverlay />
        <StyledDialogContent>
          <VisuallyHidden>
            <Dialog.Title>Elige una fecha</Dialog.Title>
            <Dialog.Description>
              Permite elegir una fecha de nacimiento para crear el calendario de
              memento mori.
            </Dialog.Description>
          </VisuallyHidden>
          <CalendarWrapper>
            <Dialog.Close asChild>
              <StyledCloseBtn>
                <XIcon size={32} />
              </StyledCloseBtn>
            </Dialog.Close>
            <DayPicker
              month={month}
              onMonthChange={setMonth}
              autoFocus
              mode="single"
              selected={selectedDate}
              onSelect={handleDayPickerSelect}
              classNames={customClassNames}
              captionLayout="dropdown"
              hideNavigation
            />
          </CalendarWrapper>
        </StyledDialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
