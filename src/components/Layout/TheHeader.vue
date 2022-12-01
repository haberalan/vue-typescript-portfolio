<template>
  <v-container class="d-flex justify-space-between align-center">
    <router-link to="/" class="text-h4 text-lg-h3 font-weight-medium link">HABER</router-link>
    <v-list class="d-none d-sm-flex">
      <v-btn variant="text" class="mx-1 font-weight-regular text-h6" to="/">HOME</v-btn>
      <v-btn variant="text" class="mx-1 font-weight-regular text-h6" to="/projects">PROJECTS</v-btn>
      <v-btn variant="text" class="mx-1 font-weight-regular text-h6" to="/aboutme">ABOUT ME</v-btn>
    </v-list>
    <v-btn id="menu-activator" class="d-sm-none" icon flat>
      <v-icon size="x-large">mdi-menu</v-icon>
    </v-btn>
    <v-menu activator="#menu-activator">
      <v-list>
        <v-list-item>
          <v-list-item to="/">
            <v-list-item-title class="font-weight-regular text-h6 text-center">HOME</v-list-item-title>
          </v-list-item>
          <v-list-item to="/projects">
            <v-list-item-title class="font-weight-regular text-h6 text-center">PROJECTS</v-list-item-title>
          </v-list-item>
          <v-list-item to="/aboutme">
            <v-list-item-title class="font-weight-regular text-h6 text-center">ABOUT ME</v-list-item-title>
          </v-list-item>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.link {
  color: inherit;
  text-decoration: none;
}
</style>
