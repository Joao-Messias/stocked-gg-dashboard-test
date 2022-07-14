<template>
    <h1 class="title is-1 $blue" >
        stocked.gg
    </h1>
    <!-- <div class="logo">
        <img src="../assets/LogoStocked1.png" alt="Logo Stocked.gg">
    </div> -->
    <aside class="menu">
        <p class="menu-label">
            General
        </p>
        <ul class="menu-list">
            <li>
                <RouterLink class="is-active" to="/">
                    Dashboard
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/clips">
                    Clips
                </RouterLink>
            </li>
        </ul>
    </aside>
</template>
<!-- <template>
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
</template> -->

<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: "SideBar",
});

</script>

<style>
</style>