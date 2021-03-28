// Module terminal-kit
const TERM = require( 'terminal-kit' ).terminal

module.exports = text =>
{
    return new Promise(res=>{
        
        TERM.cyan(text)
        TERM.yesOrNo( { yes: [ 'y' , 'ENTER' ] , no: [ 'n' ] } , function( error , result ) {
            
            let text = result? 'Activated':'Disabled'
            TERM(`${text}\n`)
            res(result)
            
        });

    })
}