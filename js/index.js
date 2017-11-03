$("#input-field").keyup(function(event){
    if(event.keyCode == 13){
        $("#search-button").click();
    }
});

var search = $('#search-button');

function goSearch() {
  var input = $('#input-field').val();
  var fullUrl = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + input + '&format=json&callback=wikiCallback';
  
  // Resets result list when searching for something new
  $('#result-list').html('');
    
  $.ajax({
  url: fullUrl,
  dataType: 'jsonp',
  success: function(data) {
    var newData = data.query.search;
    
    for (var i = 0; i < newData.length; i++) {
      var result = $('#result-list');
      var wikiLink = 'https://en.wikipedia.org/wiki/' + newData[i].title;
      
      result.append('<div class="wiki-results"><a href=' + wikiLink + ' target="_blank" class="results">' + newData[i].title + '<br/><p class="article-desc">' + newData[i].snippet + '</p></a></div>');
    }
  }
});
}
