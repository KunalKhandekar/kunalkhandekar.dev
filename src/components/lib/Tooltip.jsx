import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

export default function Tooltip({ content, children, side = "top", delay = 0 }) {
  if (!content) return children;
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={delay}>
        <RadixTooltip.Trigger asChild>
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Content
          side={side}
          sideOffset={5}
          className="rounded-md px-3 py-1 text-xs shadow-md
                     bg-zinc-100 text-black
                     dark:bg-black dark:text-white
                     animate-fadeIn"
        >
          {content}
          <RadixTooltip.Arrow className="fill-zinc-200 dark:fill-black" />
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
