"use client"

import { useTheme } from "next-themes"
import { useEffect, useMemo, useState } from "react"
import { ActivityCalendar } from "react-activity-calendar"

// Character patterns for the activity calendar (5x7 grid for each character)
const characterPatterns = {
  A: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  B: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
  ],
  C: [
    [0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
  ],
  D: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
  ],
  E: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  F: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
  ],
  G: [
    [0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  H: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  I: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  J: [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [0, 1, 1, 0, 0],
  ],
  K: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ],
  L: [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  O: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  P: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
  ],
  Q: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 1, 0, 1],
  ],
  R: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ],
  S: [
    [0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
  ],
  T: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  U: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  V: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
  ],
  W: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ],
  X: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ],
  Y: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  Z: [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  0: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  1: [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  2: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  3: [
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
  ],
  4: [
    [0, 0, 0, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
  ],
  5: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  6: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  7: [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
  ],
  8: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  9: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  " ": [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
}

export default function ContributionChart() {
  const [inputText, setInputText] = useState("HELLO")
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [sizes, setSizes] = useState({
    blockSize: 12,
    blockMargin: 4,
    fontSize: 12,
  })
  const maxChars = 8

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;

      const width = window.innerWidth

      if (width < 400) {
        setSizes({ blockSize: 5, blockMargin: 1, fontSize: 6 }) // very small phones
      } else if (width < 800) {
        setSizes({ blockSize: 12, blockMargin: 2, fontSize: 7 }) // small phones
      } else if (width < 900) {
        setSizes({ blockSize: 7, blockMargin: 1, fontSize: 6 }) // tablet
      } else if (width < 1000) {
        setSizes({ blockSize: 8, blockMargin: 1, fontSize: 8 }) // tablets
      } else if (width < 1200) {
        setSizes({ blockSize: 9, blockMargin: 2, fontSize: 9 }) // small laptops
      } else {
        setSizes({ blockSize: 12, blockMargin: 4, fontSize: 12 }) // desktops
      }
    }

    if (mounted) {
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [mounted])

  const handleInputChange = (e) => {
    const value = e.target.value
    const filteredValue = value.replace(/[^A-Za-z0-9 ]/g, "").slice(0, maxChars)
    setInputText(filteredValue.toLocaleUpperCase())
  }

  const activityData = useMemo(() => {
    const data = []
    const startDate = new Date("2024-01-01")
    const text = inputText.toUpperCase().slice(0, maxChars)

    for (let i = 0; i < 365; i++) {
      const currentDate = new Date(startDate)
      currentDate.setDate(startDate.getDate() + i)

      const dateStr = currentDate.toISOString().split("T")[0]
      data.push({
        date: dateStr,
        count: 0,
        level: 0,
      })
    }

    const totalWeeks = 53
    const charCount = Math.min(text.length, maxChars)

    if (charCount === 0) return data

    let charIndex = 0
    for (const char of text) {
      if (characterPatterns[char] && charIndex < maxChars) {
        const pattern = characterPatterns[char]

        const startWeek = charIndex * 6

        for (let row = 0; row < 7; row++) {
          for (let col = 0; col < 5; col++) {
            if (pattern[row] && pattern[row][col] === 1) {
              const weekIndex = startWeek + col
              const dayIndex = weekIndex * 7 + row

              if (dayIndex < data.length && weekIndex < totalWeeks) {
                const seed = ((dayIndex + charIndex + row + col) % 4) + 1
                data[dayIndex].level = seed
              }
            }
          }
        }
        charIndex++
      }
    }

    return data
  }, [inputText])

  if (!mounted) {
    return (
      <div className="w-full space-y-4">
        <div className="">
          <div className="mb-4">
            <h2 className="text-foreground max-[800px]:text-sm text-md">Type below to generate a personalised graph</h2>
          </div>
          <div className="space-y-4 max-[800px]:p-4">
            <div className="flex justify-between items-center">
              <div className="space-y-2 flex-1">
                <textarea
                  value="HELLO"
                  placeholder="Type your message (letters, numbers only)..."
                  className="border border-zinc-300 dark:border-zinc-600 text-foreground font-mono text-lg resize-none w-full p-2 rounded-md focus:outline-0"
                  rows={1}
                  maxLength={maxChars}
                  disabled
                />
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">3/{maxChars} characters remaining</p>
                </div>
              </div>
            </div>
            <div className="w-full rounded-lg p-2 sm:p-4 border border-zinc-300 dark:border-zinc-600">
              <div className="w-full overflow-x-auto">
                <div className="w-full max-w-full h-32 bg-muted animate-pulse rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full space-y-4 dark:bg-[#0D1117] bg-white max-[800px]:border dark:border-zinc-800 border-zinc-300 max-[800px]:border-x-0">
      <div className="max-[800px]:p-4">
        <div className="mt-2 mb-4">
          <h2 className="text-foreground">Type below to generate a personalised graph</h2>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-2 flex-1">
              <input
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type your message (letters, numbers only)..."
                className="border border-zinc-300 dark:border-zinc-600  text-foreground resize-none w-full p-2 rounded-md focus:outline-0"
                maxLength={maxChars}
              />
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  {maxChars - inputText.length}/{maxChars} characters remaining
                </p>
                {inputText.length === maxChars && (
                  <p className="text-sm text-red-500 font-medium">Max {maxChars} characters</p>
                )}
              </div>
            </div>
          </div>

          <div className="w-full rounded-lg p-2 sm:p-4 border border-zinc-300 dark:border-zinc-600">
            <div className="w-full overflow-x-auto">
              <div className="w-full max-w-full">
                <ActivityCalendar
                  data={activityData}
                  colorScheme={theme || "light"}
                  labels={{
                    totalCount: `const arr = [${inputText
                      .split("")
                      .map((c) => `'${c}'`)
                      .join(", ")}]`,
                    legend: { less: "Less", more: "More" },
                    weekdays: ["" , "", "", "", "", "", ""]
                  }}
                  showWeekdayLabels
                  weekStart={1}
                  blockSize={sizes.blockSize}
                  blockMargin={sizes.blockMargin}
                  fontSize={sizes.fontSize}
                  theme={{
                    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                  }}
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
