<template>
  <div id="app">
    <header class="clearfix">
      <img src="/images/intervi_logo_standard.png" alt="intervi.">
      <nav>
        <router-link to="/">Przepisy</router-link>
        <router-link to="/kontakt">Kontakt</router-link>
      </nav>
    </header>
    <router-view />
    <footer>
      <img src="/images/intervi_logo_jasne.png" alt="intervi.">
    </footer>
  </div>
</template>
