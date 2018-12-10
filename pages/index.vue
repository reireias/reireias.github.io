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
      <v-flex v-for="skill in category.skills" :key="skill.name" xs2>
        <v-card>
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
              name: 'A'
            },
            {
              name: 'B'
            }
          ]
        },
        {
          name: 'PaaS',
          skills: [
            {
              name: 'C'
            },
            {
              name: 'D'
            }
          ]
        }
      ]
    }
  }
}
</script>
