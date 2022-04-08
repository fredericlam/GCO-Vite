<template>

	<div class="row">

		<img src="../assets/img/metaball1.png" class="metaball1" v-if="theme=='theme1'">

  		<div class="container splash baseline">
    	</div>

    	<div class="carousel_m carousel_m_1">

	      <div class="carousel_item c_today">
	        <div class="container">
	          <div class="row">
	            <div class="col-md-6">
	              <a href="https://gco.iarc.fr/today" id="a_link_1" class="a_first_link" target="_blank" data-tooltip="tooltip" data-placement="left" title="Explore national incidence, mortality, and prevalence for 36 cancer types in 185 countries.">
	                <img src="../assets/img/home/today.png" class="project">
	              </a>
	            </div>
	            <div class="col-md-6 right_b">
	              <p><a href="https://gco.iarc.fr/today" target="_blank"></a></p>
	              <ul class="screenshots">
	                
	                <li><a data-tooltip="tooltip_" title="Estimated  number of new cases in 2020 by continents" href="https://gco.iarc.fr/today/online-analysis-pie?v=2020&mode=population" target="_blank"><img src="../assets/img/carousel/screen.1.0.png"></a></li>
	                
	                <li><a data-tooltip="tooltip_" title="Estimated number of deaths in 2020, all cancers, both sexes, all ages" href="https://gco.iarc.fr/today/online-analysis-map?v=2020&mode=population&mode_population=continents&population=900&populations=900&key=total&sex=0&cancer=39&type=1" target="_blank"><img src="../assets/img/carousel/screen.1.1.png"></a></li>

	                <li><a href="https://gco.iarc.fr/today/online-analysis-multi-bars?type_multiple=%257B%2522inc%2522%253Atrue%252C%2522mort%2522%253Atrue%252C%2522prev%2522%253Afalse%257D" target="_blank"><img src="../assets/img/carousel/screen.1.6.png"></a></li>

	                <li><a href="https://gco.iarc.fr/today/online-analysis-table" target="_blank"><img src="../assets/img/carousel/screen.1.2.png"></a></li>
	                
	                
	              </ul>
	            </div>
	          </div>
	        </div>
	      </div>

	      <div class="carousel_item c_overtime">
	        <div class="container">
	          <div class="row">
	            <div class="col-md-6">
	              <a href="https://gco.iarc.fr/overtime" id="a_link_2" target="_blank" class="link_modal a_first_link" data-tooltip="tooltip" data-placement="left" title="Explore changing trends in cancer incidence and mortality over the course of half a century in 60 countries">
	                  <img src="../assets/img/home/over_time.png" class="project"></a>
	            </div>
	            <div class="col-md-6 right_b">
	              <p><a href="https://gco.iarc.fr/overtime" class="link_modal"></a></p>
	              <ul class="screenshots">
	              	<li><a data-tooltip="tooltip_" title="Cancer Over Time" href="https://gco.iarc.fr/overtime/en/dataviz/trends?populations=75200&sexes=1_2&types=1" target="_blank"><img src="../assets/img/carousel/screen.2.2.png"></a></li>
	              	<li><a data-tooltip="tooltip_" title="Cancer Over Time" href="https://gco.iarc.fr/overtime/en/dataviz/age_specific?populations=75200_35600&sexes=2&cancers=16" target="_blank"><img src="../assets/img/carousel/screen.2.4.png"></a></li>
	                <li><a data-tooltip="tooltip_" title="Cancer Over Time" href="https://gco.iarc.fr/overtime/en/dataviz/cohorts?populations=75200&sexes=2" target="_blank"><img src="../assets/img/carousel/screen.2.1.png"></a></li>
	                <li><a data-tooltip="tooltip_" title="Cancer Over Time" href="https://gco.iarc.fr/overtime/en/dataviz/bars?sexes=1_2&sort_by=value2" target="_blank"><img src="../assets/img/carousel/screen.2.3.png"></a></li>
	              </ul>
	            </div>
	          </div>
	        </div>
	      </div>
	      
	      <div class="carousel_item c_tomorrow">
	        <div class="container">
	          <div class="row">
	              <div class="col-md-6">
	                <a href="https://gco.iarc.fr/tomorrow" id="a_link_3" class="a_first_link" target="_blank" data-tooltip="tooltip" data-placement="left" title="Predict the future cancer incidence and mortality burden worldwide up until 2040.">
	                    <img src="../assets/img/home/tomorrow.png" class="project">
	                  </a>
	              </div>
	              <div class="col-md-6 right_b">
	                <p><a href="https://gco.iarc.fr/tomorrow" target="_blank"></a></p>
	                <ul class="screenshots">
	                  <li><a data-tooltip="tooltip_" href="https://gco.iarc.fr/tomorrow/en/dataviz/isotype?types=0&sexes=0&mode=population&group_populations=1&multiple_populations=1&multiple_cancers=0&cancers=39&populations=903_904_905_908_909_935" title="Estimated number of new cases from 2020 to 2040, Males & Females, age [0-85+]" target="_blank"><img src="../assets/img/carousel/screen.3.1.svg"></a></li>
	                  <li><a data-tooltip="tooltip_" title="Estimated number of new cases from 2020 to 2040, Males & Females, age [0-85+]" href="https://gco.iarc.fr/tomorrow/en/dataviz/bubbles?types=0&sexes=1_2&mode=population&group_populations=0&multiple_populations=1&multiple_cancers=1&cancers=39&populations=903_904_905_908_909_935&apc=cat_ca20v1.5_ca23v-1.5&group_cancers=1" target="_blank"><img src="../assets/img/carousel/screen.3.2.svg"></a></li>
	                  <li><a href="https://gco.iarc.fr/tomorrow/en/dataviz/bars?types=0&sexes=0&mode=population&group_populations=0&multiple_populations=1&multiple_cancers=1&cancers=39&populations=903_904_905_908_909_935&apc=cat_ca20v1.5_ca23v-1.5&group_cancers=1" target="_blank"><img src="../assets/img/carousel/screen.3.2.png"></a></li>
	                  <li><a href="https://gco.iarc.fr/tomorrow/en/dataviz/trends?types=0&sexes=2&mode=cancer&group_populations=0&multiple_populations=0&multiple_cancers=1&cancers=20_23&populations=910&apc=cat_ca20v1.5_ca23v-1.5" target="_blank"><img src="../assets/img/carousel/screen.3.3.svg"></a></li>
	                

	                </ul>
	              </div>
	          </div>
	        </div>
	      </div>

	      <div class="carousel_item c_causes">
	        <div class="container">
	          <div class="row">
	              <div class="col-md-6">
	                <a href="/causes" data-tooltip="tooltip" id="a_link_4" class="a_first_link" data-placement="left" title="Explore which cancers are attributable to key lifestyle and environmental risk factors worldwide.">
	                  <img src="../assets/img/home/causes.png" class="project">
	                </a>
	              </div>
	              <div class="col-md-6 right_b">
	                <p><a href="/causes" data-toggle="modal"></a></p>
	                <ul class="screenshots screenshots_causes">
	                	

	                  <li><a data-tooltip="tooltip" title="Cancer Attributable to Obesity" href="https://gco.iarc.fr/causes/obesity" target="_blank"><label>Obesity</label><i class="fas fa-weight"></i></a></li>
	                  <li><a data-tooltip="tooltip" title="Cancer Attributable to Infections" href="https://gco.iarc.fr/causes/infections" target="_blank"><label>Infections</label><i class="fas fa-viruses"></i></a></li>
	                  <li><a data-tooltip="tooltip" title="Cancers Attributable to UV Radiation" href="https://gco.iarc.fr/causes/uv" target="_blank"><label>UV Radiation</label><i class="fas fa-sun"></i></a></li>
	                  <li><a data-tooltip="tooltip" title="Cancers Attributable to Alcohol" href="/causes/alcohol" target="_blank"><label>Alcohol</label><i class="fas fa-wine-glass-alt"></i></a></li>



	                </ul>
	              </div>
	          </div>
	        </div>
	      </div>

	      <div class="carousel_item c_survival">
	        <div class="container">
	          <div class="row">
	              <div class="col-md-6">
	                <a href="https://gco.iarc.fr/survival/survmark" id="a_link_5" class="a_first_link" target="_blank" data-tooltip="tooltip" data-placement="left" title="Compare cancer survival between countries and over time and incidence and mortality statistics over time and most recent period.">
	                    <img src="../assets/img/home/survival.png" class="project">
	                  </a>
	              </div>
	              <div class="col-md-6 right_b">
	                <p><a href="https://gco.iarc.fr/survival/survmark" target="_blank"></a></p>
	                <ul class="screenshots">
	                  <li><a data-tooltip="tooltip_" title="Age-standardized 1-year net survival, both sexes, age (15-99), colon cancer, 2010-2014" href="https://gco.iarc.fr/survival/survmark/visualizations/viz7/?mode=%22bar%22&sub_mode=%22all%22&groupby=%22country%22&period=%221%22&cancer=%22Colon+cancer%22&country=%22Australia%22&gender=%220%22&stage=%22SEER%22&age_group=%2215-99%22&show_ci=%22%22" target="_blank"><img src="../assets/img/carousel/screen.5.0.png"></a></li>
	                  <li><a data-tooltip="tooltip_" title="Age-standardized 1-year net survival, both sexes, by age groups, colon cancer, 2010-2014" href="https://gco.iarc.fr/survival/survmark/visualizations/viz7/?mode=%22bar%22&sub_mode=%22ages%22&groupby=%22country%22&period=%221%22&cancer=%22Colon+cancer%22&country=%22Australia%22&gender=%220%22&stage=%22SEER%22&age_group=%2215-99%22&show_ci=%22%22" target="_blank"><img src="../assets/img/carousel/screen.5.1.png"></a></li>
	                  <li><a href="https://gco.iarc.fr/survival/survmark/visualizations/viz7/?mode=%22circle%22&groupby=%22country%22&period=%221%22&cancer=%22Colon+cancer%22&country=%22Australia%22&gender=%220%22&stage=%22SEER%22&age_group=%2215-99%22&show_ci=%22%22" target="_blank"><img src="../assets/img/carousel/screen.5.2.png"></a></li>
	                  <li><a href="https://gco.iarc.fr/survival/survmark/visualizations/viz8/" target="_blank"><img src="../assets/img/carousel/screen.5.3.png"></a></li>

	                </ul>
	              </div>
	          </div>
	        </div>
	      </div>

	      <div class="carousel_item c_at_csu">
	        <div class="container">
	          <div class="row">
	              <div class="col-md-6">
                   <a href="/projects" data-tooltip="tooltip" id="a_link_6" data-placement="left" title="Our collection of surveillance databases, tools and related research projects"><img src="../assets/img/home/at_csu.png" class="project"></a>
	              </div>
	              <div class="col-md-6 right_b">
	                <p><a href="/projects"></a> </p>
	                <ul class="screenshots">
	                  <li><a href="https://nordcan.iarc.fr" data-tooltip="tooltip" title="Nordcan" target="_blank"><img src="../assets/img/carousel/screen.6.0.png"></a></li>
	                  <li><a href="https://gicr.iarc.fr" data-tooltip="tooltip" title="Global Initiative for Cancer Registry" target="_blank"><img src="../assets/img/carousel/screen.6.1.png"></a></li>
	                  <li><a href="http://www.iacr.com.fr" data-tooltip="tooltip" title="International Association for the Cancer Registration" target="_blank"><img src="../assets/img/carousel/screen.6.2.png"></a></li>
	                  <li><a title="Infographics" href="/projects/infographics" ><img src="../assets/img/home/story1.png"></a></li>
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
          	<div class="container_social">
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
          </div>

          <div class="col-md-4" style="padding-right:15px;">
          	<div class="container_social" id="container_social_twitter">
	            <div class="right_bloc" id="bloc_twitter">
	              <a class="twitter-timeline" data-height="320" href="https://twitter.com/GLOBOCAN_GCO?ref_src=twsrc%5Etfw">Twitter feed by GLOBOCAN_GCO</a> 
	            </div>
	         	</div>
          </div>

          <div class="col-md-4">
          	<div class="container_social">
	            <div class="right_bloc" id="bloc_updates">
	              <h2>Latest CSU branch updates</h2> 
	              <ul class="updates">
	                <li v-for="item in news" :key="item.id">
				      			<h4>{{ item.date }}</h4>
				      			<a :href="item.url" target="_blank">{{ item.desc }}</a> 
			    				</li>
	              </ul>
	            </div>
	          </div>
          </div>

        </div>
      </div>
    </div>
	
