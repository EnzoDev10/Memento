import styled from "styled-components";

import "@/index.css";

export const Container = styled.div`
  background-color: var(--green-1);
  max-width: 450px;
  border-radius: var(--radius-normal);
  padding: var(--spacing-3);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

export const StyledInput = styled.div`
  position: relative;
  height: 40px;
  width: 100%;

  input {
    background-color: var(--green-3);
    border: none;
    height: 100%;
    width: 100%;
    border-radius: var(--radius-small);
    padding-left: var(--spacing-1);
    padding-right: 40px;
    font-size: var(--input-size);
    box-sizing: border-box;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 40px;
    border: none;
    background-color: var(--green-3);
    border-radius: 0 var(--radius-small) var(--radius-small) 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: var(--input-size);
  }
`;

export const StyledBtn = styled.button`
  border: none;
  background-color: var(--green-6);
  border-radius: var(--radius-small);
  padding: var(--spacing-1);
  cursor: pointer;
  
  &:hover {
    background-color: var(--green-7);
  }
  
  &:active {
    background-color: var(--green-5);
  }
`;
