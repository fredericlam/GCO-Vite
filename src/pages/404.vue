<template>
 	
 	<div class="row main-zone">

      <div class="container splash">
          
          <h1>Error: THE PAGE YOU HAVE REQUESTED DOES NOT EXIST</h1>

          <div class="breadcrumb">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About the GCO project</a></li>
              </ul>
          </div>

          <div class="row">

            <div class="col-md-12">

              <p>You can try one of these options:
                <ol>
                  <li>Return to the <a href="/">Global Cancer Observatory Home Page</a>.</li>
                  <li>Check again to make sure the URL you typed has correct capitalization and punctuation.</li>
                  <li>Or visit one of the project above</li>
                </ol>
              </p>
              
            </div>

          </div>

          <div class="row">

              <div v-for="project in projects" class="col-md-3">
                <div class="project_csu" v-bind:style="{ backgroundColor : project.background } ">
                    <a class="a_link" :href="project.url" target="_blank">
                      <h3>{{ project.name }}</h3>
                      <p v-html="project.desc"></p>
                    </a>
                </div>

              </div>

          </div>
            

      </div>

    </div>

</template>

<script>
import { reactive,computed } from "vue";
import func from '../func'
import projects from '../assets/data/projects.json'

export default{
  name : "404" ,
  components: {
  },
  data () {
    return {
    projects: projects.map((p)=>{
       // console.info(g) ; 
      p.tags_class = '' ; 
      let modal = ( p.overlay == false ) ? '' : `#modal_${p.id}` ; 
      if ( p.tags == undefined ) return ; 
      let tags_class = 'grid-item '+p.tags.join(' ') ; 
      p.tags_class = ['grid-item'].concat(p.tags) ; 
      
      p.modal = modal ; 
      
      return p ; 

    }).filter((g)=>g!=undefined).slice(0,4) , 
    grid : {} , 
    tags : [ { key : '*' , name : 'All' } ]
    }
  },
  mounted(){
    console.info(this.projects) ; 
  }
}
</script>	