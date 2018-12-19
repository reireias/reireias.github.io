<template>
  <div>
    <div class="relative">
      <!-- eslint-disable vue/attribute-hyphenation -->
      <vue-particles
        class="particles"
        color="#dedede"
        particleOpacity="0.7"
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
      <div class="absolute">
        <center>
          <v-avatar size="200">
            <v-img
              class="icon"
              src="icon_trans.png"
              height="200px"
              width="200px"
            />
          </v-avatar>
          <p><i class="fab fa-twitter" aria-hidden="true" />@reirei_As</p>
          <p><i class="fab fa-github" />reireias</p>
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
.particles {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #fc00ff, #00dbde);
}
.relative {
  position: relative;
  height: 500px;
}
.absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit- transform: translateY(-50%) translateX(-50%);
}
.icon {
  background-color: white;
}
</style>
