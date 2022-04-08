<template>
 	
 	<div class="row main-zone">

      <div class="container splash">
          
          <h1>Cancer Causes</h1>

          <div class="breadcrumb">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/causes">Cancer Causes</a></li>
              </ul>
          </div>

          <div class="row"> 

            <div class="col-md-8">

              <p>Explore which cancers are attributable to key lifestyle and environmental risk factors worldwide.</p>   

              <div class="row">
                <div class="col-md-6">
                  <div class="project aim cause">
                    <a href="https://gco.iarc.fr/causes/obesity">
                      <h3>Obesity</h3>
                      <p>
                        <i class="fas fa-weight"></i>
                      </p>
                    </a>
                    
                  </div>
                </div>

                 <div class="col-md-6">
                  <div class="project aim cause">
                    <a href="https://gco.iarc.fr/causes/infections">
                      <h3>Infections</h3>
                      <p>
                        <i class="fas fa-viruses"></i>
                      </p>
                    </a>
                    
                  </div>
                </div>

                 <div class="col-md-6">
                  <div class="project aim cause">
                    <a href="https://gco.iarc.fr/causes/uv">
                      <h3>UV Radiation</h3>
                      <p>
                        <i class="fas fa-sun"></i>
                      </p>
                    </a>
                    
                  </div>
                </div>

                 <div class="col-md-6">
                  <div class="project aim cause">
                    <a href="https://gco.iarc.fr/causes/alcohol">
                      <h3>Alcohol</h3>
                      <p>
                        <i class="fas fa-wine-glass-alt"></i>
                      </p>
                    </a>
                    
                  </div>
                </div>

                <!--<div class="col-md-12">
                  <img src="../assets/img/carousel/screen.4.2.png">
                </div>-->

              </div>

            </div>

            <div class="col-md-4">

             <SideBar v-bind:prop_twitter="0"/>

            </div>

          </div>
            

      </div>

    </div>

</template>

<script>
import { reactive,computed } from "vue";
import SideBar from '../components/SideBar.vue' ;
import BreadCrumb from '../components/BreadCrumb.vue' ; 

export default{
  name : "CancerCauses" ,
  components: {
    SideBar , 
    BreadCrumb
  }
}
</script>	

<style lang="scss">
  .cause{
    background: #92f9d1;
    h3{
      font-size: 1.4em; 
      text-align: center ; 
    }
    a{
      color: #000!important ; 
      img{
        display: block;
        margin:auto ;
        max-height: 80px;
      }
      i{
        color: #19B478 ;
        display: inline-block;
        margin: auto;
        font-size: 8em;
        width: 100%;
        text-align: center;
      }
    }
  }
</style>