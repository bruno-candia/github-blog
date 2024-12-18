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

export const PostContent = styled.div`
  padding: 2.5rem 2rem;

  p {
    margin-bottom: 1.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  code {
    background-color: ${({ theme }) => theme.colors["base-post"]};
    font-family: "Fira Code", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
  }

  pre {
    background-color: ${({ theme }) => theme.colors["base-post"]};
    border-radius: 6px;
    overflow-x: auto;
    margin-bottom: 2rem;
  }

  ul,
  ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }
`;
