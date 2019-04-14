<template>
  <div class="grooming site-wrapper">
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
export default class Grooming extends Vue {

  get ctaHeadingOne() {
    return `Grooming`
  }

  get ctaDescriptionOne() {
    return `
    <p>At Your Precious Pets, grooming is our main focus. Our grooming appointments can be made Monday-Saturday and generally are morning times. We like to get your pups in early, give them some time to settle in and play a little, and then make sure we have enough time to groom them safely and correctly. When finished, you’re welcome to leave them for a little while if you like, or they can be picked up right away.</p>
    <p>Pricing varies just as the shapes, sizes, and coat types of our many dog friends vary. Give us a call for an estimate, or bring your pup by or show us a picture of them to get a better price. We offer a variety of grooming options from simple toe nail trims up to fully stylized grooms. If you aren’t sure what works best for you, we’ll work with you to figure out a good length and schedule.</p>
    <p>Feeling creative? We can also paint nails or dye fur for a little extra. Our products are vegetable based and dog safe.</p>
    <p>Additionally, we have a couple of spa options. A blueberry facial will freshen up tear stains and a sugar-paw scrub will help smooth out those rough paw pads. We can also brush teeth and give a spritz of cologne at the end of the groom for an extra special finish.</p>
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
