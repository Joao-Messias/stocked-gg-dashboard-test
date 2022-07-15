<template>
  <div class="clips">
    <h1>Clips page</h1>
    <p>
      Insira aqui o link do clip a ser editado.
    </p>
    <div>
      <ContentClips />
    </div>
  </div>
</template>

<script>

import { defineComponent } from "vue";
import ContentClips from "@/components/ContentClips.vue";
export default defineComponent({
  name: "ClipsView",
  components: {
    ContentClips
  }
});
</script>
