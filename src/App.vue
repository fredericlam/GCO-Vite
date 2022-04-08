<template>

	<header>
	  	<div class="row">
		  <div class="container heading">
		    <a class="navbar-brand" href="http://www.iarc.fr/">
		    	<img src="/img/logo-iarc.svg" v-if="theme!='theme1'">
		    	<img src="/img/logo-iarc-white.svg" v-if="theme=='theme1'">
		    </a>
		    <div class="intro">
		      <a href="/">
		      	<img src="./assets/img/GCO-logo-with-text.png" v-if="theme=='theme1'" />
		      	<img src="./assets/img/GCO-logo-with-text-blue.png" v-if="theme!='theme1'" />
		      </a>
		    </div>
		    <ul class="social">
		      <li>
		      	<a href="https://www.linkedin.com/groups/3713610/profile" target="_blank">
		      		<i class="fab fa-linkedin"></i>
		      	</a>
		      </li>
		      <li>
		      	<a href="http://www.iarc.fr/en/feeds/index.php" target="_blank">
		      		<i class="fas fa-rss-square"></i>
		      	</a>
		      </li>
		      <li>
		      	<a href="https://twitter.com/iarcwho" target="_blank">
		      		<i class="fab fa-twitter-square"></i>
		      	</a>
		      </li>
		    </ul>
		  </div>
		</div>

		<nav class="navbar navbar-inverse navbar-reverse" role="navigation">
	      <div class="container">
	        <div class="navbar-header">
	          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	            <span class="sr-only">Toggle navigation</span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	          </button>
	        </div>
	        <div id="navbar" class="navbar-collapse collapse">
	            <ul class="nav navbar-nav navbar-nav-new">
	            	<li>
	            		<a href="javascript:document.location.href='/'" :class="classHome">
	            			Home
	            		</a>
	            	</li>
	              <li v-for="route in routes" :key="route.path">
	              	<router-link :to="route.to" :class="{ active: isActive(route.to) }">
	              		{{route.text}}
	              	</router-link>
	              </li>
	              
	              <!--<li><a href="#about" data-toggle="modal" class="hvr-fade">About</a></li>
	              <li><a href="/graphics.php" data-toggle="modal" class="hvr-fade">Graphics</a></li>
	              <li><a href="/projects.php" class="hvr-fade">Projects</a></li>
	              <li><a href="/who-we-are.php" class="hvr-fade">Who we are</a></li>
	              <li><a href="/help.php" class="hvr-fade">Help</a></li>-->
	            </ul>
	        </div><!--/.navbar-collapse -->
	      </div>
	    </nav>
	</header>

	<main>
		<router-view />
	</main>

  <!--<footer>
      <p class="smaller">IARC, 150 Cours Albert Thomas, 69372 Lyon CEDEX 08, France - Tel: +33 (0)4 72 73 84 85 - <a href="http://www.iarc.fr/en/privacy.php" target="_blank"> Privacy Policy </a>  © IARC - {{ date }} - All Rights Reserved.</p>
  </footer>-->

  <footer>
      <div class="follow">
        <div class="container">
	        <div class="content">
	          <h4> Connect with us </h4>
	          <ul class="social">
	            <li><a href="https://twitter.com/GLOBOCAN_GCO" target="_blank"><i class="fab fa-twitter"></i></a></li>
	            <li><a href="https://www.youtube.com/channel/UCw1sEvFsKqLLRmKQdaOSs9A" target="_blank"><i class="fab fa-youtube"></i></a></li>
	            <li><a href="https://www.linkedin.com/company/102821/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
	            <li><a href="https://www.iarc.fr/iarc-rss-feeds/" target="_blank"><i class="fas fa-rss"></i></a></li>
	          </ul>
	        </div>
	      </div>
      </div>

      <div class="content">
      	<div class="container">
	        <div class="footer">

	          <div class="row">
	            <div class="col-md-9">   

	              <div class="row">
	              	<div class="list_link_projects">
		              	<div class="col-md-3" v-for="project in projects">
		              		<a :href="project.url" :title="project.name" target="_blank" class="footer_link_project">{{ project.name }}</a>
		              	</div>
		              </div>
	              </div>
	                   
	            </div>

	            <div class="col-md-3">
	              <ul class="footer_links">
	                <li><h5> Contact </h5></li>
	                <li>
	                   <i class="fas fa-home"></i> <span class="txt_contact">150 Cours Albert Thomas,<br/> 69372 Lyon CEDEX 08, France</span> 
	                </li>
	                <li>
	                   <a href="mailto:csu@iarc.fr"><i class="fas fa-envelope"></i> <span class="txt_contact">Contact us</span> </a>
	                </li>
	                <li class="terms">
	                   <a href="http://publications.iarc.fr/Terms-Of-Use" target="_blank">Terms of use </a>
	                </li>
	                <li class="terms">
	                   <a href="https://www.iarc.fr/privacy-policy/" target="_blank"> Privacy Policy </a> 
	                </li>
	              </ul>
	            </div>
	          </div>

	          <div class="copyright">© <a href="https://www.iarc.fr/copyright-notice/" target="_blank"><strong>IARC</strong> © IARC 1965-{{ date }} — All Rights Reserved</a></div>
	        </div>
	      </div>
      </div>

  </footer>

