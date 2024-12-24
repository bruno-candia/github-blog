import { ReactNode } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { TooltipContent } from "./styles";

interface TooltipProps {
  children: ReactNode;
  label: string;
}

export function Tooltip({ children, label }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={5}>{label}</TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
