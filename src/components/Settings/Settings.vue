<template>
  <div>
    <div class="settings-page">
      <div class="container page">
        <div class="row">

          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Your Settings</h1>
            <SettingsForm/>
          </div>
          <hr>
          <div class="col-md-6 offset-md-3 col-xs-12">
            <LogoutButton/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import SettingsForm from '@/components/Settings/components/SettingsForm.vue';
import LogoutButton from '@/components/Settings/components/LogoutButton.vue';

export default defineComponent({
  name: 'settings',
  components: {
    SettingsForm,
    LogoutButton,
  },
});
</script>

<style scoped>

</style>
