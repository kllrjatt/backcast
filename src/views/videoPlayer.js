var VideoPlayerView = Backbone.View.extend({
  // add the location for the player 
  el: '.player',

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html('<div class="loading">Please wait...</div>');
    // check to see if there is model present
    if (this.model) {
      // add the template to the html 
      this.$el.html(this.template());
      // find the tag to embed and add the you tube video link to it 
      this.$el.find('.embed-responsive-item').attr('src', 'https://www.youtube.com/embed/' + this.model.attributes.id);
      // add title of the video to the player 
      this.$el.find('.video-player-details h3').html(this.model.attributes.title);
      // add the description to the page
      this.$el.find('.video-player-details div').html(this.model.attributes.description);
    }

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});


