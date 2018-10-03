<template>
  <div class="container contact-container">
    <h2><span>Kontakt</span></h2>

    <form id="appform" @submit="checkForm" action="#" method="#" novalidate="true">
      <p v-if="errors.length" class="error-message">
        <b>Popraw nastepujące błędy:</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
      <p>
        <input id="name" placeholder="Imię" v-model="name" type="text" name="name">
      </p>
      <p>
        <input id="email" placeholder="Email" v-model="email" type="email" name="email">
      </p>
      <p>
        <textarea placeholder="Treść" v-model="message" rows="1" ></textarea>
      </p>
      <p class="button-container">
        <input type="submit" value="Wyślij">
      </p>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        errors: [],
        name: null,
        email: null,
        message: null
      }
    },
    methods: {
      checkForm: function(e){
        this.errors = [];

        if(!this.name){
          this.errors.push("Imię jest wymagane.");
        }

        if(!this.email){
          this.errors.push("Email jest wymagany");
        }else if(!this.validEmail(this.email)){
          this.errors.push("Wprowadzono niepoprawny email.");
        }

        if(!this.errors.length){
          return true;
        }
        e.preventDefault();
      },

      validEmail: function(email){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }
  }
</script>
