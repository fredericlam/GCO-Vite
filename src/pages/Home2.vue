<template>

	<div class="row" id="slick-left">

      	<div class="container splash baseline">
      	</div>

      	<div class="carousel_m carousel_m_1">

	      <div class="carousel_item c_today">
	        <div class="container">
	          <div class="row">
	            <div class="col-md-6">
	              <a href="/today/" target="_blank">
	                <img src="../assets/img/home/today.png">
	              </a>
	            </div>
	            <div class="col-md-6 right_b">
	              <p><a href="https://gco.iarc.fr/today" target="_blank">Provides data super visualization tools that present current national estimates of the incidence, mortality,and prevalence of 36 cancer types in 185 countries, by sex and age group.</a></p>
	              <ul class="screenshots">
	                
	                <li><a data-tooltip="tooltip" title="Estimated  number of new cases in 2020 by continents" href="https://gco.iarc.fr/today/online-analysis-pie?v=2020&mode=population" target="_blank"><img src="../assets/img/carousel/screen.1.0.png"></a></li>
	                
	                <!--<li><a data-tooltip="tooltip" title="Estimated number of deaths in 2020, all cancers, both sexes, all ages" href="https://gco.iarc.fr/today/online-analysis-map?v=2020&mode=population&mode_population=continents&population=900&populations=900&key=total&sex=0&cancer=39&type=1" target="_blank"><img src="../assets/img/carousel/screen.1.1.png"></a></li>
	                
	                <li><a data-tooltip="tooltip" title="Estimated age-standardized incidence and mortality rates (World) in 2020, worldwide, both sexes, all ages" href="https://gco.iarc.fr/today/online-analysis-multi-bars?v=2020&mode=cancer&mode_population=countries&population=900&populations=900&key=asr&sex=0&cancer=39&type=0&statistic=5&prevalence=0&population_group=0&ages_group%5B%5D=0&ages_group%5B%5D=17&nb_items=10&group_cancer=1&include_nmsc=1&include_nmsc_other=1&type_multiple=%257B%2522inc%2522%253Atrue%252C%2522mort%2522%253Atrue%252C%2522prev%2522%253Afalse%257D&orientation=horizontal&type_sort=0&type_nb_items=%257B%2522top%2522%253Atrue%252C%2522bottom%2522%253Afalse%257D" target="_blank"><img src="../assets/img/carousel/screen.1.2.png"></a></li>

	                <li><a data-tooltip="tooltip" href="https://gco.iarc.fr/today/online-analysis-scatter-plot" title="Mortality – ASR (World) vs Incidence – ASR (World)" target="_blank"><img src="../assets/img/carousel/screen.1.3.png"></a></li>
	                <li><a data-tooltip="tooltip" title="Estimated number of new cases in 2020, all cancers, both sexes, all ages" href="https://gco.iarc.fr/today/online-analysis-sunburst" target="_blank"><img src="../assets/img/carousel/screen.1.4.png"></a></li>
	                <li><a data-tooltip="tooltip" title="Estimated number of prevalent cases (5-year) as a proportion in 2020" href="https://gco.iarc.fr/today/online-analysis-map?v=2020&mode=population&mode_population=continents&population=900&populations=900&key=asr&sex=0&cancer=39&type=2" target="_blank"><img src="../assets/img/carousel/screen.1.5.png"></a></li>-->
	              </ul>
	            </div>
	          </div>
	        </div>
	      </div>

	      <div class="carousel_item c_overtime">
	        <div class="container">
	          <div class="row">
	            <div class="col-md-6">
	              <a @click="showModal = true" class="link_modal">
	                  <img src="../assets/img/home/over_time.png"></a>
	            </div>
	            <div class="col-md-6 right_b">
	              <p><a @click="showModal = true" class="link_modal">Undergoing further development; will provide data visualization tools that document the changing rates of cancer incidence and mortality over the course of half a century, based on high-quality data from 40 countries.</a></p>
	              <ul class="screenshots">
	                <li><a data-tooltip="tooltip" tooltip="IARC cancer mortality database" href="https://www-dep.iarc.fr/whodb/whodb.htm" target="_blank"><img src="../assets/img/carousel/screen.2.0.png"></a></li>
	                <li><a data-tooltip="tooltip" tooltip="Cancer Incidence in Five Continents (CI5)" href="https://ci5.iarc.fr/Default.aspx" target="_blank"><img src="../assets/img/carousel/screen.2.1.png"></a></li>
	              </ul>
	            </div>
	          </div>
	        </div>
	      </div>
	      
	      <div class="carousel_item c_tomorrow">
	        <div class="container">
	          <div class="row">
	              <div class="col-md-6">
	                <a href="/tomorrow/" target="_blank">
	                    <img src="../assets/img/home/tomorrow.png">
	                  </a>
	              </div>
	              <div class="col-md-6 right_b">
	                <p><a href="https://gco.iarc.fr/tomorrow" target="_blank">A tool that predicts the future cancer incidence and mortality burden worldwide from the current estimates in 2018 up until 2040.</a></p>
	                <ul class="screenshots">
	                  <li><a data-tooltip="tooltip" href="https://gco.iarc.fr/tomorrow/en/dataviz/trends?types=0&sexes=1_2&mode=population&group_populations=0&multiple_populations=1&multiple_cancers=1&cancers=39&populations=903_904_905_908_909_935" title="Estimated number of new cases from 2020 to 2040, Males & Females, age [0-85+]" target="_blank"><img src="../assets/img/carousel/screen.3.0.png"></a></li>
	                  <li><a data-tooltip="tooltip" title="Estimated number of new cases from 2020 to 2040, Males & Females, age [0-85+]" href="https://gco.iarc.fr/tomorrow/en/dataviz/bubbles?types=0&sexes=1_2&mode=population&group_populations=0&multiple_populations=1&multiple_cancers=1&cancers=39&populations=903_904_905_908_909_935&apc=cat_ca20v1.5_ca23v-1.5&group_cancers=1" target="_blank"><img src="../assets/img/carousel/screen.3.1.png"></a></li>
	                  <!--<li><a data-tooltip="tooltip" title="Estimated number of new cases from 2020 to 2040, Both sexes, age [0-85+]" href="https://gco.iarc.fr/tomorrow/en/dataviz/bars?types=0&sexes=0&mode=population&group_populations=0&multiple_populations=1&multiple_cancers=1&cancers=39&populations=903_904_905_908_909_935&apc=cat_ca20v1.5_ca23v-1.5&group_cancers=1" target="_blank"><img src="../assets/img/carousel/screen.3.2.png"></a></li>-->
	                </ul>
	              </div>
	          </div>
	        </div>
	      </div>

	      <div class="carousel_item c_causes">
	        <div class="container">
	          <div class="row">
	              <div class="col-md-6">
	                <a href="/causes">
	                  <img src="../assets/img/home/causes.png">
	                </a>
	              </div>
	              <div class="col-md-6 right_b">
	                <p><a href="/causes" data-toggle="modal">An expanding set of visualization tools that links the cancer burden to underlying causes, quantifying the extent to which different cancers are attributable to key lifestyle and environmental risk factors worldwide.</a></p>
	                <ul class="screenshots">
	                  <li><a data-tooltip="tooltip" title="Cancer Attributable to Obesity" href="https://gco.iarc.fr/causes/obesity" target="_blank"><img src="../assets/img/carousel/screen.4.0.png"></a></li>
	                  <li><a data-tooltip="tooltip" title="Cancer Attributable to Infections" href="https://gco.iarc.fr/causes/infections" target="_blank"><img src="../assets/img/carousel/screen.4.1.png"></a></li>
	                  <!--<li><a data-tooltip="tooltip" title="Cancers Attributable to UV Radiation" href="https://gco.iarc.fr/causes/uv" target="_blank"><img src="../assets/img/carousel/screen.4.2.png"></a></li>
	                  <li><a data-tooltip="tooltip" title="Cancers Attributable to Alcohol" href="/causes/alcohol" target="_blank"><img src="../assets/img/carousel/screen.4.3.png"></a></li>-->
	                </ul>
	              </div>
	          </div>
	        </div>
	      </div>

	      <div class="carousel_item c_survival">
	        <div class="container">
	          <div class="row">
	              <div class="col-md-6">
	                <a href="https://gco.iarc.fr/survival/survmark/" target="_blank">
	                    <img src="../assets/img/home/survival.png">
	                  </a>
	              </div>
	              <div class="col-md-6 right_b">
	                <p><a href="https://gco.iarc.fr/survival/survmark/" target="_blank">Provides comprehensive survival estimates for cancers in combination with incidence and mortality statistics over time and most recent period.</a></p>
	                <ul class="screenshots">
	                  <li><a data-tooltip="tooltip" title="Age-standardized 1-year net survival, both sexes, age (15-99), colon cancer, 2010-2014" href="https://gco.iarc.fr/survival/survmark/visualizations/viz7/?mode=%22bar%22&sub_mode=%22all%22&groupby=%22country%22&period=%221%22&cancer=%22Colon+cancer%22&country=%22Australia%22&gender=%220%22&stage=%22SEER%22&age_group=%2215-99%22&show_ci=%22%22" target="_blank"><img src="../assets/img/carousel/screen.5.0.png"></a></li>
	                  <li><a data-tooltip="tooltip" title="Age-standardized 1-year net survival, both sexes, by age groups, colon cancer, 2010-2014" href="https://gco.iarc.fr/survival/survmark/visualizations/viz7/?mode=%22bar%22&sub_mode=%22ages%22&groupby=%22country%22&period=%221%22&cancer=%22Colon+cancer%22&country=%22Australia%22&gender=%220%22&stage=%22SEER%22&age_group=%2215-99%22&show_ci=%22%22" target="_blank"><img src="../assets/img/carousel/screen.5.1.png"></a></li>
	                  <!--<li><a data-tooltip="tooltip" title="Age-standardized net survival, both sexes, age (15-99), colon cancer, 2010-2014" href="https://gco.iarc.fr/survival/survmark/visualizations/viz7/?mode=%22circle%22&groupby=%22country%22&period=%221%22&cancer=%22Colon+cancer%22&country=%22Australia%22&gender=%220%22&stage=%22SEER%22&age_group=%2215-99%22&show_ci=%22%22" target="_blank"><img src="../assets/img/carousel/screen.5.2.png"></a></li>-->
	                </ul>
	              </div>
	          </div>
	        </div>
	      </div>

	      <div class="carousel_item c_research">
	        <div class="container">
	          <div class="row">
	              <div class="col-md-6">
	                  <img src="../assets/img/home/stories.png">
	              </div>
	              <div class="col-md-6 right_b">
	                <p>Cancer stories are interactive stories telling cancer facts through visualizations. </p>
	                <ul class="screenshots">
	                  <li><a data-tooltip="tooltip" title="Global burden of gastrointestinal cancers" href="https://gco.iarc.fr/stories/gastro-intestinal" target="_blank"><img src="../assets/img/home/gastro-intestinal.png"></a></li>
	                  <!--<li><a data-tooltip="tooltip" title="Globocan 2020" href="https://infogram.com/globocan-2020-1h9j6qg7xdp8v4g?live" target="_blank"><img src="../assets/img/home/story1.png"></a></li>
	                  <li><a data-tooltip="tooltip" title="International Childhood Cancer Day" href="https://infogram.com/15-feb-international-childhood-cancer-day-1h1749vwqg1xl6z?live" target="_blank"><img src="../assets/img/home/story2.png"></a></li>
	                  <li><a data-tooltip="tooltip" title="International HPV Awareness Day" href="https://infogram.com/4-mar-international-hpv-awareness-day-1h1749vkv91vq6z?live" target="_blank"><img src="../assets/img/home/story3.png"></a></li>
	                  <li><a data-tooltip="tooltip" title="Cancer among young adults" href="https://infogram.com/ovarian-cancer-1hzj4o38g5mgo4p?live" target="_blank"><img src="../assets/img/home/story6-1.png"></a></li>
	                  <li><a data-tooltip="tooltip" title="Ovarian cancer around the world" href="https://infogram.com/cancer-among-young-adults-1ho16voq8qgr84n?live" target="_blank"><img src="../assets/img/home/story7.png"></a></li>-->
	                </ul>
	              </div>
	          </div>
	        </div>
	      </div>

	      <div class="carousel_item c_projects">
	        <div class="container">
	          <div class="row">
	              <div class="col-md-6">
                    	<img src="../assets/img/home/projects.png">
	              </div>
	              <div class="col-md-6 right_b">
	                <p>Other projects (Nordcan, GICR, IACR, CanReg, Staging tools, Research projects, Publications, Childhood Cancer...) </p>
	                <ul class="screenshots">
	                  <li><a href="https://nordcan.iarc.fr" data-tooltip="tooltip" title="Nordcan" target="_blank"><img src="../assets/img/carousel/screen.6.0.png"></a></li>
	                  <li><a href="https://gicr.iarc.fr" data-tooltip="tooltip" title="Global Initiative for Cancer Registry" target="_blank"><img src="../assets/img/carousel/screen.6.1.png"></a></li>
	                  <!--<li><a href="http://www.iacr.com.fr" data-tooltip="tooltip" title="International Association for the Cancer Registration" target="_blank"><img src="../assets/img/carousel/screen.6.2.png"></a></li>
	                  <li><a title="Infographics" href="/infographics" ><img src="../assets/img/home/story1.png"></a></li>-->
	                </ul>
	              </div>
	          </div>
	        </div>
	      </div>

	    </div>

    </div>

    <!--<button id="show-modal" @click="showModal = true">Show Modal</button>-->
  	<!-- use the modal component, pass in the prop -->
  	<modal v-if="showModal" @close="showModal = false">
  		<template v-slot:header>
      		<img src="../assets/img/bg/Cancer-overtime-50px.png" title="Cancer Overtime" align="center">
    	</template>
    	<template v-slot:body>
          	<p>Undergoing further development. Please choose:</p>
          	<div class="row under-dev">
	    		<div class="col-md-6">
	              <a href="http://ci5.iarc.fr/CI5plus/Default.aspx" target="_blank">
	                <img src="../assets/img/bg/ci5.jpg" title="CI5 Plus">
	                <h2> INCIDENCE </h2>
	              </a>
	            </div>  
	            <div class="col-md-6">
	              <a href="http://www-dep.iarc.fr/WHOdb/WHOdb.htm" target="_blank">
	                <img src="../assets/img/bg/who.png" title="WHO Mortality">
	                <h2> MORTALITY </h2>
	              </a>
	            </div>
          	</div>
    	</template>
  	</modal>

    <div class="container">
      <div class="col-md-12" id="social">
        <div class="row">

          <div class="col-md-4">
            <div class="right_bloc" id="bloc_publications">
              <h2>Latest publications <a href="https://gco.iarc.fr/data/recent_pub_rss.xml" target="_blank" class="rss_feed_pub" data-tooltip="tooltip" title="Get CSU recent publications in a RSS feed"><i class="fa fa-rss-square"></i></a></h2>
              	<ul class="pubs" id="recent-pub-widget-container">
			    	<li v-for="article in articles" :key="article.pmid">
			    		<h4>{{ article.date }}</h4>
			    		<a :href="article.url" target="_blank">{{ article.title }}</a>
			    	</li>
		    	</ul>
              <a class="show_all blue" href="https://pubmed.ncbi.nlm.nih.gov/?term=Cancer%20Surveillance[AD]%20AND%20(international%20agency%20for%20research%20on%20cancer[CN]%20OR%20iarc[CN]%20OR%20international%20agency%20for%20research%20on%20cancer[AD]%20OR%20iarc[AD])" target="_blank">Show all <i class="fa fa-external-link" aria-hidden="true"></i></a>
            </div>
          </div>

          <div class="col-md-4">
            <div class="right_bloc" id="bloc_twitter">
              <a class="twitter-timeline" data-height="320" href="https://twitter.com/GLOBOCAN_GCO?ref_src=twsrc%5Etfw">Tweets by GLOBOCAN_GCO</a> 
            </div>
          </div>

          <div class="col-md-4">
            <div id="bloc_updates">
              <h2>Latest branch updates</h2> 
              <ul class="updates">
                <li v-for="item in news" :key="item.id">
			      	<h4>{{ item.date }}</h4>
			      	<a href="{{ item.url }}" target="_blank">{{ item.desc }}</a> 
		    	</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!--<b-modal class="modal fade" id="cancer-overtime" tabindex="-1" role="dialog" aria-labelledby="cancer-overtime">
      <div class="modal-dialog" role="document">
        <a class="closemodal btn btn-primary"><i class="fa fa-times"></i></a>
        <div class="modal-content">
          <h1 class="head-causes"><img src="../assets/img/bg/Cancer-overtime-50px.png" title="Cancer Overtime" align="center"> </h1>
          <p>Undergoing further development. Please choose:</p>
          <div class="row under-dev">
            <div class="col-md-6">
              <a href="http://ci5.iarc.fr/CI5plus/Default.aspx" target="_blank">
                <img src="../assets/img/bg/ci5.jpg" title="CI5 Plus">
                <h2> INCIDENCE </h2>
              </a>
            </div>  
            <div class="col-md-6">
              <a href="http://www-dep.iarc.fr/WHOdb/WHOdb.htm" target="_blank">
                <img src="../assets/img/bg/who.png" title="WHO Mortality">
                <h2> MORTALITY </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </b-modal>-->
	
