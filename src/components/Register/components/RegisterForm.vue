<template>
  <v-form ref="registerForm">
    <fieldset class="form-group">
      <v-text-field  v-model="credentials.username" outlined label="Username"
          :rules="requiredRule"></v-text-field>
    </fieldset>

    <fieldset class="form-group">
      <v-text-field  v-model="credentials.email" outlined label="Email"
        :rules="[...requiredRule, ...emailRule]"></v-text-field>
    </fieldset>
    <fieldset class="form-group">
      <v-text-field  v-model="credentials.password" outlined label="Password"
        :rules="requiredRule"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"></v-text-field>
    </fieldset>
    <v-btn large class="pull-xs-right" color="#5cb85c" dark @click="register()">
      Registrar
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Credentials } from '@/models';

export default defineComponent({
  name: 'register-form',
  data() {
    return {
      credentials: {} as Credentials,
      requiredRule: [(v : string) => !!v || 'Este campo é obrigatório.'],
      emailRule: [(v : string) => (this.validateEmail(v)) || 'O e-mail informado é inválido.'],
      showPassword: false,
    };
  },
  methods: {
    register() {
      if (this.$refs.registerForm?.validate()) {
        this.$store.dispatch('register', this.credentials);
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
