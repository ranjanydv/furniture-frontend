import React, {useEffect, useState} from 'react'

function Counter({date}) {
    const [formattedTime, setFormattedTime] = useState(formatFutureDate(date))

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFormattedTime(formatFutureDate(date))
        }, 60000)

        return () => clearInterval(intervalId)
    }, [date])

    function formatFutureDate(dateString) {
        const futureDate = new Date(dateString)
        const now = new Date()
        const diff = futureDate - now

        const oneMinute = 60 * 1000
        const oneHour = 60 * oneMinute
        const oneDay = 24 * oneHour
        const fiveMinutes = 5 * oneMinute

        if (diff < 0) {
            return 'Expired'
        } else if (diff < fiveMinutes) {
            return 'Just now'
        } else if (diff < oneHour) {
            const minutes = Math.floor(diff / oneMinute)
            return `${minutes}m Left`
        } else if (diff < oneDay) {
            const hours = Math.floor(diff / oneHour)
            return `${hours}h ${Math.floor(
                (diff - hours * oneHour) / oneMinute
            )}m left`
        } else if (diff < 10 * oneDay) {
            const days = Math.floor(diff / oneDay)
            const hours = Math.floor((diff - days * oneDay) / oneHour)
            const minutes = Math.floor((diff - days * oneDay - hours * oneHour) / oneMinute)
            return `${days}d ${hours}h ${minutes}m Left`
        } else {
            const year = futureDate.getFullYear()
            const month = futureDate.toLocaleString('default', {month: 'short'})
            const day = futureDate.getDate()
            const hours = futureDate.getHours()
            const minutes = futureDate.getMinutes()
            const seconds = futureDate.getSeconds()
            const ampm = hours >= 12 ? 'PM' : 'AM'
            const formattedHours = hours % 12 || 12
            return `${month} ${day}, ${year}, ${formattedHours}:${minutes
                .toString()
                .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}${ampm}`
        }
    }

    return (
        <>
            <span id="hours1">{formattedTime}</span>
        </>
    )
}

export default Counter
