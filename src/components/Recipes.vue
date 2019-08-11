<template>
  <div class="recipes">
    <div class="container">

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
  </div>
</template>

<script>
const recipes = [
    {
      position: 1,
      title: "Spagetti",
      level: "two",
      ingredients: ["2 ząbki czosnku", "Obrana cebula pokrojona w talarki", "Makaron typu spaghetti", "Sos pomidorowy", "20 dag mięsa mielonego", "Sól", "Pieprz", "Żółty ser do posypania"],
      preparation: "Przygotuj sos do spaghetti: na patelnię z rozgrzanym tłuszczem wsyp pokrojony w plasterki czosnek i cebulkę posiekaną w talarki. Zaczekaj, aż się zeszklą, przemieszaj kilkukrotnie. Potem dołóż mięso mielone i lekko je obsmażasz, mieszając łopatką, żeby nie przywarło. Na koniec wlej do tego sos pomidorowy (może być z kartonika, może być passata z butelki). Możesz dodać ulubione przyprawy np. bazylię czy oregano, trochę soli, pieprzu i szczypta cukru też nie zaszkodzą. Ugotuj makaron spaghetti: do garnka z osolonym wrzątkiem wrzuć garść makaronu. Nie łam go na mniejsze kawałki - po chwili sam zacznie mięknąć i sam się zatopi w wodzie. Po 2 minutach możesz podziubać widelcem, żeby nitki się ze sobą nie skleiły. Gotuj tak długo, jak jest to opisane na opakowaniu - będzie wtedy al dente, czyli sprężysty. Parujący makaron układasz na talerzach w gniazda, a potem polewasz gorącym sosem. Możesz posypać spaghetti tartym parmezanem lub dowolnym żółtym serem jaki znajdziesz w lodówce.",
      showDetail: false
    },
    {
      position: 2,
      title: "Carbonara",
      level: "three",
      ingredients: ["500 g makaronu spaghetti", "200 g wędzonego boczku", "250 ml śmietanki 30%", "3 żółtka", "1 ząbek czosnku", "1 cebula", "100 ml białego wytrawnego wina", "2 łyżki tartego sera grana padano", "Sól", "Pieprz", "Bazylia"],
      preparation: "Makaron gotujemy w osolonej wodzie. Cedzimy. Boczek kroimy w drobną kostkę, wrzucamy na rozgrzaną patelnię i podsmażamy, stale mieszając, aż się zrumieni. Cebulę siekamy. Zdejmujemy boczek z patelni i podsmażamy cebulę na tłuszczu, który się z niego wytopił. Do cebuli dodajemy wino. Czosnek drobno siekamy i przekładamy na patelnię. Całość dusimy około 5 minut. W miseczce mieszamy żółtka, 120 ml śmietany oraz ser. Pozostałą śmietanę wlewamy na patelnię i dodajemy do niej przesmażony wcześniej boczek. Zmniejszamy płomień i dodajemy jajka ze śmietaną i serem. Przyprawiamy solą i pieprzem do smaku. Czekamy aż sos zgęstnieje. Zdejmujemy patelnię z ognia. Do sosu przekładamy ugotowany makaron i dokładnie mieszamy. Bazylię drobno siekamy i dekorujemy nią spaghetti.",
      showDetail: false
    },
    {
      position: 3,
      title: "Zupa pieczarkowa",
      level: "one",
      ingredients: ["1 łyżka masła", "1/2 łyżki oliwy", "300g pieczarek", "1 cebula", "1 marchewka", "2 ziemniaki", "1 i 1/2 litra rosołu, bulionu, wywaru drobiowego", "1/2 szklanki drobnego makaronu (np. małe muszelki)", "Natka pietruszki", "Koperek", "100 g śmietany 18%"],
      preparation: "Pieczarki umyć, osuszyć, pokroić na cienkie plasterki. Cebulę pokroić w kosteczkę. Do większego garnka włożyć masło z oliwą, roztopić, dodać pieczarki oraz cebulę i mieszając dusić przez ok. 7 - 10 minut aż odparują. Dodać obraną i startą na tarce marchewkę oraz obrane i pokrojone w kosteczkę ziemniaki. Wymieszać, doprawić solą oraz pieprzem, chwilę razem podsmażać. Dodać makaron (suchy) oraz gorący bulion, zagotować. Przykryć i gotować do miękkości warzyw i makaronu przez ok. 15 minut. Pod koniec dodać łyżkę posiekanej natki i łyżkę koperku. Odstawić z ognia i zabielić śmietaną, uprzednio rozprowadzoną w kilku łyżkach wywaru.",
      showDetail: false
    },
    {
      position: 4,
      title: "Pierogi",
      level: "four",
      ingredients: ["Podwójna porcja ciasta na pierogi","500 g sera białego tłustego","Kapusta","500 g ziemniaków","2 łyżeczki soli (lub do smaku)","1/2 łyżeczki zmielonego pieprzu"],
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

<style>
.recipes-list > li {
  padding: 25px 35px;
}
.recipes-list > li, .recipes-container h2 {
  border: 1px solid rgb(210, 210, 210);
  background-color: white;
}
.recipes-list > li {
  border-top: none;
}
.recipes-list > li {
  list-style-type: none;
  cursor: pointer;
}
.recipes-list > li h3 span {
  display: inline-block;
}
.position {
  width: 20px;
  font-weight: bold;
  margin-right: 20px;
  text-align: right;
  color: #333;
}
.recipe-title {
  width: calc(100% - 170px);
  color: #333;
}
.one, .two, .three, .four, .level  {
  width: 70px;
  margin-right: 30px;
  text-align: right;
  float: right;
}
.one, .two, .three, .four {
  background-image: url("../assets/icon.png");
  height: 16px;
  background-repeat: repeat-x;
}
.one {
  width: 16px;
}
.two {
  width: 32px;
}
.three {
  width: 48px;
}
.four {
  width: 64px;
}
span[class*="arrow"]{
  width: 30px;
  float: right;
}
.arrowTop:after {
  content: "\25B2";
}
.arrowDown:after {
  content: "\25BC";
}

.half-row {
  display: inline-block;
  width: 49%;
  vertical-align: top;
  padding-right: 35px;
  line-height: 21px;
}
.half-row:nth-child(2) {
  text-align: justify;
}
@media(max-width: 768px){
  .half-row {
    width: 100%;
  }
}
.half-row h4 {
  font-size: 14px;
  line-height: 18.2px;
  color: #da6516;
  font-weight: bold;
  margin: 30px 0;
}
.half-row ul {
  padding-left: 12px;
  list-style-type: disc;
}
</style>
