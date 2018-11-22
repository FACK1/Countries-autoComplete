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
	// container.setAttribute("id", "autocomplete-list");
	inp.parentNode.appendChild(container);
	for (i = 0; i < array.length; i++) {
		var item = document.createElement("option");
		item.setAttribute("class", "autoComplete-item");
		item.innerHTML = array[i];
		container.appendChild(item);
	}
}

function removeList() {
	if (document.getElementById("autocomplete")) {
		document.getElementById("autocomplete").remove();
	}
}


search();
