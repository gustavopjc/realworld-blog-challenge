<template>
  <v-form ref="loginForm">
    <fieldset class="form-group">
      <v-text-field  v-model="credentials.email" outlined label="Email"
        :rules="[...requiredRule, ...emailRule]"></v-text-field>
    </fieldset>
    <fieldset class="form-group">
      <v-text-field  v-model="credentials.password" outlined label="Senha"
        :rules="[...requiredRule, ...passwordRule]"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"></v-text-field>
    </fieldset>
    <button @click="login()" class="btn btn-lg btn-primary pull-xs-right">
      Login
    </button>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Credentials } from '@/models';

export default defineComponent({
  name: 'login-form',
  data() {
    return {
      credentials: {} as Credentials,
      requiredRule: [(v : string) => !!v || 'Este campo é obrigatório.'],
      emailRule: [(v : string) => (this.validateEmail(v)) || 'O e-mail informado é inválido.'],
      passwordRule: [(v : string) => (v && v.length >= 8) || 'A senha deve conter o mínimo de 8 dígitos.'],
      showPassword: false,
    };
  },
  methods: {
    login() {
      if (this.$refs.loginForm?.validate()) {
        this.$store.dispatch('login', this.credentials);
      }
    },
    validateEmail(value: string) {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return (value && pattern.test(value));
    },
  },
});
</script>

<style scoped>

</style>
