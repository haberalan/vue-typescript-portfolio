<template>
  <v-layout full-height class="my-8 my-lg-0">
    <v-container class="my-auto d-flex flex-column align-center">
      <v-card min-width="600" max-width="500">
        <v-card-title>123</v-card-title>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script setup lang="ts">
import { ProjectType } from '../types/Project';

const projects: ProjectType[] = [
  {
    name: 'Clothes shop',
    technologies: ['React', 'Redux'],
    img: 'img',
    desc: 'Description',
    github: 'gitlink',
    demo: 'demolink',
  },
];
</script>
