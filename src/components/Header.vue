<template>
  <header class="site-header">
    <h1 class="site-header__title">Your Precious Pets</h1>
    <nav class="site-header__nav">
      <ul class="site-header__list">
        <li class="site-header__list-item">
          <router-link to="/" class="site-header__link">Home</router-link>
        </li>
        <li class="site-header__list-item">
          <router-link to="/pricing" class="site-header__link">Pricing</router-link>
        </li>
        <li class="site-header__list-item">
          <router-link to="/contact" class="site-header__link">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base-import";

:root {
  .site-header {
    & {
      max-width: $desktop-width;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      @include desktop() {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &__title {
      margin: 0;
      text-align: center;
      padding: 30px;
      font-size: ptToRem(32);
      line-height: 1;
      color: $dark-grey;
    }

    &__nav {
    }

    &__list {
      margin: 0;
      list-style: none;
      padding: 0;
      text-align: center;
    }

    &__list-item {
    }

    &__link {
      color: $dark-grey;
      padding: 15px 45px;
      display: inline-block;
      background: $white;
      margin: 15px 0;
      min-width: 75px;
      border-radius: 30px;
      box-shadow: 1px 1px 5px rgba($dark-grey, 0.15);
      text-decoration: none;
      font-size: ptToRem(14);
    }
  }
}
</style>
