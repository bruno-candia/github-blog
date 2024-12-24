import styled from "styled-components";
import * as RadixTooltip from "@radix-ui/react-tooltip";

export const TooltipContent = styled(RadixTooltip.Content)`
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 15px;
  line-height: 1;
  color: ${({ theme }) => theme.colors["base-span"]};
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state="delayed-open"][data-side="top"] {
    animation-name: slideDownAndFade;
  }
  &[data-state="delayed-open"][data-side="right"] {
    animation-name: slideLeftAndFade;
  }
  &[data-state="delayed-open"][data-side="bottom"] {
    animation-name: slideUpAndFade;
  }
  &[data-state="delayed-open"][data-side="left"] {
    animation-name: slideRightAndFade;
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const CoverImage = styled.img`
  width: 100%;
  object-fit: fill;
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 21%;
  height: 31.532%;
`;