<template>
  <div class="header">
    <v-avatar size="200">
      <v-img class="icon" src="icon_trans.png" height="200px" width="200px">
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
.icon {
  background-color: white;
}
</style>
