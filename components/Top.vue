<template>
  <div class="header">
    <v-avatar size="200">
      <v-img
        class="bordered-avatar"
        src="icon_trans.png"
        height="200px"
        width="200px"
      >
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </v-layout>
        </template>
      </v-img>
    </v-avatar>
  </div>
</template>

<style>
.header {
  text-align: center;
}
.bordered-avatar {
  background: #f1f8e9;
  border: solid 2px;
  border-radius: 100px;
  border-color: var(--v-primary-base) !important;
}
</style>
