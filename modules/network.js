const macaddress = require('macaddress')
const wifi = require('node-wifi')

wifi.init({
    iface : null
})

module.exports = {

    getHostName: () => {
        return require('os').hostname()
    },

    getNetworkInterfaces: () => {

        let ni = []

        macaddress.all((err, all) => {
            ni.push(all)
        })

        return ni[0]

    },

    deviceIsOnline: () => {

        return

    },

    scanWifi: () => {

        let wifiArray

        wifi.scan((err, networks) => {
            if (err) {
                return err
            } else {
                wifiArray = networks
            }
            return wifiArray
        })

    }

}