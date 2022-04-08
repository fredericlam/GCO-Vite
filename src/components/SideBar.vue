<template>
	
	<div class="sidebar">

		<div class="container_social" v-if="prop_publications==1">
			<div class="right_bloc" id="bloc_publications">
			    <h2>Latest publications <a href="https://webapi.iarc.fr/refman/edge/api/recent_pub_rss?c=csu" target="_blank" class="rss_feed_pub"><i class="fa fa-rss-square"></i></a></h2>
			    <ul class="pubs" id="recent-pub-widget-container">
			    	<li v-for="article in articles" :key="article.pmid">
			    		<h4>{{ article.date }}</h4>
			    		<a :href="article.url" target="_blank">{{ article.title }}</a>
			    	</li>
			    </ul>
			    <a class="show_all blue" href="https://www.ncbi.nlm.nih.gov/pubmed/?term=Cancer+Surveillance%5BAD%5D+AND+(international+agency+for+research+on+cancer%5BCN%5D+OR+iarc%5BCN%5D+OR+international+agency+for+research+on+cancer%5BAD%5D+OR+iarc%5BAD%5D)" target="_blank">Show all <i class="fa fa-external-link" aria-hidden="true"></i></a>
		  	</div>
		</div>

		<div class="container_social" v-if="prop_twitter==1">
		  	<div class="right_bloc" id="bloc_twitter">
		  		<a class="twitter-timeline" data-height="320" href="https://twitter.com/GLOBOCAN_GCO?ref_src=twsrc%5Etfw">Tweets by GLOBOCAN_GCO</a>
		  	</div>
		</div>

		<div class="container_social" v-if="prop_news==1">
		  	<div class="right_bloc" id="bloc_updates">
		    	<h2>Latest CSU branch updates</h2>
		    	<ul class="updates">
			    	<li v-for="item in news" :key="item.id">
				      <h4>{{ item.date }}</h4>
				      <a href="{{ item.url }}" target="_blank">{{ item.desc }}</a> 
				    </li>
				</ul>
			</div>
		</div>

		<!--<div class="right_bloc" id="iframe_dataviz">
			<h2>A embed Canviz graphic in sidebar</h2>
			<iframe width="100%" height="700" src="http://localhost:8091/overtime/en/dataviz/trends?populations=3600_38000_44000_52800_75200_19100&sexes=2&types=0_1&multiple_populations=1&key=asr&age_end=15&print=1&embed=1" style="border:none;overflow:hidden;"></iframe>

		</div>-->	

	</div>

</template>

<script>
import news from '../assets/data/news.json'
import { computed } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

export default {
	name: 'sidebar',
	props : {
		prop_publications : { type: Number, default: 1 },
		prop_twitter : { type: Number, default: 1 },
		prop_news : { type: Number, default: 1 }
    } , 
  	setup(){
  		const store = useStore()
	  	return {
	  		articles : computed(()=>store.state.articles)
	  	}
  	},
	created(){
		
	},
  	data () {
	    return {
			news: news , 
	    }
  	},
  	mounted(){
  		
  		

  		// axios.get('https://platform.twitter.com/widgets.js') ; 
  		setTimeout(() => {
  			
  			/*let twitter_widget = document.createElement('script');   
			twitter_widget.setAttribute('src',"https://platform.twitter.com/widgets.js");
			document.head.appendChild(twitter_widget);*/
			twttr.widgets.load()

  		}, 1000)
  		
  	}
}
</script>

<style lang="scss">
	
	.sidebar{
		#bloc_publications h2, .timeline-Header-title, #bloc_updates h2{
			padding: 10px 0 ; 
		}
		.timeline-Header,.SandboxRoot.env-bp-min .timeline-Tweet{
			padding: 10px 0 ;
		}

		.container_social{
			margin-bottom: 10px;
		}
		.right_bloc{
	    	margin-bottom: 10px;
		}
		ul{
			li{
			    padding-right: 10px;
			}
		}
		ul.updates{
			min-height:200px; 
		}
	}
</style>
