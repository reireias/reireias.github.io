<template>
  <div>
    <top style="margin: 100px;"></top>

    <div class="title-text display-4 font-weight-thin">
      Profile
    </div>
    <profile></profile>

    <div class="title-text display-4 font-weight-thin">
      Account
    </div>
    <account></account>

    <div class="title-text display-4 font-weight-thin">
      Certificate
    </div>
    <certificate></certificate>

    <div class="title-text display-4 font-weight-thin">
      Skills
    </div>
    <hexagon-skill></hexagon-skill>

    <div class="title-text display-4 font-weight-thin">
      Career
    </div>
    <timeline></timeline>
  </div>
</template>

<script>
import Top from '~/components/Top'
import Profile from '~/components/Profile'
import Account from '~/components/Account'
import Certificate from '~/components/Certificate'
import HexagonSkill from '~/components/HexagonSkill'
import Timeline from '~/components/Timeline'
export default {
  components: {
    Top,
    Profile,
    Account,
    Certificate,
    HexagonSkill,
    Timeline
  }
}
</script>

<style>
.title-text {
  padding-left: 20px;
  color: var(--v-primary-base);
}
</style>
