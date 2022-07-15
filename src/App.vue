<template>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
  <div class="columns is-gapless is-multiline">
    <div class="column is-one-fifth">
      <SideBar/>
    </div>
    <div class="column is-four-fifth">
      <HeroPrimary/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";
import HeroPrimary from "./components/HeroPrimary.vue";
export default defineComponent({
  name: "App",
  components: {
    SideBar,
    HeroPrimary,
}
});

</script>
<style>
</style>
