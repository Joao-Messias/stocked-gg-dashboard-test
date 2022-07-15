<template>
    <h1 class="title is-1">
        stocked.gg
    </h1>
    <aside class="menu block">
        <ul class="menu-list">
            <li>
                <RouterLink class="menu-item" to="/"><span class="text">Dashboard</span></RouterLink>
            </li>
            <li>
                <RouterLink class="menu-item" to="/clips"><span class="icon"><i class="fas fa-search"></i></span>Clips
                </RouterLink>
            </li>
        </ul>
    </aside>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: "SideBar",
});

</script>

<style >
    .block {
        display: block;
    }
    .menu-item {
        display: block;
    }
    .menu-item:hover {
        background-color: #374151;
    }
    .menu-item:focus {
        background-color: #EAB308;
    }
    li {
        border: 0 solid #374151;
    }
    
</style>