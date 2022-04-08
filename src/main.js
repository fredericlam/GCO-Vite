import { createApp } from "vue";
import App from "./App.vue";
// import "./index.css";
import router from "./router";
import axios from 'axios'
import store from './store'

let $rss_feed = (document.location.host != 'gco.iarc.fr') ? '/data/recent_pub.json' : 'https://webapi.iarc.who.int/refman/api/recent_pub?c=csu' ;
$rss_feed = 'https://webapi.iarc.who.int/refman/api/recent_pub?c=csu' ;
$rss_feed = '/data/recent_pub.json' ;

let promises 		= [
    // csu publication list
    axios.get( $rss_feed )
];

// pre load cancer one time and commit them to store
axios.all( promises )

	.then( axios.spread(( publications_promise  ) => {

		// console.info("publications_promise.data.articles ",publications_promise.data.articles ) ;
		store.commit('setArticles', publications_promise.data.articles ) 

		const app = createApp(App)
			.use(router)
			.use(store)
			.mount("#app");


	}))
    // eslint-disable-next-line
    .catch( error => {
        console.error("Error catched",error) ; 
        this.error = true
    })
    .finally(() => {

    })

