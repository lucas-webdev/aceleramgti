const TEMPLATE = `
    <nav class="menu">
        <ul>
            <li class="logo">
                <a href="#menu">
                    <img src="./dist/images/logo_fumsoft.png" />
                </a>
            </li>
            <li v-for="item in menuItems">
                <a :href="item.link">{{item.text}}</a>
            </li>
        </ul>
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
                    {'text': 'Programas', 'link': ''},
                    {'text': 'Parceiros', 'link': ''},
                    {'text': 'Casos de sucesso', 'link': ''},
                    {'text': 'Contato', 'link': ''},
                    {'text': 'Blog', 'link': ''}
                ];
            }
        }
    }
});

export default MainMenu;