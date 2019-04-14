<template>
  <div class="boarding site-wrapper">
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
export default class Boarding extends Vue {

  get ctaHeadingOne() {
    return `Boarding`
  }

  get ctaDescriptionOne() {
    return `
    <p>Being an open-kennel shop offers a unique and low-stress environment for our boarding and daycare clients.</p>
    <p>Your pup is welcome to hang out all day for just 11.99, with no appointment necessary for daycare. They’ll have access to fresh water and a fenced backyard as well as all of the friends they can dream of! You’re welcome to bring food or we can provide it if you want them to have a snack. We have beds and hidey-holes throughout the shop, so when they get tired it’s easy to find a comfortable spot to take a nap.</p>
    <p>Our boarding dogs get a similar experience. Boarding starts at 20.99 for your first dog and is 10 dollars for each additional. Families can be bundled together. We do suggest calling a few weeks ahead to schedule if possible, especially around holidays as we have limited space and can only board a handful of pups.</p>
    <p>Overnight, our boarders aren’t supervised and therefore must be in kennels. We’re back bright and early in the morning, however, and then they’re right back out to play the next day away!</p>
    `
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
