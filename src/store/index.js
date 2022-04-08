import { createStore, createLogger } from 'vuex'

// https://github.com/vuejs/vuex/tree/4.0/examples/composition

const debug = process.env.NODE_ENV !== 'production'

const state = () => ({
  articles: []
})

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  setArticles (state, articles) {
    state.articles = articles.map(a=>{
    	a.url =  `https://www.ncbi.nlm.nih.gov/pubmed/${a.pmid}` ; 
    	return a
    })
  }
}

const store = createStore({
	state,
  	getters,
  	actions,
  	mutations,
  	plugins: debug ? [createLogger()] : []
})

export default store 