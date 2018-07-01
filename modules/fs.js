const fs = require('fs')

module.exports = {

    listAllFilesInDirectory: (path) => {

        let files = []
    
        fs.readdirSync(path).forEach(file => {
            files.push(file)
        })
    
        return files
    
    },
    
    createDirectory: (path, name) => {
        try {
            fs.existsSync(path + name) || fs.mkdirSync(path + name)
        } catch (err) {
            if (err.code !== 'EEXIST') throw err
        }
    },

    createFile: (path, name, extension, content) => {

        if (!content) { content = "" }

        fs.writeFile(path + name + extension, content, (err) => {
            if (err) throw err;
        })

    },

    writeFile: (path, content) => {

        fs.appendFile(path, content, (err) => {
            if (err) {
                return err
            }
        })
    
    },

    removeFile: (path) => {
        fs.unlinkSync(path)
    },

    getFilePath: (path) => {
        return require('path').dirname(path)
    }

}