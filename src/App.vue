<template>
  <div id="app" class="app-container">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700|Waiting+for+the+Sunrise");
@import "./styles/base-import";

html,
body {
  padding: 0;
  margin: 0;
}

body {
  font-family: "Quicksand", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 100%;
}

h1,
h2,
h3 {
  font-family: "Waiting for the Sunrise", "Quicksand", Helvetica, Arial,
    sans-serif;
}

.site-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.site-content {
  flex: 1 0 auto;
}

.site-button {
  & {
    display: inline-block;
    padding: 15px 30px;
    line-height: 1.4;
    color: $white;
    background: $grey;
    margin: 30px 0 0;
    text-decoration: none;
    border-radius: 100px;
  }

  &__primary {
    background: $primary;
  }
}
</style>
