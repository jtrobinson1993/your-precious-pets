<template>
  <article class="standard-cta__con">
    <div class="standard-cta__inner">
      <h1 class="standard-cta__heading" v-if="heading">{{heading}}</h1>
      <div class="standard-cta__desc" v-html="description"></div>
      <router-link
        v-if="link"
        :to="link"
        class="standard-cta__button site-button site-button__primary"
      >{{buttonText}}</router-link>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CallToAction extends Vue {
  @Prop() private heading!: string;
  @Prop() private description!: string;
  @Prop() private link!: string;
  @Prop() private buttonText!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base-import";
:root {
  .standard-cta {
    &__con {
      &:not(.standard-cta__alternate):last-child {
        .standard-cta__inner {
          padding-bottom: 0;
        }
      }
    }

    &__inner {
      max-width: $tablet-width;
      margin: 0 auto;
      padding: 30px;
      text-align: center;
      @include tablet() {
        padding: 60px;
      }
    }

    &__heading {
      font-size: ptToRem(24);
      color: $dark-grey;
      margin: 0 0 0.67em;
      line-height: 1.2;
      @include desktop() {
        font-size: ptToRem(28);
      }
    }
    &__desc {
    }
    &__alternate {
      background-color: $light-grey;
    }
  }
}
</style>
