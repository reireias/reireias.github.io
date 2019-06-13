<template>
  <div class="header">
    <div class="header-text">Tech or Cat</div>
    <v-avatar size="200">
      <picture class="top-picture">
        <source type="image/webp" data-srcset="icon_trans.webp" />
        <img
          class="bordered-avatar lazyload"
          data-src="icon_trans.png"
          alt="icon"
        />
      </picture>
    </v-avatar>
  </div>
</template>

<script>
import 'lazysizes'
export default {}
</script>

<style>
.header {
  text-align: center;
}
.header-text {
  font-size: 112px;
  color: var(--v-primary-base);
  margin-bottom: 20px;
}
@media (max-width: 600px) {
  .header-text {
    font-size: 56px;
  }
}
.top-picture {
  width: 200px;
  height: 200px;
}
.bordered-avatar {
  background: #f1f8e9;
  border: solid 2px;
  border-radius: 100px;
  border-color: var(--v-primary-base) !important;
}
.lazyload,
.lazyloading {
  opacity: 0;
}
.lazyloaded {
  opacity: 1;
  transition: opacity 300ms;
}
</style>
