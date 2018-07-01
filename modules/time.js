const time = require('time')

let now = new time.Date()
let date = time.localtime(Date.now()/1000)

let normalizeDate = (number) => {

    if (number < 10) {
        return '0'+number
    } else {
        return number
    }

}

module.exports = {

    getSeconds: () => {
        return normalizeDate(date.seconds)
    },

    getMinutes: () => {
        return normalizeDate(date.minutes)
    },

    getHours: () => {
        return normalizeDate(date.hours)
    },

    getDay: () => {
        return normalizeDate(date.dayOfWeek + 3)
    },

    getMonth: () => {
        return normalizeDate(date.month + 1)
    },

    getYear: () => {
        let year = date.year.toString()
        return year.substr(1, 3)
    },

    getTimeZone: () => {
        return date.timezone
    }

}