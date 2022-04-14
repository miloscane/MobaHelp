var scrollY;
function scrolled(){
	scrollY	=	window.scrollY;
	highlightNavigation();
}

function highlightNavigation(){
	var sectionElements	=	document.getElementById("content").getElementsByClassName("section");
	var sectionName		=	false;
	for(var i=0;i<sectionElements.length;i++){
		if(sectionElements[i].getBoundingClientRect().top<10 && sectionElements[i].getBoundingClientRect().bottom>0){
			sectionName	=	sectionElements[i].dataset.name;
			break;
		}
	}

	var navigationElements	=	document.getElementById("navigation").getElementsByClassName("item");
	for(var i=0;i<navigationElements.length;i++){
		if(navigationElements[i].dataset.name==sectionName){
			navigationElements[i].classList.add("itemActive");
		}else{
			navigationElements[i].classList.remove("itemActive");
		}
	}
}