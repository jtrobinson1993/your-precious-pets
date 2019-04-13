<template>
  <div class="grooming site-wrapper">
    <Header/>
    <main class="site-content">
      <Banner img="https://i.imgur.com/HbXodMk.jpg"/>
      <CallToAction :heading="spaHeading" :description="spaDescription" />
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Banner,
    Footer
  }
})
export default class Grooming extends Vue {
  @Prop() ctaHeading!: string;
  @Prop() ctaDescription!: string;

  mounted() {

  }
}
</script>

<style scoped lang="scss">
@import "../styles/base-import";

:root {
  .site-content {
    font-size: ptToRem(14);
    line-height: 1.7;
  }
}
</style>
