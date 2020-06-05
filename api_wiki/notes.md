  ```js
  $.getJSON(
    
    `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=` +
    `Timeline_of_the_20th_century` +
    '&origin=*'  // <-- this is the magic ingredient to prevent CORS errors!
    , data => 
    console.log(data)
  );

  ```

  title: "Timeline of the 20th century"
pageid: 53719379
size: 57865
wordcount: 7008
snippet: "<span class="searchmatch">timeline</span> <span class="searchmatch">of</span> <span class="searchmatch">the</span> <span class="searchmatch">20th</span> <span class="searchmatch">century</span>. 1901: First Nobel Prizes awarded. <span class="searchmatch">The</span> Australian colonies federated. Boxer Rebellion ends. Edward VII becomes King <span class="searchmatch">of</span> the"
timestamp: "2020-05-25T19:59:12Z"