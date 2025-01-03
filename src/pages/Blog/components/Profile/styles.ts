import styled, { keyframes } from "styled-components";

export const CardProfileWrapper = styled.section`
  display: flex;
  background: ${({ theme }) => theme.colors["base-profile"]};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  width: 100%;
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
  width: 100%;
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
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }
  }
`;

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

interface SkeletonProps {
  width: string;
  height: string;
}

export const SkeletonText = styled.div<SkeletonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 4px;
  background: linear-gradient(90deg, #071422 0%, #0b1b2b 50%, #071422 100%);
  background-size: 200% 100%;
  animation: ${shine} 1s infinite linear;
`;
