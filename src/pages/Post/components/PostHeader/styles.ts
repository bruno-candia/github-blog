import styled from "styled-components";

export const CardProfileWrapper = styled.section`
  background: ${({ theme }) => theme.colors["base-profile"]};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  gap: 2rem;
  min-width: 54rem;

  img {
    width: 148px;
    height: 100%;
    border-radius: 8px;
  }

  p {
    ${({ theme }) => theme.fonts.textM};
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;

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

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background: transparent;
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

export const CardHeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardFooter = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 8px;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;

    svg {
      color: ${({ theme }) => theme.colors["base-label"]};
    }

    span {
      ${({ theme }) => theme.fonts.textM};
      color: ${({ theme }) => theme.colors["base-span"]};
    }
  }
`;
