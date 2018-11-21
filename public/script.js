function search() {
  inp = document.getElementById("myInput");
  inp.addEventListener("input", function(e) {

    var placeIndex = inp.value;
    console.log(placeIndex);

fetch('/search/'+placeIndex)
.then(response => {
console.log("resopnse",response)
return response.json();
})
.then(function (data){
console.log("data",data);
var places=[];
var counter=0;
for (var i = 0; i < data.length; i++) {
  if (data[i].name.substr(0, placeIndex.length).toUpperCase() === placeIndex.toUpperCase()) {
places.push(data[i].name);
  }


}
console.log(places);

viewList(places);
})
})

}

search();

function viewList(array){
//starts
var a = document.createElement("DIV");
a.setAttribute("id", "autocomplete-list");
a.setAttribute("class", "autocomplete-items");
/*append the DIV element as a child of the autocomplete container:*/
inp.parentNode.appendChild(a);
/*for each item in the array...*/
for (i = 0; i < array.length; i++) {


  var  b = document.createElement("DIV");
       b.innerHTML = array[i];
         a.appendChild(b);

    }

  //end

}
