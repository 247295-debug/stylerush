'use client'

import { useState } from 'react'
import { RotateCcw, Sparkles } from 'lucide-react'
import { quizQuestions, quizResults } from '@/lib/stylerush-data'
import { cn } from '@/lib/utils'

export function StyleQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [finished, setFinished] = useState(false)

  const total = quizQuestions.length
  const progress = finished ? 100 : (step / total) * 100

  const select = (value: string) => {
    const next = [...answers, value]
    setAnswers(next)
    if (step + 1 >= total) {
      setFinished(true)
    } else {
      setStep(step + 1)
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers([])
    setFinished(false)
  }

  const result = (() => {
    if (!finished) return null
    const counts: Record<string, number> = {}
    answers.forEach((a) => (counts[a] = (counts[a] || 0) + 1))
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0]
    return quizResults[top] ?? quizResults.cottagecore
  })()

  const current = quizQuestions[step]

  return (
    <section id="quiz" className="relative px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Style quiz
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            What&apos;s your fashion aesthetic?
          </h2>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/60 bg-white/60 p-6 shadow-xl shadow-primary/10 backdrop-blur sm:p-10">
          {/* progress bar */}
          <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full gradient-brand transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {!finished && current ? (
            <div key={current.id} className="animate-fade-up">
              <p className="text-sm font-medium text-muted-foreground">
                Question {step + 1} of {total}
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                {current.question}
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {current.options.map((opt) => (
                  <button
                    key={opt.value + opt.label}
                    type="button"
                    onClick={() => select(opt.value)}
                    className="group flex items-center gap-3 rounded-2xl border border-border bg-white/70 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/15"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-xl">
                      {opt.emoji}
                    </span>
                    <span className="font-medium text-foreground">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            result && (
              <div className="animate-fade-up text-center">
                <div className="mx-auto flex size-20 items-center justify-center rounded-full gradient-brand text-4xl shadow-lg shadow-primary/30">
                  {result.emoji}
                </div>
                <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  <Sparkles className="size-4" /> Your aesthetic is
                </p>
                <h3 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                  {result.title}
                </h3>
                <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  {result.description}
                </p>
                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#trending"
                    className="rounded-full gradient-brand px-7 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
                  >
                    See matching looks
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-7 py-3 font-semibold text-foreground transition-colors hover:bg-white"
                  >
                    <RotateCcw className="size-4" /> Retake quiz
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
