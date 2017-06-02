var SearchView = Backbone.View.extend({
// add search class to the element to allow search view to render on the page 
  el: '.search',

  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
