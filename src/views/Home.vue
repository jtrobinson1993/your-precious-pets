<template>
  <div class="home site-wrapper">
    <Header/>
    <main class="site-content">
      <Banner img="https://i.imgur.com/HbXodMk.jpg"/>
      <CallToAction :heading="ctaHeadingOne" :description="ctaDescriptionOne"/>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import CallToAction from "@/components/CallToAction.vue";

@Component({
  components: {
    Header,
    Banner,
    Footer,
    CallToAction
  }
})
export default class Home extends Vue {
  get ctaHeadingOne() {
    return `About Us`;
  }

  get ctaDescriptionOne() {
    return `
    <p>Your Precious Pets has been a staple in Lincoln’s southwest side for over 10 years now. We welcome clients from all walks of life: your puppies and your old pups, your hard working ranch dogs and your ever loyal companions at home. Everyone is welcome to our unique open-kennel shop and we’ll work with you to meet all of your unique needs.</p>
    <p>As an open-kennel shop, it’s important to us to know the personalities of our clients. We’ll ease new pups into the setting and do have areas that we can separate dogs into as necessary. With our attentive staff, your fur-kids are always supervised so everyone can have a safe and positive grooming experience.</p>
    <p>For our daycare and boarding friends, it’s a similar story. Everyone gets to be out and about to play their heart’s content, and by the time we turn our lights out and tuck your pups into their sleeping quarters, they’re ready for a good night’s sleep.</p>
    <p>Our clients are important to us and dogs are our passion! Swing by and say hello!</p>
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
