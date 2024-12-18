import styled from "styled-components";

export const SearchFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4.5rem;
`;

export const SearchFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h4 {
    ${({ theme }) => theme.fonts.titleS};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  p {
    ${({ theme }) => theme.fonts.textS};
    color: ${({ theme }) => theme.colors["base-span"]};
  }
`;

export const IssueCardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 6.625rem;
`;
