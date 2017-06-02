var AppView = Backbone.View.extend({

  el: '#app',


  initialize: function () {
    // render app view
    this.render();
    // add new collection using example video data
    this.collection = new Videos(exampleVideoData);
    // create new player view using the first video in collection 
    this.videoPlayerView = new VideoPlayerView({ model: this.collection.first() });
    //create new list using the collection 
    this.videoListView = new VideoListView({ collection: this.collection });
    // create serach bar 
    this.searchBar = new SearchView();
    // trigger event handler 
    this.eventHandler();
  },
  // write event function 
  eventHandler: function () {
    // on click / select 
    this.collection.on('select', function (event) {
      // render clicked video on the player 
      this.videoPlayerView.model = event;
      this.videoPlayerView.render();
    }, this);

  },


  render: function () {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});

