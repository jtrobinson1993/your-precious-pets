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
:root {
  .site-banner {
    &__con {
    }
    &__img {
      width: 100%;
      height: 66.67vh;
      min-height: 420px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      &:after {
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        background: linear-gradient(
          to bottom,
          rgba(#fff, 0.95),
          rgba(#fff, 0.8)
        );
      }
    }
  }
}
</style>
