// var http = new XMLHttpRequest();

var inputElement = document.querySelector('input');
var display = document.getElementById('display');
var form = document.querySelector('form');
var button = document.querySelector('button');

display.style.visibility = 'hidden';
let term ;
inputElement.addEventListener('keyup', (e) => {
  // console.log({value: e.target.value});
  term = e.target.value;
  let replaced = term.replace(" ", "_")
  // console.log({term, replaced})
  term = replaced;
})

button.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
  if(term === "_"){
    display.innerHTML = "";
    // http.abort();
    display.style.visibility = "hidden";
  } else {
    $.getJSON(
      `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=` +
      '&origin=*' + // <-- this is the magic ingredient to prevent CORS errors!
      `&search=${term}`, function (data) { 
        console.log(data)/* ... */ 
        getData(data)
      }
    );
  }});

  
function getData(data){
  let removingSelection = display.querySelectorAll('li');
  removingSelection.forEach(el => { display.removeChild(el)})
  
  let titles = data[1];
  let links = data[3];

  for (let i = 0; i < titles.length; i++) {
    if(titles[i] !== ""){
      var item = document.createElement('li');
      item.appendChild(document.createTextNode(titles[i]))
      display.style.visibility = 'visible'
      item.innerHTML = `<a href='${links[i]}'>${titles[i]}</a>`
      display.appendChild(item);
    }  
  }
}

