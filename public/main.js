function search() {
	inp = document.getElementById("myInput");
	inp.addEventListener("input", function (e) {

		removeList();
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
	var container = document.createElement("DIV");
	container.setAttribute("id", "autocomplete-list");
	inp.parentNode.appendChild(container);
	for (i = 0; i < array.length; i++) {
		var item = document.createElement("DIV");
		item.setAttribute("class", "autoComplete-item");
		item.innerHTML = array[i];
		container.appendChild(item);
	}
}

function removeList() {
	if (document.getElementById("autocomplete-list")) {
		document.getElementsByTagName('DIV')[1].remove();
	}
}

function findMatch(array, searchIndex) {

	var places = [];
	var max = 5;

	for (var i = 0; i < array.length; i++) {
		if (array[i].name.substr(0, searchIndex.length).toUpperCase() ===
			searchIndex.toUpperCase() && max > 0) {
			max--;
			places.push(array[i].name);
		}
	}
	return places;
}
document.addEventListener("click", function (e){
	removeList(e.target);
});

search();
