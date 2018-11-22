function search() {
	inp = document.getElementById("myInput");
	inp.addEventListener("input", function (e) {

		// removeList();
		var placeIndex = inp.value;

		if (placeIndex) {
			fetch('/search/' + placeIndex)
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					var matched = findMatch(data, placeIndex);
					viewList(matched);
				})
		}
	})
}

function viewList(array) {
	var container = document.getElementById("autocomplete");
	//removeList();
	document.getElementById("autocomplete").innerHTML="";
	// container.setAttribute("id", "autocomplete-list");
	inp.parentNode.appendChild(container);
	console.log(array.length);
	for (i = 0; i < array.length; i++) {
		var item = document.createElement("option");
		item.setAttribute("class", "autoComplete-item");
		item.innerHTML = array[i];
		container.appendChild(item);
	}
}

function removeList() {
	if (document.getElementById("autocomplete")) {
	 var list =	document.getElementById("autocomplete");
    while(list.firstChild){
    		list.firstChild.remove();
		}
	}
}


search();
