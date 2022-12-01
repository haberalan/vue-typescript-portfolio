<template>
  <v-layout full-height class="my-8 my-lg-0">
    <v-container class="my-auto">
      <v-row class="d-flex align-center">
        <v-col cols="12" class="mb-16 v-col-lg-6 text-center text-lg-left">
          <h1 class="text-h4 text-sm-h2">I'm <strong>Alan Haber</strong></h1>
          <p class="text-body-1 text-sm-h5 mt-2 text-grey-darken-2">Junior Frontend Developer, future Fullstack and student.</p>
        </v-col>
        <v-col cols="12" class="v-col-lg-6">
          <v-sheet class="mx-auto" max-width="400">
            <vue-3-lottie :animationData="homeJSON" />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script setup lang="ts">
import homeJSON from '../assets/home.json';
</script>

<style scoped></style>
