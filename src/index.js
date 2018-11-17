import FuzzySearchItem from './FuzzySearchItem.vue';

export default FuzzySearchItem;

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.component('fuzzy-search-item', FuzzySearchItem);
}