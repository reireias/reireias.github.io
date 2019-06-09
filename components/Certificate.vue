<template>
  <v-container grid-list-md>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12>
        <div class="certificate-text">
          <ul>
            <li v-for="certificate in certificates" :key="certificate">
              {{ certificate }}
            </li>
          </ul>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
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

<style>
.certificate-text {
  font-size: 34px;
  line-height: 40px;
}
@media (max-width: 600px) {
  .certificate-text {
    font-size: 24px;
  }
}
</style>
