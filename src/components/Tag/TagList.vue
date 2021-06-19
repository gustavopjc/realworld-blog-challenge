<template>
  <div>
    <div class="tag-list">
      <TagItem v-for="(tag, index) in tags" :key="index" :tag="tag"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import TagItem from './TagItem.vue';

export default defineComponent({
  components: { TagItem },
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>

</style>
