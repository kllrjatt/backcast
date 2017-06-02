var VideoListEntryView = Backbone.View.extend({
  initialize: function () {
    // this.render();
  },

  // add a event click 
  events: {
    'click .video-list-entry-title': 'clickHandler'
  },

  // define click handler 
  clickHandler: function (event) {
    this.model.select();
  },

  render: function () {
    this.$el.html(this.template());
    // add description, snippet, and url to the correct locations 
    this.$el.find('.video-list-entry-detail').html(this.model.attributes.description);
    this.$el.find('.video-list-entry-title').html(this.model.attributes.title);
    this.$el.find('.media-object').attr('src', this.model.attributes.url);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
