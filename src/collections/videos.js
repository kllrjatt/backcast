var Videos = Backbone.Collection.extend({
  // untouched collection based on Model Video 
  model: Video,

  // add you tube api search url
  url: 'https://www.googleapis.com/youtube/v3/search',

//write search funciton using fetch 
  search: function () {
    this.fetch({
      // pass in data object 
      data: {
        // pass in api key 
        key: window.YOUTUBE_API_KEY,
        // pass in query string 
        q: query,
        // max results 5 
        maxResults: 5,
        // get videos
        type: 'video',
        // embeddable videos 
        videoEmbeddable: 'true'
      }
    });
  },

// after search  you need to parse -- back bone calls it automatically 
  parse: function (response) {
    // return reposne items from the search function 
    return response.items;
  },

});
