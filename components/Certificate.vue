<template>
  <v-card>
    <v-card-title class="secondary--text">
      Certificate
    </v-card-title>
    <v-container>
      <v-row
        v-for="certificate in certificates"
        :key="certificate"
        justify="center"
      >
        <v-col cols="4">{{ certificate }}</v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      certificates: [
        'IPA 応用情報技術者試験',
        'IPA データベーススペシャリスト試験',
        'IPA セキュリティスペシャリスト試験',
        'AWS 認定ソリューションアーキテクト – アソシエイト'
      ]
    }
  }
}
</script>
