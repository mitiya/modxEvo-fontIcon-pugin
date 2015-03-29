function bindReady(handler){

	var called = false

	function ready() { 
		if (called) return
		called = true
		handler()
	}

	if ( document.addEventListener ) { 
		document.addEventListener( "DOMContentLoaded", function(){
			ready()
		}, false )
	} else if ( document.attachEvent ) {  


		if ( document.documentElement.doScroll && window == window.top ) {
			function tryScroll(){
				if (called) return
				if (!document.body) return
				try {
					document.documentElement.doScroll("left")
					ready()
				} catch(e) {
					setTimeout(tryScroll, 0)
				}
			}
			tryScroll()
		}


		document.attachEvent("onreadystatechange", function(){

			if ( document.readyState === "complete" ) {
				ready()
			}
		})
	}


    if (window.addEventListener)
        window.addEventListener('load', ready, false)
    else if (window.attachEvent)
        window.attachEvent('onload', ready)

}

bindReady(function () {
	if ( window.jQuery && document.getElementById("actions")) {
		var script = document.createElement('script');
		script.src = '../assets/plugins/fontIconTv/fonicotv.js';
		document.getElementsByTagName('head')[0].appendChild(script);
		console.info("fonicotv.js loading OK");
	}
});
