<template>
 	
 	<div class="row main-zone">

      <div class="container splash">
          
          <h1>Infographics</h1>

          <div class="breadcrumb">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/projects/infographics">Infographics</a></li>
              </ul>
          </div>

          <div class="row">

            <div class="col-md-8">

              <p>An expanding set of infographics built with <a href="https://infogram.com/" target="_blank">infogram</a>.</p>   

              <div class="row">
                <div class="col-md-6" v-for="infogram in infograms">
                  <div class="project aim infogram">
                    <a class="a_link" :href="infogram.url" target="_blank">
                      <h3>{{ infogram.name }}</h3>
                      <p>
                      	<img :src="infogram.thumb" :title="infogram.name" align="left">
                      	<!--<a class="link" :href="infogram.url" target="_blank">Read more <i class="fa fa-external-link" aria-hidden="true"></i></a>-->
                      </p>
                    </a>

                  </div>
                </div>

              </div>

            </div>

            <div class="col-md-4">

             <SideBar/>

            </div>

          </div>
            

      </div>

    </div>

</template>

<script>
import { reactive,computed } from "vue";
import SideBar from '../components/SideBar.vue' ;
import infograms from '../assets/data/infogram.json'

export default{
  name : "WhoWeAre" ,
  components: {
    SideBar
  },
  data () {
    return {
  		infograms : infograms
  	}
  }
}
</script>	

<style lang="scss">
  .infogram{
    background: #F76E7A;
    min-height: 200px;
    position: relative ; 
    h3{
    	color: #fff ; 
    }
    a.a_link{
    	display: inline-block; 
    	/*position:absolute ; 
  	    right: 10px;
	    color: #fff !important;
	    bottom: 10px;*/
      width: 100%;
      height:100%;
      h3{
        padding: 10px 0 ;
      }
    }
  }
</style>