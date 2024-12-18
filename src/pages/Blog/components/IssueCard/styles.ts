import styled from "styled-components";
import { Link } from "react-router-dom";

export const IssueCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors["base-post"]};
  padding: 2rem;
  text-decoration: none;

  &:hover {
    transition: box-shadow 0.2s;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors["base-label"]};
  }

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    h5 {
      ${({ theme }) => theme.fonts.titleM};
      color: ${({ theme }) => theme.colors["base-title"]};
    }

    span {
      margin-top: 5px;
      white-space: nowrap;
      ${({ theme }) => theme.fonts.textS};
      color: ${({ theme }) => theme.colors["base-span"]};
    }
  }

  p {
    ${({ theme }) => theme.fonts.textM};
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;
