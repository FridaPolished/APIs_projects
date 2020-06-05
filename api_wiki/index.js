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

    $.getJSON(
        'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' +
        '&origin=*' + // <-- this is the magic ingredient to prevent CORS errors!
        `&search=${term}`,data => getData(data)
        );
      }
    });
    
    
  function getData(data){
    // console.log(data)
    //removing previous search results
    let removingSelection = display.querySelectorAll('li');
    removingSelection.forEach(el => { display.removeChild(el)})
    
    
    //separating response data
    let titles = data[1];
    let links = data[3];
    // console.log(data)
    
    for (let i = 0; i < titles.length; i++) {
      if(titles[i] !== ""){
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(titles[i]))
        display.style.visibility = 'visible'
        item.innerHTML = `<a href='${links[i]}'>${titles[i]}</a>`
        display.appendChild(item);
      }  
    }
    getSnippet()
}


function getSnippet(){
  // console.log('hi')
  $.getJSON(
    // `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=` +
    // `https://en.wikipedia.org/w/api.php?action=query&format=json&generator=categories&titles=Albert%20Einstein&prop=info` +
    // `https://en.wikipedia.org/w/api.php?action=query&format=json&generator=categories&titles=Albert%20Einstein` +
    // http://en.wikipedia.org/w/api.php?

    `https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=Albert%20Einstein&rvsection=0` +
    // `Timeline_of_the_20th_century` +
    '&origin=*'  // <-- this is the magic ingredient to prevent CORS errors!
    , data =>
      console.log(data)
  );
  // let dataArray = data.query.search;
  // dataArray.forEach(d => {
  //   let snippet = d.snippet;
  //   console.log(snippet)




}
