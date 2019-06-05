<template>
  <v-layout align-center justify-center row wrap>
    <v-flex xs12>
      <div class="title-text display-4 font-weight-thin">
        Profile
      </div>
    </v-flex>
    <transition name="fade">
      <v-flex v-show="loaded" xs12>
        <div class="profile">
          <center>
            <v-avatar size="200">
              <v-img
                class="icon"
                src="icon_trans.png"
                height="200px"
                width="200px"
              >
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
            <h1>@reireias</h1>
            <v-btn
              flat
              icon
              href="https://twitter.com/reirei_As"
              target="_blank"
            >
              <i class="fab fa-twitter" aria-hidden="true" />
            </v-btn>
            <v-btn flat icon href="https://github.com/reireias" target="_blank">
              <i class="fab fa-github" aria-hidden="true" />
            </v-btn>
            <v-btn flat icon href="mailto:reireias4@gmail.com">
              <i class="fas fa-envelope" aria-hidden="true" />
            </v-btn>
            <v-btn
              flat
              icon
              href="https://qiita.com/reireias"
              target="_blank"
              style="text-transform: none;"
            >
              Qiita
            </v-btn>
          </center>
        </div>
      </v-flex>
    </transition>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
h1 {
  font-weight: normal;
}
.profile h1 {
  font-weight: normal;
}
.profile p {
  margin-top: 5px;
  margin-bottom: 5px;
}
.v-avatar {
  margin: 5px;
}
.icon {
  background-color: white;
}
.profile .v-btn {
  margin: 2px;
}
.fab,
.fas {
  font-size: 24px;
}
</style>
