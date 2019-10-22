<template>
  <div class="header">
    <div class="header-text">Tech or Cat</div>
    <v-avatar size="200">
      <v-img class="bordered-avatar" src="icon_trans.webp"></v-img>
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
.bordered-avatar {
  background: #f1f8e9;
  border: solid 2px;
  border-radius: 100px;
  border-color: var(--v-primary-base) !important;
}
</style>