</template>

<script>
import { reactive,computed } from "vue"
import { useRouter } from "vue-router"
import Theming from './components/Theming.vue'
import projects from './assets/data/projects.json'

var date = new Date() 

const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

export default {
	name : "GCO" , 
	components: {
    Theming
  },
	setup() {
		const router = useRouter();

   	const routes = [
      //{ to: "/", text: "Home" },
      { to: "/about-the-gco", text: "About the GCO"},
      //{ to: "/graphics", text: "Graphics"},
      { to: "/projects", text: "Projects"},
      { to: "/about-us", text: "About us"},
      { to: "/help", text: "Help"}
    ];

    const activeRoute = computed(() => router.currentRoute.value.path);
    const isActive = path => path === activeRoute.value

    return { isActive, routes };
	}, 
	data() {
		return {
			//date : `${monthNames[date.getMonth()]} ${date.getFullYear()}`,
			date : `${date.getFullYear()}`,
			theme : '' , 
			classHome : '',
			projects: projects.filter((proj)=>proj!=undefined&&proj.is_footer==true) , 
		}
	},
	mounted(){
		const router = useRouter();
		this.classHome = (router.currentRoute.value.path=='/')?'active':''
	},
	watch:{
    $route (to, from){
      if ( to.path != '/') this.classHome = '' ;
		}
	}
};
</script>

<style lang="scss">

a.link_modal{
	cursor: pointer;
}

.tooltip{
	z-index: 999;
}

.tooltip.left .tooltip-arrow {
  border-left-color: #037AB3;
}

.breadcrumb {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: .75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: .25rem;
  background: #ffffff ;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 10px 15px 10px 0;

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul > li {
    display: flex;
    float: left;
    height: 10px;
    width: auto;
    color: #000 ;
    font-weight: bold;
    font-size: .8em;
    cursor: default;
    align-items: center;
  }

  ul > li:not(:last-child)::after {
    content: '/';
    float: right;
    font-size: .8em;
    margin: 0 .5em;
    color: #000 ;
    cursor: default;
  }

  .linked {
    cursor: pointer;
    font-size: 1em;
    font-weight: normal;
  }  
}

a.a_link{
  text-decoration: none;
  h3{
    margin:0 0 10px 0;
    position: relative;
    height: 55px;
  }
  h3::after {
    position: absolute;
    content: "";
    width:0%;
    height: 2px;
    background-color: whitesmoke;
    left: 0px;
    top: 55px;
    transition: all 0.2s ease-in-out;
  }
  &:hover h3::after {
    width: 100%;
    left: 0;
  }
}

#bloc_publications{
  height: 270px!important;
  max-height: 270px!important;
}

ul.pubs,ul.updates{
  height: 230px;
  padding-left:10px!important;
}

#bloc_publications h2, .timeline-Header-title,#bloc_updates h2{
  padding: 7px 10px!important;
  font-size: 1.3em;
  font-weight: 500;
}

.container_social{
  height: 300px;
  margin-bottom: 10px;
  /*border: solid 1px #ccc;
  border-top: 2px solid #1e7fb8;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);*/
}

footer{
  background: #ededed;
  font-size:.8em;
  color: #000;
  bottom: 0;
  width:100%;
  height:100%; 
  z-index:5; 
  padding: 0 0 10px 0;
  .footer{
    a{
      color: #000;
      &:hover{
        color:#ccc;
      }
    }
    .list_link_projects{
    	margin-top: 5px;
	    a.footer_link_project{
	    	color: #3c3c3c;
		    font-size: 13px;
		    font-weight: bold;
		    line-height: 150%;
		    letter-spacing: 1.44px;
		    text-transform: uppercase;
		    margin-top: 15px;
		    display: block;
	    }
	  }
    .copyright{
      text-align: center; 
    }
    .legals{
      text-align: right;
      margin-top: -20px;
    }
    ul.links{
      padding-left: 0 ;
      li{
        list-style-type: none;
        float: left ; 
        display: inline-block; 
        margin: 10px 20px 10px 0 ;
        img{
          max-height: 120px;
          margin-right: 3px;
          float: left;
        }
      }
    }
    
  }

  ul.registries{
    padding-left:0px;
    li{
      display: inline-block;
      list-style-type: none;
      width: 20%;
      height: 30px;
      text-align: center;
      padding: 20px 0px 50px 0px;
      float: left;
      a.icon{
        color:#fff!important;
        display:block;
        margin-right:5px;
      }
      h5{
        display: block;
        width: 80%;
        text-align: left;
        padding: 0;
        margin: 0;
        font-size: 1em;
        a{
          color:#000!important;
          text-decoration: none;
          
          &:hover{
            color:#ccc;
            text-decoration: underline;
          }
        }
      }
    }
  }
}

