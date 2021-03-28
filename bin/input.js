// Module terminal-kit
const TERM = require( 'terminal-kit' ).terminal

module.exports = (text, _def = '') =>
{
    TERM.cyan(text)
    
    return new Promise(res=>{

        TERM.inputField(( error, input ) =>{
            
            if(input.length === 0)
            {
                res(_def)
            }

            res(input)
        })

    })
}