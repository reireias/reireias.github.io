<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <div class="header-text">Tech or Cat</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <profile></profile>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <account></account>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <certificate></certificate>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <skill></skill>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <timeline></timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Profile from '~/components/Profile'
import Account from '~/components/Account'
import Certificate from '~/components/Certificate'
import Skill from '~/components/Skill'
import Timeline from '~/components/Timeline'
export default {
  components: {
    Profile,
    Account,
    Certificate,
    Skill,
    Timeline
  }
}
</script>

<style>
.header-text {
  text-align: center;
  font-size: 56px;
  color: var(--v-primary-base);
  margin-bottom: 20px;
}
.title-text {
  font-size: 112px;
  line-height: 1;
  padding-left: 20px;
  color: var(--v-primary-base);
}
@media (max-width: 600px) {
  .title-text {
    font-size: 56px;
  }
}
</style>
