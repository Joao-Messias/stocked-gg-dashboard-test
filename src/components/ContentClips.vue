<template>
    <div class="columns">
        <div class="column">
            <input class="input is-link is-rounded" type="text" placeholder="Insira aqui o link">
        </div>
        <div class="column">
            <button class="button is-link is-rounded">
                <span class="icon">
                    <i class="fas fa-search"></i>
                </span>
                <span>
                    Buscar
                </span>
            </button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: "ContentClips",
});
</script>