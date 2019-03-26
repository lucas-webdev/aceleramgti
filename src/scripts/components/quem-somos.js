const template = `
<section id="quem_somos" class="quem-somos">
	<div class="quem-somos__container">
		<div class="quem-somos__image">
			<img :src="imgPath">
		</div>
		<div class="quem-somos__content">
			<div class="quem-somos__title article-title-font">{{title}}</div>
			<div class="quem-somos__text article-text-font">{{text}}</div>
		</div>
	</div>
</section>`;

const QuemSomos = Vue.component('QuemSomos', {
	template,
	props: {
		imgPath: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: 'O AceleraMGTI'
		},
		text: {
			type: String,
			default: ''
		}
	}
});

export default QuemSomos;