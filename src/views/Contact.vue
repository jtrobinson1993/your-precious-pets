<template>
  <div class="home">
    <Header/>
    <main class="site-content">
      <Banner img="https://i.imgur.com/HbXodMk.jpg"/>
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
export default class Contact extends Vue {
  @Prop() ctaHeading!: string;
  @Prop() ctaDescription!: string;

  mounted() {
    this.ctaHeading = "Lincoln's Premier Dog Grooming Salon";
    this.ctaDescription = `
    Our salon has four qualified professional groomers who will deliver top-quality haircuts and superb customer service.
    Locally owned and operated we have been in business the last 5 years and have established ourselves in the community.
    We invite you and your pet to take a tour of our facility and learn more about us.
    `;
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
