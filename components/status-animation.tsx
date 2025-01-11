'use client'

import { useState, useEffect } from 'react'

export function StatusAnimation() {
  const [dateTime, setDateTime] = useState('')
  const [weather, setWeather] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      setDateTime(now.toLocaleString())
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    // Mock weather data
    setWeather('Sunny, 72°F')

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-4 left-4 font-mono text-xs text-gray-500">
      {dateTime} | {weather}
    </div>
  )
}

