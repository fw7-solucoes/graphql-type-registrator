const fs = require('fs')

/**
 * Return all directories from a path.
 */
const directories = path => {
  const directories = []

  if (fs.lstatSync(path).isDirectory()) {
    const directoriesPath = fs.readdirSync(path)

    directoriesPath.map(directory => {
      const directoryPath = `${path}/${directory}`

      if (fs.lstatSync(directoryPath).isDirectory()) {
        directories.push(directoryPath)
      }
    })
  }

  return directories
}

module.exports = directories
