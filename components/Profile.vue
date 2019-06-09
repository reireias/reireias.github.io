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
      <v-flex xs12 sm4 md4>
        <div class="profile-text">{{ item.key }}：</div>
      </v-flex>
      <v-flex xs11 offset-xs1 sm7 md6>
        <div class="profile-text">{{ item.value }}</div>
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
@media (max-width: 700px) {
  .profile-text {
    font-size: 24px;
  }
}
</style>
