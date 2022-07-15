<template>
  <section class="hero is-primary is-small">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-primary is-light">
                    <strong>Login</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <p class="title">
        Bem-vindo, Dinomechanics!
      </p>
    </div>
  </section>
</template>


<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeroPrimary",
});
</script>