"use client"
import { useEffect, useState, useRef } from "react"
export default function TypewriterEffect() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Hi there!"
  const typingSpeed = 220 // milliseconds per character
  const startDelay = 300 // delay before typing starts
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    let timer: NodeJS.Timeout

    // Start typing after a delay
    const startTyping = setTimeout(() => {
      let currentIndex = 0

      // Type one character at a time
      timer = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(timer)
        }
      }, typingSpeed)
    }, startDelay)

    return () => {
      clearTimeout(startTyping)
      clearInterval(timer)
    }
  }, [])

  return (
    <h2 ref={textRef} className="text-7xl font-playfair font-bold mb-8 relative">
      {displayText}
      <span
        className={`absolute right-[-8px] top-0 h-[80%] w-[3px] bg-black ${displayText === fullText ? "animate-cursor-blink" : ""}`}
      ></span>
    </h2>
  )
}

