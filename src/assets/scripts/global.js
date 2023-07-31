

/* == [ id="sidebar-script" ] == == == == == == == == == */
var arrow = document.querySelectorAll(".arrow");

for( var i = 0; i < arrow.length; i++ ) {
   arrow[i].addEventListener("click", (e) => {
         var arrowParent = e.target.parentElement.parentElement;
         arrowParent.classList.toggle("showMenu");
   });
}

var 
   sidebar = document.querySelector("sidebar"),
   sidebarBtn = document.querySelector(".switch");

sidebarBtn.addEventListener("click", () => {
   sidebar.classList.toggle("close");
   if(sidebar.classList.contains("close")) {
         sidebar.classList.remove("blur");
   } else {
         sidebar.classList.add("blur");
   }
});



/* == [ id="ipify-script" ] == == == == == == == == == */
      $.getJSON("https://api.ipify.org?format=json",
         function (data) {
            $("#userip").html(data.ip);
      })
/* == == == == == == == == == */


/* == [ id="ipinfo-script" ] == == == == == == == == == */
$.get( "https://ipinfo.io/json", function( response ) {
   $( "#ip" ).html( response.ip );
   $( "#hostname" ).html( response.hostname );
   $( "#region" ).html( response.region );
   $( "#loc" ).html( response.loc );
   $( "#org" ).html(response.org );
   $( "#postal" ).html( response.postal );
   $( "#timezone" ).html( response.timezone );
   $( "#city" ).html( response.city );
   $( "#country" ).html( response.country );
}, "jsonp" );

/* botão liga/desliga */
   $( function() {
      // var geolocationPanelObserver = 0;
      // $( ".geolocationSwitch" ).click( function() {
      // 	switch( geolocationPanelObserver ) {
      // 		case 0: $( "#geolocationPanel" ).hide();
      // 				geolocationPanelObserver = 1;
      // 		break;
      // 		case 1: $( "#geolocationPanel" ).show();
      // 				geolocationPanelObserver = 0;
      // 		break;
      // 	}
      // } );

      $( ".geolocationSwitch" ).click( () => {
            $( "#geolocationPanel" ).toggle();
            } );
      $( ".geolocationSwitch" ).mousedown( () => {
            this.style.cursor = "grabbing" 
      } );
      $( ".geolocationSwitch" ).mouseup( () => {
            this.style.cursor = "pointer" 
            } );


   });




/* == [ id="details-script" ] == == == == == == == == == */
/*   
$("details").on("click", function() {
$("details[open]")
   .not(this)
   .removeAttr("open");
}); 
*/



/* == [  ] == == == == == == == == == */
window.addEventListener( "load", ev => {
   var 
      amoVc = document.querySelector( "#amo-vc" ),
      slideshow = document.querySelector( "#slideshow" )
      pixa = "w.jpg",
      pixb = "x.jpg",

   amoVc.addEventListener( "mouseenter", ev => {
      amoVc.innerHTML = "<lyh style='color: #f09;'>❤️   Lýh   ❤️</lyh>";
   } );
   amoVc.addEventListener( "mouseleave", ev => {
      amoVc.innerHTML = "Amo vc ❤️";
   } );

   function pix1( f, a, b ,t ) {
      setTimeout( () => {
         slideshow.style.backgroundImage = `url( ${a} )`;
         f( b, (t * 2) );
      }, t );
   }
   function pix2( a, t ) {
      setTimeout( () => {
         slideshow.style.backgroundImage = `url( ${a} )`;
         /*f( b );*/
      }, t );
   }

   let list = [];
   list.length = 1000;

   for( i = 1; i <= 1000; i++ ) {
      pix1( pix2, pixa, pixb, ( i * 1000 ) );
   }

            /*
            function f2( v ){
         setTimeout( () => {
            alert(2);
            v();
         }, 2000);
      };
       
      alert("1");
      f2( () => alert( 3 ) );
      */

} );


    
    