<template>
  <footer class="site-footer__con">
    <small>&copy; {{currentYear}} Your Precious Pets</small>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {

    get currentYear() {
      return new Date().getFullYear().toString();
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base-import";
:root {
  .site-footer {
    &__con {
      padding: 30px;
      text-align: center;
      font-size: ptToRem(14);
    }
  }
}
</style>