</template>

<script>
import { reactive,computed,onMounted } from "vue";
import { useStore } from 'vuex'
import modal from '../components/Modal.vue' ;
import news from '../assets/data/news.json'
import axios from 'axios'
export default {
	name : 'home' , 
	components : { modal } , 
	setup(){ 
		onMounted(() => {
       		$('.carousel_m').slick({
	          dots: true ,
	          autoplay : true ,
	          autoplaySpeed : 10000, 
	          vertical : true
	        });

	        /*let twitter_widget = document.createElement('script');   
			twitter_widget.setAttribute('src',"https://platform.twitter.com/widgets.js");
			document.head.appendChild(twitter_widget);*/
     	})
     	const store = useStore()
	  	return {
	  		articles : computed(()=>store.state.articles)
	  	}
	},
	data() {
	    return {
	      showModal: false ,
	      news : news
	    }
  	},
	created(){
		twttr.widgets.load()
		// axios.get('https://platform.twitter.com/widgets.js') ; 
	}
}
</script>

<style lang="scss">

#slick-left{

  .carousel_m{
    max-height: 420px; 
    overflow-y: hidden;
  }

  .carousel_item{
    padding-top: 45px;
    min-height: 420px;
  }

  .carousel_item p{
    font-size: 1.4em;
  }

  .c_today{
    background: linear-gradient(to bottom right, #F6CFA9, #F6CFA9);
  }

  .c_today_plus{
    background: linear-gradient(to bottom right, #FDAD62, #F9B473);
  }

  .c_overtime{
    background: linear-gradient(to bottom right, #4092FA, #4092FA);
  }

  .c_tomorrow{
    background: linear-gradient(to bottom right, #84D9F6, #84D9F6);
  }

  .c_causes{
    background: linear-gradient(to bottom right, #92F9D1, #92F9D1);
  }

  .c_survival{
    background: linear-gradient(to bottom right, #E1B3E8, #E1B3E8);
  }

  .c_research{
    background: linear-gradient(to bottom right, #EE9FC0, #EE9FC0);
  }

  .c_projects{
    background: linear-gradient(to bottom right, #F76E7A, #F94555);
  }

  .slick-dots{
    bottom: auto !important;
    top: 20px;
    left: 80px;
    width: 90px!important;
  }

  .slick-dots li button:before{
    font-size: 30px!important;
  }

  .slick-next,.slick-prev{
    color: #000;
  }

  .slick-next{
    right: 40px; 
  }

  .slick-prev{
    left: 30px;
    z-index: 99 ; 
  }

  .right_b{
    position: relative;
    min-height: 325px;
  }

  .right_b a{
    color: #000 !important; 
  }

  .right_b ul.screenshots{
    position: absolute ;  
    bottom: 0px;
  }

  .right_b ul.screenshots li{
    list-style-type: none; 
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    width: 120px;
    min-height: 165px;
    background: #fff ; 
    border: solid 1px #ccc;
  }

  .right_b ul.screenshots li a{
    
    padding: 5px ; 
    display: block ; 
    width: 100%;
    height: 100%;
  }

  .right_b ul.screenshots li img{
    max-height: 65px;
    text-align: center;
    margin: auto;
  }

  .right_b p a{
  	display: none ; 
  }

  .slick-dots li button:before{
    display: none ; 
  }

  .slick-dots li{
    width: 100px;
    height: 40px;
    border-radius: 6px;
    background-size: 100%;
    border: solid 2px transparent;
    background-repeat: no-repeat;
    background-position-y: 75%;
    margin-top: 10px;
  	border: solid 1px #ccc;
  }

  .slick-dots li:first-child{
  	background-image:url('/src/assets/img/home/today_mini.png');
  }

  /*.slick-dots li:nth-child(2){
    background-image:url('.../assets/img/today-plus.png');
  }*/

  .slick-dots li:nth-child(2){
    background-image:url('/src/assets/img/home/over_time_mini.png');
  }

  .slick-dots li:nth-child(3){
    background-image:url('/src/assets/img/home/tomorrow_mini.png');
  }

  .slick-dots li:nth-child(4){
    background-image:url('/src/assets/img/home/causes_mini.png');
  }

  .slick-dots li:nth-child(5){
    background-image:url('/src/assets/img/home/survival_mini.png');
  }

  .slick-dots li:nth-child(6){
    background-image:url('/src/assets/img/home/stories_mini.png');
  }

  .slick-dots li:nth-child(7){
    background-image:url('/src/assets/img/home/projects_mini.png');
  }

  .slick-dots li.slick-active{
    border:solid 2px #fff ;
  }

  #bloc_publications{
    height: 270px!important;
    max-height: 270px!important;
  }

  ul.pubs,ul.updates{
    height: 230px;
  }

  #bloc_publications h2, .timeline-Header-title,#bloc_updates h2{
    padding: 7px 10px!important;
    font-size: 1.3em;
  }

  div#social {
    margin-bottom: 100px;
  }

  a.show_all{
    margin-top: 14px;
  }

  ul.pubs li,ul.updates li{
    font-size: 1em;
  }

  ul.pubs li a,ul.updates li a{
    font-weight: 300;
  }
}

</style>