<template>
  <v-app>
    <the-header />
    <v-main class="my-16">
      <router-view v-slot="{ Component }">
        <transition name="scroll-y-transition" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script setup lang="ts">
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
</script>
