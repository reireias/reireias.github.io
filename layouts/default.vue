<template>
  <v-app ref="app" class="hide">
    <v-navigation-drawer app :mini-variant="false" mini-variant-width="100">
      <v-list dense>
        <v-list-item>
          <v-container>
            <v-row justify="center">
              <v-avatar tile size="75">
                <v-img src="icon_trans.png"></v-img>
              </v-avatar>
            </v-row>
          </v-container>
        </v-list-item>
        <v-list-item to="/" nuxt exact>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/profile" nuxt exact>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item to="/skills" nuxt exact>
          <v-list-item-icon>
            <v-icon>mdi-head-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Skills</v-list-item-title>
        </v-list-item>
        <v-list-item to="/jobs" nuxt exact>
          <v-list-item-icon>
            <v-icon>mdi-account-clock</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Job</v-list-item-title>
        </v-list-item>
        <v-list-item to="/articles" nuxt exact>
          <v-list-item-icon>
            <v-icon>mdi-pencil</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Article</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Tech or Cat'
    }
  },
  mounted() {
    this.$refs.app.$el.classList.remove('hide')
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss">
.hide {
  display: none;
}

/* TODO: overwrite font */
/*
.v-application {
  font-family: 'Roboto Condensed', Robot, sans-serif;
}
*/

.theme--dark {
  &.v-application,
  &.v-navigation-drawer {
    background: #33333d;
  }

  &.v-card {
    background: #373740;
  }
}

.page-enter,
.page-leave {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
</style>
