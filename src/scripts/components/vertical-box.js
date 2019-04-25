const template = `
<div class="vertical-box">
	<div class="vertical-box__image">
		<img :src="imgPath">
	</div>
	<div class="vertical-box__content">
		<div v-if="title" class="vertical-box__title">{{title}}</div>
		<div class="vertical-box__text">{{text}}</div>
		<div class="vertical-box__cta">
			<a v-if="!showButton" :href="ctaLink" target="_blank">{{ctaText}}</a>
			<default-button 
				v-else
				buttonTarget="_blank"
				class="half-container__button" 
				buttonType="secondary" 
				:buttonLabel="ctaText" 
				:buttonLink="ctaLink">
			</default-button>
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
		showButton: {
			type: Boolean,
			default: false
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