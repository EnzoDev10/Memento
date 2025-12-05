import styled from "styled-components";

import "@/index.css";

export const Container = styled.div`
  background-color: var(--green-1);
  max-width: 450px;
  border-radius: var(--radius-normal);
  padding: var(--spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

export const StyledHeading = styled.h6`
  font-size: var(--heading-6);
`;

export const InputWrapper = styled.div`
  height: 40px;
  display: flex;
  gap: var(--spacing-2);
`;

export const StyledInput = styled.input`
  background-color: var(--green-3);
  border: none;
  height: 100%;
  width: 240px;
  border-radius: var(--radius-small);
  padding-left: var(--spacing-1);
`;

export const StyledBtn = styled.button`
  border: none;
  background-color: var(--green-3);
  border-radius: var(--radius-small);
  display: flex;
  align-items: center;
  padding: var(--spacing-1);
  cursor: pointer;
  max-width: 40px;
`;
