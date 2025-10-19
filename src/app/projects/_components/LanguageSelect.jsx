import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

export default function LanguageSelect({ languages, value, onValueChange }) {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger
        className="inline-flex items-center justify-between rounded-md px-3 py-1.5 text-sm
                   border border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100
                   dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800
                   focus:outline-none"
        aria-label="Language"
      >
        <Select.Value placeholder="Select a language" />
        <Select.Icon>
          <ChevronDown className="h-4 w-4 ml-2" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="overflow-hidden rounded-md border border-zinc-300 bg-white text-zinc-800 shadow-lg
                     dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          position="popper"
        >
          <Select.ScrollUpButton className="flex items-center justify-center py-1">
            <ChevronUp className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
          </Select.ScrollUpButton>

          <Select.Viewport className="p-1">
            <Select.Group>
              <Select.Label className="px-2 py-1 text-xs text-zinc-500 dark:text-zinc-400">
                Select language
              </Select.Label>

              {languages.map((lang) => (
                <Select.Item
                  key={lang.value}
                  value={lang.value}
                  className="relative flex items-center rounded-sm px-2 py-1.5 text-sm 
                             text-zinc-800 dark:text-zinc-200 cursor-pointer 
                             hover:bg-zinc-100 dark:hover:bg-zinc-800
                             focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:outline-none"
                >
                  <Select.ItemText>{lang.value}</Select.ItemText>
                  <Select.ItemIndicator className="absolute right-2">
                    <Check className="h-4 w-4 text-blue-500" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton className="flex items-center justify-center py-1">
            <ChevronDown className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
