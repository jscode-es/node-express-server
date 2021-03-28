var term = require( 'terminal-kit' ).terminal ;

var progressBar , progress = 0 ;


function doProgress()
{
	// Add random progress
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		// Cleanup and exit
		return false
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 400 ) ;
	}
}


module.exports = () =>
{
    return new Promise(res=>{

        progressBar = term.progressBar( {
            width: 80 ,
            title: 'Serious stuff in progress:' ,
            eta: true ,
            percent: true
        });


        doProgress()
        
        if(!progressBar)
        {
            res(true)
        }
    })
}