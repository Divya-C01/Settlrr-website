"use client"

import { useEffect, useState } from "react"

export function StatsCounter() {
  const [students, setStudents] = useState(0)
  const [countries, setCountries] = useState(0)
  const [satisfaction, setSatisfaction] = useState(0)

  useEffect(() => {
    const animateCounter = (setter: (value: number) => void, target: number, duration = 2000) => {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(start))
        }
      }, 16)
    }

    const timer = setTimeout(() => {
      animateCounter(setStudents, 300)
      animateCounter(setCountries, 15)
      animateCounter(setSatisfaction, 98)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">{students}+</div>
        <p className="text-blue-100">Students Helped</p>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">{countries}+</div>
        <p className="text-blue-100">Countries</p>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">{satisfaction}%</div>
        <p className="text-blue-100">Satisfaction Rate</p>
      </div>
    </div>
  )
}
