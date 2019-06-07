<template>
  <v-container grid-list-md>
    <v-layout
      v-for="item in maps"
      :key="item.key"
      align-center
      justify-center
      row
      wrap
    >
      <v-flex md4>
        <div class="profile-text font-weight-thin">{{ item.key }}：</div>
      </v-flex>
      <v-flex xs8 sm7 md6>
        <div class="profile-text font-weight-thin">{{ item.value }}</div>
      </v-flex>
    </v-layout>
  </v-container>
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
.profile-text {
  font-size: 34px;
  line-height: 40px;
}
</style>
