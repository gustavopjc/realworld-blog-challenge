<template>
  <v-form ref="settingsForm">
    <div class="form-group">
      <v-text-field type="text" v-model="userData.image"
        label="URL da foto de prfil" outlined></v-text-field>
    </div>
    <div class="form-group">
      <v-text-field type="text"
        v-model="userData.username" label="Nome de usuario" outlined></v-text-field>
    </div>
    <div class="form-group">
      <v-textarea outlined v-model="userData.bio"
        rows="8" label="Short bio about you">
      </v-textarea>
    </div>
    <div class="form-group">
      <v-text-field type="text" :rules="[...requiredRule, ...emailRule]"
        v-model="userData.email" label="Email" outlined></v-text-field>
    </div>
    <div class="form-group">
      <v-text-field  v-model="userData.password" outlined label="Senha"
        hint="Deixe em branco caso não queira mudar"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"></v-text-field>
    </div>
    <v-btn large class="pull-xs-right" color="#5cb85c" dark @click="updateUser()">
      Salvar dados
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import UserService from '@/services/UserService';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'settings-form',
  data() {
    return {
      userData: this.$store.getters.getCurrentUser,
      requiredRule: [(v : string) => !!v || 'Este campo é obrigatório.'],
      emailRule: [(v : string) => (this.validateEmail(v)) || 'O e-mail informado é inválido.'],
      showPassword: false,
      userService: new UserService(),
    };
  },
  methods: {
    validateEmail(value: string) {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return (value && pattern.test(value));
    },
    async updateUser() {
      if (this.$refs.settingsForm?.validate()) {
        await this.userService.save(this.userData).then((response) => {
          this.$store.dispatch('updateCurrentUser', response.user);
        });
      }
    },
  },
});
</script>

<style scoped>

</style>
