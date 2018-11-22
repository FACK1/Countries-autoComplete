
function findMatch(array, searchIndex) {

	var places = [];
	var max = 5;

if(searchIndex !== ""){
	for (var i = 0; i < array.length; i++) {
		if (array[i].name.substr(0, searchIndex.length).toUpperCase() ===
			searchIndex.toUpperCase() && max > 0) {
			max--;
			places.push(array[i].name);
		}
	}
}
	return places.slice(0,5);
}
