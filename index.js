// Module terminal-kit
const TERM = require( 'terminal-kit' ).terminal

// Version module node-express-server
const VERSION = require('./package.json').version
const MAIN    = require('./bin/main')

// Clean terminal
TERM.reset()

// Basic info
TERM.bold( `\nNODE EXPRESS SERVER v.${VERSION}` )
TERM.bold( '\n=============================================' )

const GRATITUDE = `
Thank you very much for supporting and using the
node-express-server module. In this module you can
create a web server with the latest modules to perform
a fast and efficient service. Through the protocol
HTTP2 and Websocket, you will be able to achieve 
these goals.

For more information go to:
https://jscode.es/\n` 

// Message gratitude
TERM(GRATITUDE)

// Proceso principal
MAIN()