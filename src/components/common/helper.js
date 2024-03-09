export default {
    formatDate(timestamp) {
        const now = Date.now()
        const diff = now - Date.parse(timestamp)

        const oneMinute = 60 * 1000
        const oneHour = 60 * oneMinute
        const oneDay = 24 * oneHour

        if (diff < oneMinute) {
            return 'Just now'
        } else if (diff < oneHour) {
            const minutes = Math.floor(diff / oneMinute)
            return `${minutes}m ago`
        } else if (diff < oneDay) {
            const hours = Math.floor(diff / oneHour)
            return `${hours}h ago`
        } else if (diff < 7 * oneDay) {
            const days = Math.floor(diff / oneDay)
            const hours = Math.floor((diff - days * oneDay) / oneHour)
            return `${days}D ${hours}h ago`
        } else {
            const date = new Date(timestamp)
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            const hours = date.getHours()
            const minutes = date.getMinutes()
            const amPm = hours >= 12 ? 'PM' : 'AM'
            const formattedHours = hours % 12 || 12
            return `${year}/${month.toString().padStart(2, '0')}/${day
                .toString()
                .padStart(2, '0')} ${formattedHours}:${minutes
                .toString()
                .padStart(2, '0')}${amPm}`
        }
    },
    formatFutureDate(futureDate) {
        const futureTimestamp = new Date(futureDate).getTime()
        const now = Date.now()
        const diff = futureTimestamp - now

        const oneMinute = 60 * 1000
        const oneHour = 60 * oneMinute
        const oneDay = 24 * oneHour

        if (diff < 0) {
            return 'Already passed'
        } else if (diff < oneMinute) {
            return 'Just now'
        } else if (diff < oneHour) {
            const minutes = Math.floor(diff / oneMinute)
            return `${minutes}m from now`
        } else if (diff < oneDay) {
            const hours = Math.floor(diff / oneHour)
            return `${hours}h from now`
        } else if (diff < 30 * oneDay) {
            const days = Math.floor(diff / oneDay)
            const hours = Math.floor((diff - days * oneDay) / oneHour)
            return `${days}d ${hours}H from now`
        } else {
            const date = new Date(futureTimestamp)
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            const hours = date.getHours()
            const minutes = date.getMinutes()
            const ampm = hours >= 12 ? 'PM' : 'AM'
            const formattedHours = hours % 12 || 12
            return `${year}/${month.toString().padStart(2, '0')}/${day
                .toString()
                .padStart(2, '0')} ${formattedHours}:${minutes
                .toString()
                .padStart(2, '0')}${ampm}`
        }
    },
}
