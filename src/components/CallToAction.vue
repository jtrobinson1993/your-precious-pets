<template>
  <article class="standard-cta__con">
    <h1 class="standard-cta__heading">{{heading}}</h1>
    <div class="standard-cta__desc">{{description}}</div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CallToAction extends Vue {
  @Prop() private heading!: string;
  @Prop() private description!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base-import";
:root {
  .standard-cta {
    &__con {
        padding: 30px;
        text-align: center;
    }

    &__heading {
      font-size: ptToRem(24);
      color: $dark-grey;
      margin: 0 0 .67em;
      line-height: 1.2;
    }
    &__desc {
    }
  }
}
</style>
