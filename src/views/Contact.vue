<template>
  <div class="contact site-wrapper">
    <Header/>
    <main class="site-content">
      <Banner img="https://i.imgur.com/HbXodMk.jpg"/>
      <div class="contact__address-con">
        <h1 class="contact__address-heading">Address &amp; Contact Information</h1>
        <address class="contact__address">
          <ul>
            <li>1600 Normandy Ct</li>
            <li>Suite 100</li>
            <li>Lincoln, NE</li>
            <li>68512</li>
          </ul>
          <ul>
            <li>
              <a href="tel:4024201622">402.420.1622</a>
            </li>
            <li>
              <a href="mailto:preciouspetsne@gmail.com">preciouspetsne@gmail.com</a>
            </li>
            <li>
              <a href="https://www.facebook.com/yourpreciouspets/">facebook</a>
            </li>
          </ul>
        </address>
        <h2 class="hours__heading">Hours of Operation</h2>
        <ul class="hours__list">
          <li>
            <strong>Mon - Fri</strong> 7:30 am - 6:00 pm
          </li>
          <li>
            <strong>Sat</strong> 8:30 am - 5:00 pm
          </li>
        </ul>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.914977712639!2d-96.6990907!3d40.7569934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7f07fb0e7afb9ee!2sYour+Precious+Pets!5e0!3m2!1sen!2sus!4v1555382742312!5m2!1sen!2sus"
        width="400"
        height="300"
        frameborder="0"
        style="border:0"
        allowfullscreen
        class="contact__map"
        title="Map displaying the location of Your Precious Pets"
      ></iframe>
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
export default class Contact extends Vue {}
</script>

<style scoped lang="scss">
@import "../styles/base-import";

:root {
  .site-content {
    font-size: ptToRem(14);
    line-height: 1.7;
  }

  .contact {
    &__map {
      width: 100%;
      height: 360px;
      background-color: $light-grey;
      @include desktop() {
        height: 460px;
      }
    }

    &__address-con {
      max-width: $tablet-width;
      width: 100%;
      margin: 30px auto;
      padding: 0 30px;

      @include desktop() {
        margin: 60px auto;
        padding: 0 60px;
      }
    }

    &__address-heading {
      font-size: ptToRem(24);
      color: $dark-grey;
      margin: 0 0 0.67em;
      line-height: 1.2;
      font-family: $body-font;
      @include desktop() {
        font-size: ptToRem(28);
      }
    }

    &__address {
      font-style: normal;
      line-height: 1.4;
      @include desktop() {
        display: flex;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        @include desktop() {
          flex: 1 1 50%;
        }

        &:first-child {
          @include desktop() {
            margin-right: 60px;
          }
        }
      }
    }
  }

  .hours {
    &__heading {
      font-size: ptToRem(18);
      font-weight: bold;
      font-family: $body-font;
      margin: 30px 0 0.67em;
      line-height: 1.4;

      @include desktop() {
        font-size: ptToRem(22);
      }
    }

    &__list {
      padding: 0;
      margin: 0;
      list-style: none;
      line-height: 1.4;

      @include desktop() {
        display: flex;
      }

      li {
        @include desktop() {
          flex: 1 1 50%;

          &:first-child {
            margin-right: 60px;
          }
        }
      }
    }
  }
}
</style>
