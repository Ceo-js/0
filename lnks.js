

window.addEventListener( "load", ev => {

    /* [ properties ] 
    ==========================================*/
    var lnk = document.querySelectorAll( "lnk" );

    /* [ events ] 
    ==========================================*/
    lnk.forEach( l => {
        l.addEventListener( "click", ev => {
            window.open( l.getAttribute( "ceo" ), "_blank" );
        } );
    } );



} );