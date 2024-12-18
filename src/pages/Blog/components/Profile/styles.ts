import styled from "styled-components";

export const CardProfileWrapper = styled.section`
  display: flex;
  background: ${({ theme }) => theme.colors["base-profile"]};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  gap: 2rem;

  img {
    width: 148px;
    height: 100%;
    border-radius: 8px;
  }

  p {
    ${({ theme }) => theme.fonts.textM};
    color: ${({ theme }) => theme.colors["base-text"]};
    margin-top: 1rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    color: ${({ theme }) => theme.colors["base-title"]};
    ${({ theme }) => theme.fonts.titleL};
  }

  a {
    display: flex;
    align-items: center;
    flex-direction: column;

    ${({ theme }) => theme.fonts.link};
    color: ${({ theme }) => theme.colors["blue"]};
    text-decoration: none;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    &:hover {
      &::after {
        content: "";
        width: 100%;
        height: 1px;
        background: ${({ theme }) => theme.colors["blue"]};
      }
    }
  }
`;

export const CardFooter = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;

    svg {
      color: ${({ theme }) => theme.colors["base-label"]};
    }

    span {
      ${({ theme }) => theme.fonts.textM};
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }
  }
`;
