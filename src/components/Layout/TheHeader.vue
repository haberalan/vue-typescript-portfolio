<template>
  <v-container class="d-flex justify-space-between align-center">
    <router-link to="/" class="text-h4 text-lg-h3 font-weight-medium link">Haber</router-link>
    <v-list class="d-none d-sm-flex">
      <v-btn variant="text" class="mx-1 text-h6" to="/">HOME</v-btn>
      <v-btn variant="text" class="mx-1 text-h6" to="/projects">PROJECTS</v-btn>
      <v-btn variant="text" class="mx-1 text-h6" to="/aboutme">ABOUT ME</v-btn>
    </v-list>
    <v-btn id="menu-activator" class="d-sm-none" icon flat>
      <v-icon size="x-large">mdi-menu</v-icon>
    </v-btn>
    <v-menu activator="#menu-activator">
      <v-list>
        <v-list-item>
          <v-list-item to="/" :rounded="true">
            <v-list-item-title class="text-h6 text-center">HOME</v-list-item-title>
          </v-list-item>
          <v-list-item to="/projects" :rounded="true">
            <v-list-item-title class="text-h6 text-center">PROJECTS</v-list-item-title>
          </v-list-item>
          <v-list-item to="/aboutme" :rounded="true">
            <v-list-item-title class="text-h6 text-center">ABOUT ME</v-list-item-title>
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
  transition: all 0.2s ease-in-out;
}
.link:hover {
  color: #616161;
}
</style>
