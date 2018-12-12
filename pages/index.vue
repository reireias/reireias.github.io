<template>
  <v-container grid-list-md>
    <v-layout
      v-for="category in categories"
      :key="category.name"
      row
      wrap
    >
      <v-flex xs12>
        <v-card>
          <v-card-text>
            {{ category.name }}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        v-for="skill in category.skills"
        :key="skill.name"
        :xs2="skill.small"
        :xs12="!skill.small"
        class="skill"
      >
        <v-card @click="click(skill)">
          <v-card-text>
            {{ skill.name }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: 'Language',
          skills: [
            {
              name: 'A',
              small: true
            },
            {
              name: 'B',
              small: true
            }
          ]
        },
        {
          name: 'PaaS',
          skills: [
            {
              name: 'C',
              small: true
            },
            {
              name: 'D',
              small: true
            }
          ]
        }
      ]
    }
  },
  methods: {
    click(target) {
      if (target.small) {
        target.small = false
      } else {
        target.small = true
      }
    }
  }
}
</script>

<style>
.skill {
  transition: 1s;
}
</style>
