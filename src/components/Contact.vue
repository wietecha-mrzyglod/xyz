<template>
  <div class="contact">
    <div class="container">
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

<style>
form {
  width: 100%;
  border: 1px solid rgb(210, 210, 210);
  border-top: none;
  padding-top: 30px;
}
.error-message {
  color: #BD0101;
}
.error-message li {
  margin-left: 20px;
}
input {
  padding: 14px 0;
}
input, textarea {
  width: 100%;
  border: none;
  border-bottom: 1px solid rgb(210, 210, 210);
  font-size: 1rem;
  line-height: 1.6rem;
  font-family: Arial, sans-serif;
  color: #333;
}
textarea {
  resize: none;
}
form > p {
  width: 100%;
  padding: 25px 35px;
}
.button-container {
  text-align: center;
}
.button-container input {
  width: 200px;
  border: 1px solid #da6516;
  background-color: #da6516;
  color: #fff;
  border-radius: 10px;
  padding: 10px 15px;
  font-weight: 700;
  margin: 30px auto;
  cursor: pointer;
  font-size: 16px;
}
.button-container input:hover {
  background-color: #fff;
  color: #da6516;
}
</style>
