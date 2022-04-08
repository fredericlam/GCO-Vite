<template>
 	
 	<div class="row main-zone">

      <div class="container splash">
          
          <h1>About us</h1>

          <div class="breadcrumb">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About us</a></li>
            </ul>
          </div>

          <div class="row">

            <div class="col-md-8">

              <p>The key focus of the Cancer Surveillance <strong>Branch</strong> (CSU) is the systematic and ongoing pursuit of global cancer data and statistics for cancer control action, in keeping with one of the primaries aims of IARC — to describe and elucidate cancer occurrence worldwide. The <strong>Branch</strong> coordinates the collection, analysis, interpretation, and dissemination of indicators that capture the changing magnitude and profile of the disease.
              </p>

              <p>
                <img src="../assets/img/branch_1.jpeg" title="Cancer Surveillance Unit">
              </p>

              <p>
                CSU aims to: 
              </p>
              <p>• Ensure that locally recorded <strong>high-quality cancer data</strong> are available for <strong>cancer control</strong> and <strong>cancer research</strong>, by advocating the cause of cancer registration and supporting the delivery of measurable improvements in registry coverage, quality and use.</p>
              <p>• Consolidate and expand IARC’s role as a reference to the global cancer community in the provision of <strong>cancer indicators</strong> describing the cancer burden in adults, children and adolescents worldwide. </p>
              <p>• Conduct international research that illustrates the transitional nature of cancer profiles and the <strong>health</strong>, <strong>social</strong>, and <strong>economic benefits</strong> of preventative interventions, via a systematic quantification of their future impact.
              </p>
            
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

export default{
  name : "WhoWeAre" ,
  components: {
    SideBar
  }
}
</script>	

<style lang="scss">
  .aim{
    min-height: 255px;
  }
</style>