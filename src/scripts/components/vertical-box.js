const template = `
<div class="vertical-box">
	<div class="vertical-box__image">
		<img :src="imgPath">
	</div>
	<div class="vertical-box__content">
		<div class="vertical-box__title">{{title}}</div>
		<div class="vertical-box__text">{{text}}</div>
		<div class="vertical-box__cta">
			<a :href="ctaLink" target="_blank">{{ctaText}}</a>
		</div>
	</div>
</div>
`;

const VerticalBox = Vue.component('VerticalBox', {
	template,
	props: {
		imgPath: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: ''
		},
		text: {
			type: String,
			default: ''
		},
		ctaText: {
			type: String,
			default: ''
		},
		ctaLink: {
			type: String,
			default: ''
		}
	}
});

export default VerticalBox;