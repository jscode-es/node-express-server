// Module terminal-kit
const { writeFile, existsSync }   = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

module.exports = ({name,schema,user,pass,database,protocol,socket}) =>
{
    return new Promise(res=>{
        
		let directory = path.resolve(`${__dirname}/${name}`)

		let content = 
		`
		# Node Express Server
		# Global setting

		# PROYECT
		PROYECT_NAME=${name}

		# PROTOCOL
		PROTOCOL=${protocol}

		# WEB SOCKET
		WS_ACTIVE=${socket}

		# Debug
		LOG_LEVEL=debug
		EMAIL_DEBUG=false

		# Session
		SECRET_SESSION=${uuidv4()}

		# HOST
		HOST_DEV=localhost
		HOST_PRO=null

		# IP
		IP_DEV=127.0.0.1
		IP_PRO=null

		# DATABASE
		####################

		# MAIN TYPE DATABASE
		DB_TYPE=${database}

		# DATABASE [ TEST ]
		DB_USER_TEST=null
		DB_PASS_TEST=null
		DB_TABLE_TEST=null

		# DATABASE [ DEVELOP ]
		DB_USER_DEV=${user}
		DB_PASS_DEV=${pass}
		DB_TABLE_DEV=${schema}

		# DATABASE [ PRODUCTION ]
		DB_USER_PRO=null
		DB_PASS_PRO=null
		DB_TABLE_PRO=null

		# CERTIFICATE [ DEVELOP ]
		CERT_DEV=null
		CERT_KEY_DEV=null
		CERT_CA_DEV=null

		# CERTIFICATE [ PRODUCTION ]
		CERT_PRO=null
		CERT_KEY_PRO=null
		CERT_CA_PRO=null
		`
		content = content.replace(/\t/g, '').split('\r\n').join()

		if(existsSync(directory))
		{	
			let dir = path.resolve(`${directory}/.env`)

			writeFile(dir,content,'utf8',err=>{
				console.log(err)
			})
		}

        res(true)
    })
}