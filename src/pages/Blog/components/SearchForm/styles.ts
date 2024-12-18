import styled from "styled-components";

export const SearchFormContainer = styled.div`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors["base-border"]};
    background: ${({ theme }) => theme.colors["base-input"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    ${({ theme }) => theme.fonts.textM};
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }

    &:focus {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors["blue"]};
    }
  }
`;
