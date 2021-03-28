// Module terminal-kit
const fs   = require( 'fs-extra' )
const path = require( 'path' )

module.exports = nameProyect =>
{
    return new Promise(res=>{
        
		let directory = path.resolve(`${__dirname}/${nameProyect}`)
        let template  = path.resolve(`${__dirname}/../template/`)

        console.log({
            directory,
            template
        });

		if(fs.existsSync(directory))
		{ 
            console.log('Entra');
			fs.copySync(template,directory, { overwrite: true },err =>
            {
                console.log(err)
            })
		}

        res(true)
    })
}