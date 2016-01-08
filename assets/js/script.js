/*
	lightyear = will require jquery
*/

$(function() {
	
	function buildItems(){
		var template = "<div class=\"grid-item\"></div>";
		var html = "";
		var l = 12;
		for ( counter = 1 ; counter <= l ; counter++ ){
			html += template;
			if( l == ( counter )){
				return html;
			}
		}
	}
	var currentPage = 1;
	var currentPageLimit = 5;

	function addItems( t , p ){
		self = t;
		
		html = buildItems();
		
		p.append( html );
		
		setTimeout(function() {

			self.addViewEl( Lightyear.getLastItem( p ) );
			
			currentPage = (currentPage + 1);

			if( currentPage == currentPageLimit ){
				console.log('maxed!');
			}
			else{
				
				self.keepScrolling = true;
				
				self.addScrollCB(); /* attach scrolling event */	
				
				console.log(currentPage);
				
			}
			
		}, 1000);
	}

	
	var parentContainer = $('#doLightyear');

	var Woody = new Lightyear();

		Woody.addViewEl( Lightyear.getLastItem( parentContainer ) )
		.listen( function(){

			self = Woody; /* THIS */
			
			if( self.keepScrolling ){ 
				console.log('firing');
				if( self.intoView( self.inviewEl , 150 )){

					console.log('into view');

					addItems( self , parentContainer );

					self.removeScrollCB();/* detach scrolling event */

					self.keepScrolling = false;
					
				}	
			}	

		}).run();

});