// Module terminal-kit
const fs   = require( 'fs' )
const path = require( 'path' )

module.exports = nameProyect =>
{
    return new Promise(res=>{
        
		let directory = path.resolve(`${__dirname}/${nameProyect}`)

		if(!fs.existsSync(directory))
		{
			fs.mkdirSync(directory)
		}

        res(true)
    })
}