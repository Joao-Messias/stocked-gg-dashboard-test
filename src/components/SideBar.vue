<template>
    <header>
        <h1>
            Stocked.gg
        </h1>
        <h2>
            A Stocked.gg é uma plataforma criada para ajudar pequenos e médios criadores de conteúdo no universo de
            livestreaming, explorando suas melhores qualidades e fazendo descobertas incríveis através de nossas
            ferramentas.
        </h2>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <RouterLink class="navbar-item" to="/">
                        Dashboard
                    </RouterLink>
                    <RouterLink class="navbar-item" to="/clips">
                        Clips
                    </RouterLink>
                </div>
            </div>

        </nav>
    </header>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: "SideBar",
});

</script>

<style scoped>
header {
    padding: 1rem;
    background: darkgray;
    width: 100%;
    height: 100vh;
}
</style>