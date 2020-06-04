var inputElement = document.querySelector('input');
var display = document.getElementById('display');
var form = document.querySelector('form');
var button = document.querySelector('button');

display.style.visibility = 'hidden';

let term ;
inputElement.addEventListener('keyup', (e) => {
  //format the term
  term = e.target.value;
  let replaced = term.replace(" ", "_")
  term = replaced;
})

button.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
  if(term === "_"){
    display.innerHTML = "";
    display.style.visibility = "hidden";
  } else {

    // $.getJSON(
      //   `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=` +
      //   '&origin=*' + // <-- this is the magic ingredient to prevent CORS errors!
      //   `&search=${term}`,data =>  getData(data)
      //   );
      $.getJSON(
        ////w/api.php?action=query&format=json&list=search&srsearch=
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=` +
      `${term}` +
      '&origin=*'  // <-- this is the magic ingredient to prevent CORS errors!
      ,data =>  getSnippet(data)
      );
  }
});

function getData(data){
  //removing previous search results
  let removingSelection = display.querySelectorAll('li');
  removingSelection.forEach(el => { display.removeChild(el)})
  
  //separating response data
  let titles = data[1];
  let links = data[3];
  console.log(data)

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


function getSnippet(data){
  let dataArray = data.query.search;
  dataArray.forEach(d => {
    let snippet = d.snippet;
    // console.log(snippet)
    
  });

}
