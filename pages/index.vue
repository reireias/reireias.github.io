<template>
  <div>
    <div class="relative">
      <div class="profile">
        <center>
          <v-avatar size="200">
            <v-img
              class="icon"
              src="icon_trans.png"
              height="200px"
              width="200px"
            />
          </v-avatar>
          <h1>@reireias</h1>
          <v-btn flat icon href="https://twitter.com/reirei_As" target="_blank">
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
    </div>
    <hexagon-skill />
  </div>
</template>

<script>
import HexagonSkill from '~/components/HexagonSkill.vue'
export default {
  components: {
    HexagonSkill
  }
}
</script>

<style>
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
