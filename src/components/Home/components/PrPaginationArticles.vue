<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only" @click="previousPage()">Previous</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages" :key="page">
        <a class="page-link" @click="selectPage(page)">
          {{ page }}
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="nextPage()" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'pr-pagination-articles',
  computed: {
    pages() {
      return store.state.ArticleListModule.totalPages;
    },
  },
  methods: {
    previousPage() {
      this.$store.dispatch('articleListPreviousPage');
    },
    nextPage() {
      this.$store.dispatch('articleListNextPage');
    },
    selectPage(page: number) {
      this.$store.dispatch('articleListSelectPage', page);
    },
  },
});
</script>

<style scoped>
#pagination ul {
  padding:0px;
  margin:0px;
  background-color:#EDEDED;
  list-style:none;
}
#pagination ul li {
  display: inline;
  }

#pagination ul li a {
    padding: 2px 10px;
    display: inline-block;

    /* visual do link */
    background-color:#EDEDED;
    color: #333;
    text-decoration: none;
    border-bottom:3px solid #EDEDED;
}

#pagination ul li a:hover {
    background-color:#D6D6D6;
    color: #6D6D6D;
    border-bottom:3px solid #EA0000;
}
</style>
