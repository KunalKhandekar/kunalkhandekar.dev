import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

export default function Tooltip({ content, children, side = "top", delay = 50 }) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={delay}>
        <RadixTooltip.Trigger asChild>
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Content
          side={side}
          sideOffset={5}
          className="bg-black text-white text-sm px-3 py-1 rounded shadow-lg animate-fadeIn"
        >
          {content}
          <RadixTooltip.Arrow className="fill-black" />
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
