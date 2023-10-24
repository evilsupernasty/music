<template>
  <app-header />
  <router-view v-slot="{ Component }">
    <!-- 👻 ghost property, used to load the destructured Component -->
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <app-player />
  <app-auth />
</template>

<script>
import { auth } from '@/includes/firebase';
import { mapWritableState } from 'pinia';
import useUserStore from '@/stores/user';
import AppHeader from '@/components/AppHeader.vue';
import AppPlayer from '@/components/AppPlayer.vue';
import AppAuth from '@/components/AppAuth.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppPlayer,
    AppAuth
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  }
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all .5s linear;
}

.fade-leave-to {
  transition: all .5s linear;
  opacity: 0;
}
</style>
