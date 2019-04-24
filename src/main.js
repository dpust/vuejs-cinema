import Vue from 'vue';
import './style.scss';

new Vue({
  el: '#app',
  components: {
    'movie-list': {
      template: `<div id="movie-list">
                  <div v-for="movie in movies" class="movie">{{ movie }}</div>
                  </div>`,
      data: function() {
        return {
          movies: [
            { title: 'Pulp fiction' },
            { title: 'Home alone' },
            { title: 'Austin Powers' }
          ]
        };
      }
    },
    'movie-filter': {
      template: `<div id="movie-filter">
                 <h2> Filter results</h2>
                </div>`
    }
  }
});
