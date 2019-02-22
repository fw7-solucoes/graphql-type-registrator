/**
 * Load a type based on given directory.
 */
const load = (directories, type) => {
  return directories.reduce((acc, directory) => {
    try {
      const foundType = require(`${directory}/${type}`)
      return [...acc, foundType]
    } catch ({ message }) {
      return [...acc]
    }
  }, [])
}

module.exports = { load }
