<template>
	<div class="row main-zone">

      <div class="container splash">
          
       	<h1>Projects</h1>

        <div class="breadcrumb">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </div>

     		<p style="padding: 0;">This is the list of all CSU Branch projects.</p>

          	<div class="row">
              
            <div class="swiped_container">
              <div class="swiped">
              	<ul id="tags">
                	<li v-for="tag in tags">
                      <a href="javascript:void(0);" :attr-tag="tag.key" @click="showTag(tag.key)" :class="tag.class_name">
                        {{ tag.name }}
                      </a>
                    </li>
                </ul>
              </div>
            </div>

            <div class="col-md-12">
           
              <div id="projects" class="row grid">
              	<div v-bind:class="project.tags_class" v-for="project in projects">
  	              <div class="project_csu" v-bind:style="{ backgroundColor : project.background } ">
                    <a class="a_link a_project" :href="project.url" target="_blank">
    	                <h3>{{ project.name }}</h3>
    	                <p v-html="project.desc"></p>
                    	<!--<a class="link" :href="project.url" target="_blank" v-if="project.internal!=true"> See website <i class="fa fa-external-link" aria-hidden="true"></i></a>
                      <a class="link" :href="project.url" v-if="project.internal==true"> Read more <i class="fa fa-internal-link" aria-hidden="true"></i></a>-->
                    </a>
  	              </div>
	             </div>
              </div>
            
            </div>

          </div>

	    </div>
	</div>

</template>

<script>
import projects from '../assets/data/projects.json'
import func from '../func'
import { computed } from 'vue'


var $grid ; 

export default {
  name: 'graphics',
  setup(){
  },
  data () {
    return {
      hash : '',
  		projects: projects.map((p)=>{
  	     // console.info(g) ; 
  			p.tags_class = '' ; 
        let modal = ( p.overlay == false ) ? '' : `#modal_${p.id}` ; 
        if ( p.tags == undefined ) return ; 
        let tags_class = 'grid-item '+p.tags.join(' ') ; 
        p.tags_class = ['grid-item'].concat(p.tags) ; 
        
        p.modal = modal ; 
  	    
  		  return p ; 

  		}).filter((g)=>g!=undefined) , 
  		grid : {} , 
  		tags : [ { key : '*' , name : 'All' } ]
    }
  },
  mounted(){

    let hash  = window.location.hash.replace('#',''); 
    this.hash = hash ;

  	let tags_tmp = [] ;
  	this.projects.forEach((item) => {
    	tags_tmp = func.arrayUnique(tags_tmp.concat(item.tags)) ; 
    });

  	tags_tmp.forEach( (tag)=>{
		let tag_name = tag.charAt(0).toUpperCase() + tag.slice(1)

    // exception datavisualization
    tag_name = tag_name.replace('Datavisualization','Data visualisation') ;

		this.tags.push( { 
        key : tag , 
        name : tag_name , 
        class_name : (this.hash==tag)?'active tag':'tag' 
      } ) ; 
  	})

  	setTimeout(() => {
      $grid = $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        filter : (this.hash!='')?`.${hash}`:'*'
      });

      $('#projects').animate({'opacity':1},1000);

    }, 500 ) ; 

  },

  methods : {

  	/**
  	* Filter projects tags
  	* @param (string) tag name
  	* @return (no return)
  	*/
  	showTag : function(tag){
  		let tags = [] ; 

  		if ( tag != '*')
        {
          tags = [tag] ; 
          
          let str_tags = '' ; 
          tags.forEach( (t,i)=> { 
            let comma = (tags.length>1&&(i!=tags.length-1))?',':'';
            str_tags += `.${t}${comma} `;
          })
          // console.info("str_tags",str_tags) ; 
          
          $grid.isotope({ filter:str_tags });

          $('ul#tags li a').removeClass('active') ; 

          tags.forEach( t=> {
            $('ul#tags li a[attr-tag="'+t+'"]').addClass('active') ; 
          });

          // console.info( this.$router ) ; 
          this.$router.push({ 'hash' : `#${tag}` })
        }
        
        // mode reset
        if ( tags.length == 0 || tag == '*')
        {
          tags = [] ; 
          $grid.isotope({ filter: '*' });
          $('ul#tags li a').removeClass('active') ; 
          $('ul#tags li a[attr-tag="*"]').addClass('active') ; 
          this.$router.push({ 'hash' : `` })
        }
  	} // end showTag
  }
}
</script>

<style lang="scss">

ul#tags{
	padding-left: 15px;
  li{
    margin:10px 4px 0px 0;
  }
}
#projects{
	opacity: 0 ; 
  margin-left: 0px;
  margin-right: 0px;

  .project_csu{
    padding: 0px!important;
    a.a_project{
      padding: 15px;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}



a#btn-download{
  position: absolute;
  right: 20px;
  bottom: 13px;
  z-index: 3;
}
a#btn-download i{
  font-size: 3em;
  
}

button#btn-close{
  position: absolute;
  right: 10px;
  top: 10px
}
select.selector{
  width: 150px;
  margin-bottom: 10px;
}

</style>