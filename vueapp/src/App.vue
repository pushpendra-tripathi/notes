<template>
  <div class="container-fluid p-0 m-0 position-relative">
    <loading
      :active="isLoading"
      :can-cancel="false"
      :is-full-page="true"
    ></loading>
    <app-error :show="appError"></app-error>
    <router-view class="p-0 m-0 w-100" />
  </div>
</template>

<script>
// Import overlay loader
import Loading from "vue3-loading-overlay";
// Import stylesheet

import { mapMutations, mapGetters } from "vuex";
import AppError from "./components/AppError.vue";
export default {
  name: "App",
  components: { Loading, AppError },

  data() {
    return {
      django_data: null,
    };
  },

  computed: {
    ...mapGetters(["isLoading", "appError"]),
  },

  mounted() {
    console.log("app.vue mounted");
    this.django_data = document.getElementById("django_data").text;

    console.log("django data =", this.django_data);
    this.loadDjangoData(this.django_data);
  },

  methods: {
    ...mapMutations(["loadDjangoData"]),
  },
};
</script>

<style>
@import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
</style>

