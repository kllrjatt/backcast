var AppView = Backbone.View.extend({

  el: '#app',


  initialize: function () {
    // render videos
    this.videos = new Videos();
    // render video player 
    this.videoPlayer = new VideoPlayerView();
    //render video list
    this.videoList = new VideoListView({collection: this.videos});
    //render video list entry view
    this.videoListEntryView = new VideoListEntryView({model: this.videos});
    // render search view 
    this.search = new SearchView();
    // render app view
    this.render();
  },


  render: function () {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});

