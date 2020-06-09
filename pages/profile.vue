<template>
  <v-container class="profile-container">
    <v-row justify="center">
      <div class="display-3">Profile</div>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <profile></profile>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card flat>
          <v-card-title class="bottom-border-accent">
            Accounts
          </v-card-title>
          <v-container>
            <v-row
              v-for="account in accounts"
              :key="account.name"
              justify="center"
            >
              <v-col>
                <div :class="`title left-border-${account.color}`">
                  <v-icon v-if="account.icon" v-text="account.icon"></v-icon>
                  {{ account.name }}
                </div>
              </v-col>
              <v-col>
                <div class="title">
                  <a
                    :href="account.url"
                    target="_blank"
                    v-text="account.value"
                  ></a>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Profile from '~/components/Profile'

export default {
  components: {
    Profile,
  },
  data() {
    return {
      accounts: [
        {
          name: 'GitHub',
          value: 'reireias',
          url: 'http://github.com/reireias',
          icon: 'mdi-github',
          color: 'accent',
        },
        {
          name: 'Twitter',
          value: 'reirei_As',
          url: 'http://twitter.com/reirei_As',
          icon: 'mdi-twitter',
          color: 'info-darken',
        },
        {
          name: 'Qiita',
          value: 'reireias',
          url: 'http://qiita.com/reireias',
          icon: 'mdi-web',
          color: 'info',
        },
        {
          name: 'Speaker Deck',
          value: 'reireias',
          url: 'https://speakerdeck.com/reireias',
          icon: 'mdi-web',
          color: 'accent',
        },
      ],
    }
  },
}
</script>
