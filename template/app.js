const path =  require('path')
const dotenv = require('dotenv')

// Environment variable
const $ = process.env

// Initialize configuration
dotenv.config()

// Quick directories
require(path.resolve(process.cwd(),'directories'))

// Load controller
const controller = require(path.resolve($.controller,'directories'))

// Module error
const handlerError = controller('error')

// Hear errors globally
handlerError.listener()

// Module server
const server = controller('server')

// Launch server
new server($.PROTOCOL)
