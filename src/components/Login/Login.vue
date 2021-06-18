<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <LoginHeader/>
          </div>
          <div class="col-md-6 offset-md-3 col-xs-12">
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import LoginForm from '@/components/Login/components/LoginForm.vue';
import LoginHeader from '@/components/Login/components/LoginHeader.vue';

export default defineComponent({
  name: 'register',
  components: {
    LoginForm,
    LoginHeader,
  },
});
</script>

<style scoped>

</style>
