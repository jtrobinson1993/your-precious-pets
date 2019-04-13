<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700|Waiting+for+the+Sunrise');
@import "./styles/base-import";

html, body {
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
  font-family: "Waiting for the Sunrise", "Quicksand", Helvetica, Arial, sans-serif;
}
</style>
