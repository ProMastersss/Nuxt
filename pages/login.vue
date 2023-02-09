<template>
  <div>
    <v-sheet width="300" class="mx-auto">
      <div class="text-h2 mb-4">Login</div>
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
      <v-form fast-fail ref="form" @submit.prevent="login">
        <v-text-field
          v-model="userCredentions.email"
          label="Email"
          :rules="emailRules"
        ></v-text-field>

        <v-text-field
          v-model="userCredentions.password"
          label="Password"
          :rules="passwordRules"
        ></v-text-field>

        <v-btn type="submit" block class="mt-2 bg-green-accent-4">Login</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VForm } from "vuetify/components";
import { useIsAuth } from "~~/composables/states";

export default defineComponent({
  setup() {
    const userCredentions = reactive({ email: "", password: "" });
    const form = ref<VForm | null>(null);
    const error = ref<string | null>(null);

    const emailRules = [
      (value: string) => {
        if (value?.length > 3) return true;

        return "Email must be more 3 characters.";
      },
      (value: string) => {
        if (value?.includes("@") && value?.includes(".")) return true;

        return "Email must be contain '@', '.' characters.";
      },
    ];

    const passwordRules = [
      (value: string) => {
        if (/\w{3,}/.test(value)) return true;

        return "Password must be contains min 3 characters";
      },
    ];

    const router = useRouter();
    const login = async () => {
      try {
        console.log(await useFindId(1));
      } catch (e) {
        error.value = (<Error>e).message;
      }
      /* const validate = await form.value?.validate();
      if (validate?.valid) {
        try {
          const nuxtApp = useNuxtApp();
          const response = await nuxtApp.$client.request("login", {
            ...userCredentions,
          });

          if (response.token) {
            let isAuth = useIsAuth();
            isAuth.value = true;
            router.push("/");
          }
        } catch (e) {
          error.value = (<Error>e).message;
        }
      } */
    };

    return { userCredentions, emailRules, passwordRules, form, login, error };
  },
});
</script>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
