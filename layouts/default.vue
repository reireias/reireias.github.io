<template>
  <v-app ref="app" class="hide reireias">
    <v-app-bar class="d-md-none top-menu" flat>
      <v-container>
        <v-row justify="center">
          <v-col>
            <v-btn icon to="/" nuxt>
              <v-icon x-large>mdi-home</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn icon to="/profile" nuxt>
              <v-icon x-large>mdi-account</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn icon to="/skills" nuxt>
              <v-icon x-large>mdi-head-cog</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn icon to="jobs" nuxt>
              <v-icon x-large>mdi-account-clock</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn icon to="articles" nuxt>
              <v-icon x-large>mdi-pencil</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer app mobile-break-point="960" width="100">
      <v-list class="menu" dense>
        <v-list-item>
          <v-container>
            <v-row justify="center">
              <v-avatar tile size="75">
                <v-img src="/icon.png"></v-img>
              </v-avatar>
            </v-row>
          </v-container>
        </v-list-item>
        <v-list-item to="/" nuxt exact>
          <v-list-item-icon>
            <v-icon x-large>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/profile" nuxt exact>
          <v-list-item-icon>
            <v-icon x-large>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item to="/skills" nuxt exact>
          <v-list-item-icon>
            <v-icon x-large>mdi-head-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Skills</v-list-item-title>
        </v-list-item>
        <v-list-item to="/jobs" nuxt exact>
          <v-list-item-icon>
            <v-icon x-large>mdi-account-clock</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Job</v-list-item-title>
        </v-list-item>
        <v-list-item to="/articles" nuxt exact>
          <v-list-item-icon>
            <v-icon x-large>mdi-pencil</v-icon>
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
      title: 'reireias.dev',
    }
  },
  mounted() {
    this.$refs.app.$el.classList.remove('hide')
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style lang="scss">
.hide {
  display: none;
}

.page-enter,
.page-leave {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.menu {
  .v-list-item {
    display: block;

    .v-list-item__icon {
      display: grid;
      margin: 10px 0px 15px 0px;
    }
  }

  .v-list-item__title {
    text-align: center;
  }
}

.top-menu {
  .col {
    text-align: center;

    .v-btn--active {
      color: var(--v-primary-lighten2);
    }

    .v-btn--active::before {
      opacity: 0 !important;
    }
  }
}
</style>
