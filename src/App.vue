<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar/>
    </div>
  </main>
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
