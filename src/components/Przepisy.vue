<template>
  <div class="container recipes-container">
    <h2><span>Przepis</span><span class="level">Trudność</span></h2>
    <ul class="recipes-list">
      <li v-for="item) in recipes"
          @click="toggleDetail(item)">
        <h3>
          <span class="position">{{ item.position }}.</span>
          <span class="recipe-title">{{ item.title }}</span>
          <span :class="[item.showDetail ? 'arrowTop' : 'arrowDown']"></span>
          <span :class="item.level"></span>
        </h3>
        <div v-show="item.showDetail">
          <div class="half-row">
            <h4>Składniki</h4>
            <ul>
              <li v-for="ingredient in item.ingredients">{{ ingredient }}</li>
            </ul>
          </div>
          <div class="half-row">
            <h4>Przygotowanie</h4>
            <p>{{ item.preparation }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const recipes = [
    {
      position: 1,
      title: "Spagetti",
      level: "two",
      ingredients: ["test1","test2","test3"],
      preparation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      showDetail: false
    },
    {
      position: 2,
      title: "Carbonara",
      level: "one",
      ingredients: ["test1","test2","test3"],
      preparation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      showDetail: false
    },
    {
      position: 3,
      title: "Lazagne",
      level: "two",
      ingredients: ["test1","test2","test3"],
      preparation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      showDetail: false
    },
    {
      position: 4,
      title: "Pierogi",
      level: "four",
      ingredients: ["Podwójna porcja CIASTA NA PIEROGI","500 g sera białego tłustego","Kapusta","500 g ziemniaków","2 łyżeczki soli (lub do smaku)","1/2 łyżeczki zmielonego pieprzu"],
      preparation: "Nadzienie: ziemniaki obrać, opłukać, włożyć do garnka, dodać sól, przykryć zimną wodą i zagotować. Gotować pod uchyloną pokrywą przez około poł godziny lub do miękkości. Odcedzić, włożyć z powrotem do garnka i jeszcze gorące roztluc dokładnie tłuczkiem do ziemniaków na gładką masę bez grudek.",
      showDetail: true
    }
]

  export default {
    data(){
      return {
        recipes: recipes
      }
    },
    methods: {
      toggleDetail: function(item){
        item.showDetail = !item.showDetail;
      }
    }
  }
</script>