ul.social_home,ul.social{
  position: absolute;
  right: 0;
  top: -5px;
  li{
    display: inline-block;
    margin: 5px;
    i{
      font-size: 1.6em;
      color: #1E7FB8 ;
    }
  }
}

ul.social{
  top: 20px;
}

header ul.social{
  display: none; 
}

ul.social_home{
  display: none;
}

ul.footer_links{
  padding-left:0px;
  li{
    display: inline-block;
    list-style-type: none;
    height: 30px;
    padding: 10px 20px 10px 50px;
    width: 100% ; 
    text-align: left ; 
    color: #3d3d3d;
    margin-bottom: 10px;
    font-size: 1.2em;
    &.terms{
      height: 10px!important;
      padding: 0px 20px 0px 0px!important;
      &:first-child{
        margin-top: 30px;
      }
    }
    h5{
      text-transform: uppercase;
      font-size: 1.4em; 
      font-weight: 800 ; 
    }
    a{
      color:#000!important;
      text-decoration: none;
      &:hover{
        color:#ccc;
        text-decoration: underline;
      }
    }
    i{
      color: #808080; 
      display: block; 
      float: left;
      font-size: 1.2em;
      margin: 3px 10px 0 0;
    }
    span.txt_contact{
      float: left; 
      display: block ; 
      line-height: 1.6em;
    }
    
  }
}

h5.publishing{
  text-transform: uppercase;
  font-size: 1.4em; 
  font-weight: 800 ; 
  padding-top:10px ; 
}

.follow{
  background: #1E7FB8 ;
  padding: 5px 0 5px 0 ;
  .content{
    position: relative ; 
    ul.social{
      top: auto;
      bottom: -22px;
      right: 15px;
      li{
        border-left: solid 1px #ccc ;
        padding-left: 10px;
        &:first-child{
          border-left: none ;
        }
        a{
          i{
            color: #ccc ; 
            font-size: 1.6em;
          }
          &:hover{
            i{
              color: #ccc ;
            }
          }
        }
      }
    }
  }
  h4{
    color: #fff ; 
    font-size: 1.6em;
    font-weight: 500 ; 
    padding-left: 0; 
  }
  
}

//breackpoint phone {
@media (max-width: 779px) { 

	.carousel_item{
		max-height: 420px!important;
	}
	.carousel_m{
		max-height: 420px!important;
	}

	.slick-prev, .slick-next{
		top: 35%;
	}

	.slick-dots li {
    width: 60px!important;
    height: 45px!important;
	}

	.slick-slide img.project {
    min-width: auto!important;
    max-height: 180px;
    margin: auto;
	}

	.carousel_item a {
    display: block!important;
    float: none!important;
	}

	.right_b{
		display: none;
	}

	.container_social{
		margin-bottom: 20px!important;
		.col-md-4{
			padding-left: 0px;
			padding-right:0px;
		}
	}

  #container_social_twitter{
  	margin-right:15px;
  }

  /*.swiped_container{
  	margin: 20px 0 ; 
  }

  .swiped{
  	margin: 0px;
  }

  ul#tags{
  	display: flex; 
  	width: 100%;
  	overflow-x: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    height: 50px;
    li{
    	box-sizing: content-box;
    }
  }*/

  .project_csu{
  	height: 300px;
  }

  .grid-item{
		width: 50%;
	}
}

@media (min-width: 780px) and (max-width: 990px) { 
	.carousel_item{
		position: relative;
		.right_b{
			position: absolute!important;
	    top: 30px;
    	margin-left: 50%;
	    width: 50%;
		}
		.right_b ul.screenshots_causes li{
			width: 30% !important;
	    min-width: 70px;
	    height: auto;
		}
	}
	.carousel_item a{
		float: none!important;
	}
	.right_b ul.screenshots:not(.screenshots_causes){
		li{
			display: block!important;
		}
	 	li:nth-child(3),li:nth-child(4){
			display: none!important;
		}
	}
}

</style>
