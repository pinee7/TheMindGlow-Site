"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { BookHeart, Send } from "lucide-react"

// Function to detect negative phrases and return their indices
const detectNegativePhrases = (text: string) => {
  // This is a simplified example - in a real app, you'd use NLP or AI
  const negativePatterns = [
    /can't|cannot/gi,
    /won't|will not/gi,
    /hate|hated|hating/gi,
    /terrible|awful/gi,
    /never|impossible/gi,
    /failure|fail/gi,
    /worried|worry|anxious/gi,
  ]

  const matches: { start: number; end: number }[] = []

  negativePatterns.forEach((pattern) => {
    let match
    while ((match = pattern.exec(text)) !== null) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
      })
    }
  })

  return matches
}

// Component to render text with highlighted negative phrases
const HighlightedText = ({ text, highlights }: { text: string; highlights: { start: number; end: number }[] }) => {
  if (!text) return null

  let lastIndex = 0
  const elements = []

  highlights.forEach((highlight, i) => {
    // Add text before the highlight
    if (highlight.start > lastIndex) {
      elements.push(<span key={`text-${i}`}>{text.substring(lastIndex, highlight.start)}</span>)
    }

    // Add highlighted text
    elements.push(
      <span key={`highlight-${i}`} className="bg-amber-200 dark:bg-amber-700/50 px-1 rounded">
        {text.substring(highlight.start, highlight.end)}
      </span>,
    )

    lastIndex = highlight.end
  })

  // Add any remaining text
  if (lastIndex < text.length) {
    elements.push(<span key="text-end">{text.substring(lastIndex)}</span>)
  }

  return <>{elements}</>
}

export default function JournalScreen() {
  const [journalEntry, setJournalEntry] = useState("")
  const [submittedEntry, setSubmittedEntry] = useState("")
  const [negativeHighlights, setNegativeHighlights] = useState<{ start: number; end: number }[]>([])

  const handleSubmit = () => {
    setSubmittedEntry(journalEntry)
    setNegativeHighlights(detectNegativePhrases(journalEntry))
  }

  return (
    <div className="space-y-4">
      <Card className="bg-white/50 dark:bg-black/20 backdrop-blur-sm border-none shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <BookHeart className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            <h2 className="text-lg font-medium">Today's Journal</h2>
          </div>

          <Textarea
            placeholder="今天你感觉如何?How are you feeling today?"
            className="min-h-[150px] bg-white/70 dark:bg-black/10 border-teal-100 dark:border-teal-900"
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
          />

          <div className="flex justify-end mt-4">
            <Button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-600 hover:to-amber-600"
            >
              <Send className="h-4 w-4 mr-2" />
              Save Entry
            </Button>
          </div>
        </CardContent>
      </Card>

      {submittedEntry && (
        <Card className="bg-white/50 dark:bg-black/20 backdrop-blur-sm border-none shadow-md">
          <CardContent className="pt-6">
            <h3 className="text-sm font-medium mb-2 text-teal-700 dark:text-teal-300">AI Insights</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              We've highlighted potential negative thought patterns in orange:
            </p>
            <div className="p-4 bg-white/70 dark:bg-black/10 rounded-md text-gray-800 dark:text-gray-200">
              <HighlightedText text={submittedEntry} highlights={negativeHighlights} />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
