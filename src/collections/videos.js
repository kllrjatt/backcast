var Videos = Backbone.Collection.extend({

  initialize: function () {
    this.set(window.exampleVideoData);
  },

  model: Video

});
