<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
  <div class="columns is-gapless is-multiline">
    <div class="column is-one-fifth">
      <SideBar />
    </div>
    <div class="column is-four-fifth">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";
export default defineComponent({
  name: "App",
  components: {
    SideBar,
  }
});

</script>
<style>
</style>
