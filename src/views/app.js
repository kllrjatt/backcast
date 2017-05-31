var AppView = Backbone.View.extend({

  el: '#app',


  initialize: function () {
    this.videos = new Videos();
    this.videoPlayer = new VideoPlayerView();
    this.videoList = new VideoListView();
    this.videoListEntryView = new VideoListEntryView();
    this.search = new SearchView();
    this.render();
  },


  render: function () {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});

