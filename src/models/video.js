var Video = Backbone.Model.extend({

  initialize: function (video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    // over write title with direct link to title
    this.set('title', this.attributes.snippet.title);
    // direct link to description
    this.set('description', this.attributes.snippet.description);
    // direct url for thumb nail 
    this.set('url', this.attributes.snippet.thumbnails.default.url);
  },

  select: function () {
    this.trigger('select', this);
  }

});
