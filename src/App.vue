<template>
  <div id="app">
    <header>
      <span class="logo">Let's cook</span><nav>
        <router-link to="/">Przepisy</router-link><router-link to="/contact">Kontakt</router-link>
      </nav>
    </header>
    <router-view />
    <footer>
      <span class="logo">Let's cook</span>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  text-decoration: none;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
  position: relative;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.2rem;
}
/* Header */
header {
  padding: 30px;
  background-color: #da6516;
  display: flex;
  justify-content: space-between;
  height: auto;
}
@media(max-width: 480px){
  header {
    flex-direction: column;
    height: 130px;
    align-items: center;
  }
}
nav a {
  font-size: 17px;
  line-height: 1.09rem;
  color: white;
  border: 1px solid white;
  padding: 8px 15px;
}
@media(max-width: 480px){
  nav a {
    margin-top: 10px;
  }
}
.logo {
  color: white;
  font-weight: 800;
  font-size: 1.5rem;
}
.router-link-exact-active {
  background-color: white;
  color: #da6516;
}
/* Content */
.container {
  width: 60%;
  min-width: 320px;
  height: auto;
  min-height: 70px;
  margin: 0 auto;
  padding-bottom: 100px;
  margin-top: 30px;
}
@media(max-width: 768px){
  .container {
    width: 80%;
  }
}
@media(max-width: 480px){
  .container {
    width: 96%;
  }
}
h2 {
  padding: 25px 35px;
  width: auto;
  font-size: 18px;
  color: #da6516;
  font-weight: bold;
  border-bottom: 1px solid rgb(210, 210, 210);
}
h3 {
  font-size: 15px;
  font-weight: bold;
  color: #333;
}
/* Footer */
footer {
 position:absolute;
 bottom:0;
 width: 100%;
 height: 40px;
 text-align: center;
 background-color: #da6516;
 color: white;
 padding: 10px;
}
footer .logo {
  font-size: 1.1rem;
}
</style>
