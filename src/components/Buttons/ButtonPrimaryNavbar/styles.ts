import styled from "@emotion/styled"

export const ButtonPrimaryComponent = styled.button<{ isSelected: boolean }>`
  display: flex;
  width: fit-content;
  padding: 20px 30px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 14px;
  gap: 15px;
  outline: none;
  border: none;
  font-family: "Montserrat";
  font-weight: 800;
  letter-spacing: 1px;
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: ${props =>
    props.isSelected ? "0 4px 8px rgba(0, 0, 0, 0.8)" : "none"};
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
  }
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
    transform: translateY(1px);
  }
`

export const ButtonPrimaryImg = styled.img`
  height: 40px;
`

export const ButtonPrimaryTitle = styled.span`
  font-size: 24px;
`
