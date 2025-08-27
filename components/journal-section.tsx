"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { BookHeart, Send, Calendar, Clock } from "lucide-react"

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

export default function JournalSection() {
  const [journalEntry, setJournalEntry] = useState("")
  const [submittedEntry, setSubmittedEntry] = useState("")
  const [negativeHighlights, setNegativeHighlights] = useState<{ start: number; end: number }[]>([])

  const handleSubmit = () => {
    setSubmittedEntry(journalEntry)
    setNegativeHighlights(detectNegativePhrases(journalEntry))
  }

  // Get current date and time
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="bg-white/50 dark:bg-black/20 backdrop-blur-sm border-none shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <BookHeart className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              <h2 className="text-xl font-medium">Today's Journal</h2>
            </div>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{currentDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{currentTime}</span>
              </div>
            </div>

            <Textarea
              placeholder="今天你感觉如何？How are you feeling today?"
              className="min-h-[250px] bg-white/70 dark:bg-black/10 border-teal-100 dark:border-teal-900 text-base"
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
      </div>

      <div className="lg:col-span-1">
        <div className="space-y-6">
          <Card className="bg-white/50 dark:bg-black/20 backdrop-blur-sm border-none shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4 text-teal-700 dark:text-teal-300">Journal Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-teal-100 dark:border-teal-900">
                  <span className="text-gray-600 dark:text-gray-400">Entries this week</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-teal-100 dark:border-teal-900">
                  <span className="text-gray-600 dark:text-gray-400">Streak</span>
                  <span className="font-medium">12 days</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-teal-100 dark:border-teal-900">
                  <span className="text-gray-600 dark:text-gray-400">Mood trend</span>
                  <span className="font-medium text-teal-600 dark:text-teal-400">Improving</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {submittedEntry && (
            <Card className="bg-white/50 dark:bg-black/20 backdrop-blur-sm border-none shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-2 text-teal-700 dark:text-teal-300">AI Insights</h3>
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
      </div>
    </div>
  )
}
