/*!
 * Lightyear v0.1 (2016-01)
 * A helper module for infinity scrolling
 * (c) 2015 Ruben Marin
 * 
 * @version v0.1
 * @license Dual licensed under MIT license and GPL.
 * @author Ruben Marin - ruben.e.marin@gmail.com
 *
 */
/*

            _._                           _._
           ||||                           ||||
           ||||_           ___           _||||
           |  ||        .-'___`-.        ||  |
           \   /      .' .'_ _'. '.      \   /
           /~~|       | (| b d |) |       |~~\
          /'  |       |  |  '  |  |       |  `\
,        /__.-:      ,|  | `-' |  |,      :-.__\       ,
|'-------(    \-''""/.|  /\___/\  |.\""''-/    )------'|
|         \_.-'\   /   '-._____.-'   \   /'-._/        |
|.---------\   /'._| _    .---. ===  |_.'\   /--------.|
'           \ /  | |\_\ _ \=v=/  _   | |  \ /          '
             `.  | | \_\_\ ~~~  (_)  | |  .'
               `'"'|`'--.__.^.__.--'`|'"'`
                   \                 /
                    `,..---'"'---..,'
                      :--..___..--:    TO INFINITY...
                       \         /  
                       |`.     .'|       AND BEYOND!
                       |  :___:  |
                       |   | |   |
                       |   | |   |
                       |.-.| |.-.|
                       |`-'| |`-'|
                       |   | |   |
                      /    | |    \
                     |_____| |_____|
                     ':---:-'-:---:'
                     /    |   |    \
                    /.---.|   |.---.\
                    `.____;   :____.'

*/
var Lightyear = ( function( $ , window , document ,undefined) {

	function Lightyear( options ){
		
		Lightyear.objectMerge = function objectMerge( o1 , n1 ){
		    var n2 = {};
		    for (var attrname in o1) { n2[attrname] = o1[attrname]; }
		    for (var attrname in n1) { n2[attrname] = n1[attrname]; }
		    return n2;
		};
		Lightyear.getLastItem = function getLastItem( el ){
			return el.children().last();/* el must be object */
		}

		/* */
		this.defaults = {};
		
		this.options  = {};
		
		this.parentEl = '';/* must be jquery object*/
		
		this.inviewEl  = '';/* must be jquery object*/
		
		this.keepScrolling = true;

this.addScrollCB = function addScrollCB(){
		
			if(window.attachEvent){
				window.attachEvent( 'onscroll' , this.listen );
			}
			else{
				document.addEventListener( 'scroll' , this.listen );
			}
		
		}
		this.removeScrollCB = function removeScrollCB(){
			
			if( window.detachEvent){
				window.detachEvent( 'onscroll' , this.listen );
			}
			else{
				document.removeEventListener( 'scroll' , this.listen );
			}
			
		}
		this.listen = function listen(f){
			
			if(f == ''){
				console.log("runnin' runnin'");
			}
			else if( typeof f == 'function' ){
				this.listen = function listen(){ f.call(this) };
			}
			else{
				console.log("runnin' runnin'");
			}
			return this;	
		}
				
		this.getOptions = function getOptions(){
			return this.options;
		}
		this.setup = function setup(s){

			for (var attrname in s) { 
				if(attrname == 'parentEl'){
					this.parentEl = s[attrname];
				}
				this.options[attrname] = s[attrname]; 
			}
			return this;
		}
		this.addViewEl = function addViewEl(el){ /* must be jquery object */
			this.inviewEl = el;
			return this;
		}
		this.intoView = function intoView(el , p){
			/*
				el : jquery object
			*/
			var scrollTops     = window.scrollY||window.pageYOffset||document.documentElement.scrollTop,
		    	padding 	   = p||0,
		    	elementOffset  = el.offset().top + padding,
		    	distance       = ( elementOffset - scrollTops );
		   			   	
		   	return ( distance <= $(window).height() ); 	
		}

		this.run = function run(){
			this.addScrollCB();
			console.info('to Infinity & ...')
		}

	}
	return Lightyear;

} )( jQuery, this , document );