// Module terminal-kit
const TERM = require( 'terminal-kit' ).terminal

module.exports = (name,ARRAY) =>
{
    TERM.cyan( '\n\nSelect type database:' )

    return new Promise(res=>{

        TERM.singleColumnMenu( ARRAY , (error,response) => {
    
            res(ARRAY[response.selectedIndex].trim())

        })

    });
}