</template>

<script>
import { reactive,computed,onMounted } from "vue";
import { useStore } from 'vuex'
import modal from '../components/Modal.vue' ;
import news from '../assets/data/news.json'
import { VBTooltip } from 'bootstrap-vue';
import axios from 'axios'

export default {
	name : 'home' , 
	components : { modal } , 
	setup(){ 
		onMounted(() => {

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
	      news : news , 
	      theme : ''
	    }
  	},
	created(){
		setTimeout(() => {			
 			let slider = $('.carousel_m').slick({
        dots: true ,
        autoplay : true ,
        fade: true,
        autoplaySpeed : 7000
      });

      slider.on('beforeChange', function(slick, currentSlide){
				let _index = currentSlide.currentSlide+1 ; 
				$(`a#a_link_${_index}`).tooltip('hide');
			});

      slider.on('afterChange', function(slick, currentSlide){
				let _index = currentSlide.currentSlide+1 ; 
				setTimeout(()=>{ $(`a#a_link_${_index}`).tooltip('show')},500) ; ;
			});

      setTimeout(()=>{
      	$('a#a_link_1').tooltip('show');
      	
      	/*$('ul.slick-dots li').on('click',function(i,el){
      		let _index = $(this).children().text() ; 
      		setTimeout(()=>{ $(`a#a_link_${_index}`).tooltip('show')},750) ; ;
      	});*/

      },500) ; 

      twttr.widgets.load()

		},250)		
		
		// axios.get('https://platform.twitter.com/widgets.js') ; 
	},
	mounted(){
		$('a[data-tooltip="tooltip"]').tooltip()
	},
	unmounted() {
   	// console.info("unmounted") ;
   	$('.carousel_m').slick('unslick');
  }
  
}
</script>

<style lang="scss">
	
	.metaball1{
		position: absolute;
		right: 10px; 
		top: 20%; 
		z-index: 2;
	}
  .carousel_m{
    max-height: 520px; 
    overflow-y: hidden;
  }

  .carousel_item{
    padding-top: 45px;
    min-height: 520px;
    a{
    	display: inline-block;
	    float: right;
    }
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
  .c_at_csu{
  	 background: linear-gradient(to bottom right, #EE9FC0, #EE9FC0);
  }
  .c_projects{
    background: linear-gradient(to bottom right, #F76E7A, #F94555);
  }

  .slick-dots{
    bottom: 45px !important;
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
    min-height: 320px;
  }

  .right_b p{
  	display: none ;
  }

  .right_b a{
    color: #000 !important; 
  }

  .right_b ul.screenshots{
    position: absolute ;  
    bottom: -2px;
  }

  .right_b ul.screenshots:not(.screenshots_causes) li{
    list-style-type: none; 
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    /*width: 235px;
    height: 135px;*/
    width: 210px;
    height: 120px;
    background: #fff ; 
    border: solid 1px #ccc;
    border-radius: 10px;
  }

  .right_b ul.screenshots.screenshots_small li{
    list-style-type: none; 
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    width: 150px;
    background: #fff ; 
    border: solid 1px #ccc;
  }

  .right_b ul.screenshots_causes{
  	margin-bottom: 16px;
  	li{
	  	list-style-type: none;
	    /* display: block; */
	    margin-right: 15px;
    	min-width: 208px;
	    float: left;
	    height: 118px;
	    background: #fff;
	    border-radius: 10px; 
	    margin-top: 15px;
	    a{
	    	padding:7px 5px !important;
	    }
	    label{
	    	display: block;
	    	width: 100%;
	    	text-align: center;
	    	margin-bottom: 10px;
	    }
	    i{
	    	color: #19B478 ;
	      display: inline-block;
	      margin: auto;
	      font-size: 5em;
	      width: 100%;
	      text-align: center;
	    }
	  }
	}

  .right_b ul.screenshots li a{
    padding: 5px ; 
    display: block ; 
    width: 100%;
    height: 100%;
  }

  .right_b ul.screenshots li img{
    /*max-height: 65px;*/
    text-align: center;
    margin: auto;
    height: 100%;
  }

  .right_multiple ul.screenshots li{
    width: 135px;
    display: none ; 
    height: auto ; 
  }

  .slick-dots li button:before{
    display: none ; 
  }

  .slick-dots li{
    width: 110px;
    height: 80px;  
    border-radius: 4px;
    background-size: 100%;
    border: solid 2px transparent;
    background-repeat: no-repeat;
  }

  .slick-dots li:first-child{
    background-image:url('/src/assets/img/home/today.png');
  }

  /*.slick-dots li:nth-child(2){
    background-image:url('.../assets/img/today-plus.png');
  }*/

  .slick-dots li:nth-child(2){
    background-image:url('/src/assets/img/home/over_time.png');
  }

  .slick-dots li:nth-child(3){
    background-image:url('/src/assets/img/home/tomorrow.png');
  }

  .slick-dots li:nth-child(4){
    background-image:url('/src/assets/img/home/causes.png');
  }

  .slick-dots li:nth-child(5){
    background-image:url('/src/assets/img/home/survival.png');
  }

  .slick-dots li:nth-child(6){
    background-image:url('/src/assets/img/home/at_csu.png');
  }

  /*.slick-dots li:nth-child(7){
    background-image:url('/src/assets/img/home/projects.png');
  }*/

  .slick-dots li.slick-active{
    border:solid 2px #fff ;
  }

  .slick-slide img.project{
  	min-width: 410px;
  }


  div#social {
    margin-bottom: 0px;
  }

  a.show_all{
    margin-top: 14px;
  }

</style>