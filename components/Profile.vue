<template>
  <v-card width="100%">
    <v-card-title class="secondary--text">
      Profile
    </v-card-title>
    <center>
      <v-avatar size="150">
        <v-img class="bordered-avatar" src="icon_trans.webp"></v-img>
      </v-avatar>
    </center>
    <v-container>
      <v-row v-for="item in maps" :key="item.key" justify="center">
        <v-col cols="2">{{ item.key }}</v-col>
        <v-col cols="2">{{ item.value }}</v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      maps: [
        {
          key: '生年月日',
          value: '1988年某月某日'
        },
        {
          key: '職種',
          value: 'フルスタックエンジニア'
        },
        {
          key: '好きなもの',
          value: '猫、新技術'
        }
      ]
    }
  }
}
</script>

<style>
.bordered-avatar {
  background: #f1f8e9;
  border: solid 2px;
  border-radius: 100px;
  border-color: var(--v-primary-base) !important;
}
.profile-text {
  font-size: 34px;
  line-height: 40px;
}
@media (max-width: 700px) {
  .profile-text {
    font-size: 24px;
  }
}
</style>
