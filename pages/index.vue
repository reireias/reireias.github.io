<template>
  <div>
    <div class="relative">
      <no-ssr>
        <!-- eslint-disable vue/attribute-hyphenation -->
        <vue-particles
          class="particles"
          color="#dedede"
          :particleOpacity="0.7"
          linesColor="#ffffff"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="4"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="false"
          :clickEffect="true"
          clickMode="repulse"
        />
        <!-- eslint-enable -->
      </no-ssr>
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
    <skill />
  </div>
</template>

<script>
import Skill from '~/components/Skill.vue'
export default {
  components: {
    Skill
  }
}
</script>

<style>
h1 {
  font-weight: normal;
}
.particles {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #fc00ff, #00dbde);
}
.relative {
  position: relative;
  height: 500px;
}
.profile {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
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
