var VideoListView = Backbone.View.extend({
  initialize: function () {
    this.collection.models.forEach(function (element) {
      new VideoListEntryView({ model: element });

    }),
    this.render();
  },


  render: function () {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
