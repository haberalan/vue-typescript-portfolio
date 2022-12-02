<template>
  <v-layout full-height>
    <v-container class="mt-16 container">
      <h2 class="text-h3 text-center">My projects</h2>
      <v-row class="mt-16">
        <v-col cols="12" v-for="project in projects" :key="project.name" class="mb-16 v-col-sm-6 v-col-lg-4 d-flex justify-center">
          <v-sheet max-width="400" class="d-flex flex-column align-center">
            <h3 class="text-h4 font-weight-medium text-center">{{ project.name }}</h3>
            <p class="text-h6 font-weight-regular text-grey-darken-2 text-center mt-2 desc-height">{{ project.desc }}</p>
            <v-list class="d-flex mt-8">
              <v-list-item v-for="tech in project.technologies" :key="tech">
                <v-icon size="x-large" end>{{ `mdi-${tech}` }}</v-icon>
              </v-list-item>
            </v-list>
            <div class="mt-2">
              <v-btn :href="project.github" class="mx-3" variant="text">GITHUB</v-btn>
              <v-btn :href="project.demo" class="mx-3" variant="text">DEMO</v-btn>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script setup lang="ts">
import { ProjectType } from '../types/Project';

const projects: ProjectType[] = [
  {
    name: 'Clothes shop',
    technologies: ['react', 'language-typescript', 'nodejs'],
    desc: 'E-commerce app based on the MERN stack, written in TypeScript with additional use of the Redux Toolkit.',
    github: 'https://github.com/haberalan/react-typescript-clothes-shop',
    demo: 'https://haber-clothes-shop.netlify.app/',
  },
  {
    name: 'Weather Forecast',
    technologies: ['vuejs', 'language-typescript', 'nodejs'],
    desc: 'A simple Weather Forecast app written in Vue with TypeScript additionally using the Vuetify UI library.',
    github: 'https://github.com/haberalan/vue-typescript-weather-forecast',
    demo: 'https://haber-weather-forecast.netlify.app/',
  },
  {
    name: 'Tic Tac Toe',
    technologies: ['language-javascript'],
    desc: 'Simple pure JavaScript Tic Tac Toe game with usage of minimax algorithm.',
    github: 'https://github.com/haberalan/javascript-tic-tac-toe',
    demo: 'https://haberalan.github.io/tic-tac-toe/',
  },
  {
    name: 'Portfolio',
    technologies: ['vuejs', 'language-typescript'],
    desc: 'Portfolio website (you are right here) written in Vue with TypeScript additionally using the Vuetify UI library.',
    github: 'https://github.com/haberalan/vue-typescript-portfolio',
    demo: 'https://haber-portfolio.netlify.app/',
  },
  {
    name: 'Notes',
    technologies: ['vuejs', 'language-javascript', 'nodejs'],
    desc: 'Notes app based on the MEVN stack with additional use of the Vuex and the Vuetify UI library.',
    github: 'https://github.com/haberalan/vue-javascript-notes',
    demo: 'https://haber-notes.netlify.app/',
  },
  {
    name: 'Organizer',
    technologies: ['react', 'language-javascript', 'nodejs'],
    desc: 'Organizer app based on the MERN stack.',
    github: 'https://github.com/haberalan/react-javascript-organizer',
    demo: 'https://haber-organizer.netlify.app/',
  },
];
</script>

<style scoped>
.desc-height {
  height: 120px;
}

.container {
  max-width: 1400px;
}
</style>
