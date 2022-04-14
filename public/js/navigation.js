var navigationElements	=	document.getElementById("navigation").getElementsByClassName("item");
for(var i=0;i<navigationElements.length;i++){
	navigationElements[i].addEventListener("click", function() {
	  navigationClick(this)
	});
}

function navigationClick(elem){
	var name	=	elem.dataset.name;
	var sectionElements	=	document.getElementById("content").getElementsByClassName("section");
	for(var i=0;i<sectionElements.length;i++){
		if(sectionElements[i].dataset.name==name){
			sectionElements[i].scrollIntoView({
				behavior: "smooth", // or "auto" or "instant"
				block: "start" // or "end"
			});
		}
	}
}