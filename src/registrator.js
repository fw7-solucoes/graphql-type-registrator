const directories = require('./directories')
const { load } = require('./type-loader')

const modulesPath = `${process.env.PWD}/${process.env.MODULES_PATH ||
  'src/modules'}`

const loadFromModulesPath = () => directories(modulesPath)

const loadType = type => {
  const foundDirectories = loadFromModulesPath()
  return load(foundDirectories, type)
}

module.exports = () => ({
  typeDefs: loadType('typeDefs'),
  resolvers: loadType('resolvers')
})
