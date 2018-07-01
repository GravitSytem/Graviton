const os = require('os')

module.exports = {

    getProcArch: () => {
        return os.arch()
    },

    getProcModel: () => {

        return os.cpus()[0].model

    },

    getNumberOfProcCore: () => {

        return os.cpus().length

    },

    getProcMaxSpeed: (core) => {

        return os.cpus()[core].speed

    },

    getFreeMem: () => {
        return Math.round(os.freemem() / 1000000)
    },

    getUsedMem: () => {
        return Math.floor(os.totalmem() / 1000000) - Math.floor(os.freemem() / 1000000)
    },

    getTotalMem: () => {
        return Math.round(os.totalmem() / 1000000)
    },

    getOsUptime: () => {

        let uptimeInSeconds = os.uptime()

        if (uptimeInSeconds <= 60) {
            return uptimeInSeconds + 's'
        } else if (uptimeInSeconds > 60 && uptimeInSeconds < 3600) {
            return Math.floor(uptimeInSeconds / 60) + 'm'
        } else if (uptimeInSeconds > 3600) {
            return Math.floor(uptimeInSeconds / 3600) + 'h'
        }

    }

}