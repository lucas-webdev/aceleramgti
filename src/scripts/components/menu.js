const TEMPLATE = `
    <nav class="menu navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#menu">
            <img class="logo" src="./dist/images/logo_fumsoft.png" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarAcelera" aria-controls="navbarAcelera" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarAcelera">
            <ul class="navbar-nav mr-auto">
                <li class="menu-item nav-item" v-for="(item, index) in menuItems">
                    <a class="nav-link article-text-font" :class="[index === 1 ? 'active' : 'inactive']"  :href="item.link">{{item.text}}</a>
                </li>
            </ul>
        </div>
        <div class="menu-border"></div>
    </nav>
`;

const MainMenu = Vue.component('MainMenu', {
    template: TEMPLATE,
    props: {
        menuItems: {
            type: Array,
            default() {
                return [
                    {'text': 'AceleraMGTI', 'link': '#quem_somos'},
                    {'text': 'Metodologias', 'link': '#jeito_acelera'},
                    {'text': 'Programas', 'link': '#nossos_programas'},
                    {'text': 'Parceiros', 'link': '#nossos_parceiros'},
                    {'text': 'Casos de sucesso', 'link': '#cases_sucesso'},
                    {'text': 'Contato', 'link': 'contato_acelera'},
                    {'text': 'Blog', 'link': '/blog'}
                ];
            }
        }
    }
});

export default MainMenu;