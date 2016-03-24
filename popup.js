document.addEventListener(
	'DOMContentLoaded', function (){
	    
	    var links = document.getElementsByTagName("a");

	    for (var i = 0; i < links.length; i++) {
	        (
		        function () 
		        {
		            var lnks = links[i];
		            var URL = lnks.href;

		            lnks.onclick = function () 
		            {
		                chrome.tabs.create({active: true, url: URL});
		            };
	       		}
	        )();
	    }
	}

);