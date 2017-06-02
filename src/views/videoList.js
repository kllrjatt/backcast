var VideoListView = Backbone.View.extend({
  // add element with list class video list video 
  el: '.list',

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.children().detach();
    this.$el.html(this.template());

    // check if there is collection and if children at list are present 
    if (this.collection && this.$el.children()[0]) {
      //iterate through the collection -- thanks Kevin for the helper !!!
      this.collection.each((model, i) => {
        // generate a new view for each entry 
        let videoListEntryView = new VideoListEntryView({ model: model, el: this.$el.children()[0].children[i] });
        // render the view 
        videoListEntryView.render();
      });
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
