<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <RegisterHeader/>
          </div>
          <div class="col-md-6 offset-md-3 col-xs-12">
            <RegisterForm/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import RegisterForm from '@/components/Register/components/RegisterForm.vue';
import RegisterHeader from '@/components/Register/components/RegisterHeader.vue';

export default defineComponent({
  name: 'register',
  components: {
    RegisterForm,
    RegisterHeader,
  },
});
</script>

<style scoped>

</style>
