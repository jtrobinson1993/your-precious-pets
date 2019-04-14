<template>
  <div class="site-banner__con">
    <div class="site-banner__img" v-bind:style="{ backgroundImage: 'url(' + img + ')' }"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private img!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base-import";
:root {
  .site-banner {
    &__con {
    }
    &__img {
      width: 100%;
      height: 50vh;
      min-height: 420px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: .5;
      transition: opacity .6s ease;
      @include desktop() {
        opacity: .75;
      }

      &:after {
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        background: linear-gradient(
          to bottom,
          rgba(#fff, 0.9),
          rgba(#fff, 0.7)
        );
      }
    }
  }
}
</style>
