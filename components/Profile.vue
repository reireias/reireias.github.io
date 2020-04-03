<template>
  <v-card class="profile-card" flat>
    <v-card-title class="bottom-border-primary">
      Profile
    </v-card-title>
    <v-container>
      <v-row
        v-for="(attribute, index) in attributes"
        :key="attribute.name"
        justify="center"
      >
        <v-col cols="4">
          <div
            :class="`left-border-${colors[index % colors.length]}`"
            v-text="attribute.name"
          ></div>
        </v-col>
        <v-col cols="8">
          <div v-text="attribute.value"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      colors: ['primary', 'primary-darken', 'secondary'],
      attributes: [
        {
          name: '生年月日',
          value: '1988/xx/xx',
        },
        {
          name: '職業',
          value: 'SRE 兼 Webアプリケーションエンジニア',
        },
        {
          name: '好きな動物',
          value: '猫科',
        },
        {
          name: '好きなOS',
          value: 'Linux',
        },
        {
          name: '趣味',
          value: '新技術で遊ぶこと',
        },
        {
          name: 'その他',
          value: 'Japan MENSA会員',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.profile-card .col {
  align-self: center;
  font-size: 20px;
}
</style>
