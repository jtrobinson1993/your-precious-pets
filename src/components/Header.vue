<template>
  <header class="site-header">
    <h1 class="site-header__title"><router-link to="/" class="site-header__title-link">Your Precious Pets</router-link></h1>
    <nav class="site-header__nav">
      <ul class="site-header__list">
        <li class="site-header__list-item">
          <router-link to="/grooming" class="site-header__link">Grooming</router-link>
        </li>
        <li class="site-header__list-item">
          <router-link to="/boarding" class="site-header__link">Boarding & Daycare</router-link>
        </li>
        <li class="site-header__list-item">
          <router-link to="/contact" class="site-header__link site-header__link--last">Contact</router-link>
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
      z-index: 9;

      @include desktop() {
        display: flex;
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

      @include desktop() {
        min-width: 360px;
      }

      &-link {
        color: $dark-grey;
        text-decoration: none;
      }
    }

    &__nav {
      @include desktop() {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        width: 100%;
      }
    }

    &__list {
      margin: 0;
      list-style: none;
      padding: 0;
      text-align: center;

      @include desktop() {
        display: flex;
        width: 100%;
        justify-content: flex-end;
      }
    }

    &__list-item {
      @include desktop() {
        display: inline-block;
        margin-right: 30px;
      }
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

      @include desktop() {
        margin: 0;
        &:not(.site-header__link--last) {
          background: transparent;
          padding: 15px;
          box-shadow: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }

      &--last {
        @include desktop() {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
