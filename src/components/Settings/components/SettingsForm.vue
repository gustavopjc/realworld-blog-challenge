<template>
  <form>
    <fieldset>
        <fieldset class="form-group">
          <v-text-field type="text" v-model="userSettings.image"
            label="URL of profile picture" outlined></v-text-field>
        </fieldset>
        <fieldset class="form-group">
          <v-text-field type="text"
            v-model="userSettings.username" label="Your Name" outlined></v-text-field>
        </fieldset>
        <fieldset class="form-group">
          <v-textarea outlined v-model="userSettings.bio"
            rows="8" label="Short bio about you">
          </v-textarea>
        </fieldset>
        <fieldset class="form-group">
          <v-text-field type="text"
            v-model="userSettings.email" label="Email" outlined></v-text-field>
        </fieldset>
        <fieldset class="form-group">
          <v-text-field type="password"
          v-model="userSettings.password" label="Password" outlined></v-text-field>
        </fieldset>
        <button class="btn btn-lg btn-primary pull-xs-right">
          Update Settings
        </button>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { User } from '@/models';
import store from '@/store';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'settings-form',
  data() {
    return {
      userSettings: store.getters.getCurrentUser,
    };
  },
});
</script>

<style scoped>

</style>
