import { useEffect, useState } from 'react'

const fmt = () =>
  new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Dubai' }).format(new Date())

export default function DubaiClock() {
  const [time, setTime] = useState(fmt())
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15000)
    return () => clearInterval(id)
  }, [])
  return <span>{time} GST</span>
}
