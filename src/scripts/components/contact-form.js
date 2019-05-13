const TEMPLATE = `<section id="contato_acelera">
  <div class="imagem-contato">
    <img src="./dist/images/arrow-contato.png" />
  </div>
  <div class="form-contato">
    <div class="contact-title article-title-font" v-html="contactTitle"></div>
    <div class="contact-text article-text-font">{{contactText}}</div>
    <div class="campos-form">
      <label for="name">
        <span>Nome:</span>
        <input type="text" name="name" v-model="name" />
      </label>
      <label>
        <span>E-mail</span>
        <input type="email" name="email" v-model="email" />
      </label>
      <label>
        <span>Empresa:</span>
        <input type="text" name="company" v-model="company" />
      </label>
      <label>
        <span>Área de atuação: </span>
        <input type="text" name="workingArea" v-model="workingArea" />
      </label>
      <label>
        <span>Mensagem: </span>
        <textarea name="message" v-model="workingArea"></textarea>
      </label>
      </div>
      <button class="contact-form__button default-button--primary" @click="sendEmail">{{buttonText}}</button>
  </div>
  <div class="email-response" v-if="showEmailResponse">{{emailResponse}}</div>
</section>`;

import DefaultButton from './default-button.js';

const ContactForm = Vue.component('contact-form', {
  template: TEMPLATE,
  components: {
    DefaultButton
  },
  props: {
    contactTitle: {
      type: String,
      default: ''
    },
    contactText: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: 'Enviar'
    },
    msgSent: {
      type: String,
      default: 'Mensagem enviada com sucesso!'
    }
  },
  data() {
    return {
      name: '',
      email: '',
      company: '',
      workingArea: '',
      message: '',
      emailResponse: '',
      showEmailResponse: false
    }
  },
  methods: {
    sendEmail() {
      axios.post('./envia-contato.php', {
        email: 'teste@teste.com',
        nome: 'Teste name',
        empresa: 'Teste company',
        area_atuacao: 'Teste area atuação',
        msg: 'Teste mensagem'
      })
      .then(response => {
        showEmailResponse = response;
        emailResponse = "Mensagem en"
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
});

export default ContactForm;