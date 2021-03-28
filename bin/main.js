// Module terminal-kit
const TERM = require( 'terminal-kit' ).terminal

const directory = require('./directory')
const input  = require('./input')
const select = require('./select')
const active = require('./active')
const dotFile = require('./dotFile')
const copyTemplate = require('./copyTemplate')
//const progress = require('./progress')

let proyect =
{
    name:null,
    protocol:null,
    socket:false
}

// List protocol
const PROTOCOL =
[
    'HTTP2 ',
    'HTTPS ',
];

// List protocol
const DATABASE =
[
    'MYSQL ',
    'ORACLE ',
    'MICROSOFT SQL SERVER ',
    'POSTGRE SQL ',
    'MONGODB ',
    'REDIS ',
];

module.exports = async () =>
{
    proyect.name = await input('\nPlease enter your proyect name:\n',false)

    if(!proyect.name)
    {
        TERM.red('Requires a name')

        return TERM.processExit()
    }

    
    proyect.protocol = await select('\n\nSelect type database:',PROTOCOL)
    proyect.socket   = await active('\nActive websocket ( Socket.io ): [ Y | N ]\n')
    proyect.database = await active('\nAre you going to use a database?: [ Y | N ]\n')
    
    if(proyect.database)
    {
        proyect.database = await select('\n\nSelect type database:',DATABASE)
        
        proyect.schema = await input('\nPlease enter schema name:\n')
        proyect.user   = await input('\n\nPlease enter user name:\n')
        proyect.pass   = await input('\n\nPlease enter password:\n')
        
    }

    proyect.name = 'example'
    
    await directory(proyect.name)
    await copyTemplate(proyect.name)
    await dotFile(proyect)

    console.log({proyect})

    //await progress();

    // Close current process
    TERM.processExit()
}