<template>
  <div class="header">
    <v-avatar size="200">
      <picture class="top-picture">
        <source type="image/webp" srcset="icon_trans.webp" />
        <img class="bordered-avatar" src="icon_trans.png" alt="icon" />
      </picture>
    </v-avatar>
  </div>
</template>

<style>
.header {
  text-align: center;
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
</style>
