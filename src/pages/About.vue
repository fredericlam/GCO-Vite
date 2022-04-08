<template>
 	
 	<div class="row main-zone">

      <div class="container splash">
          
          <h1>About the GCO</h1>

          <div class="breadcrumb">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About the GCO project</a></li>
              </ul>
          </div>

          <div class="row">

            <div class="col-md-8">

              <p>The Global Cancer Observatory (GCO) is an interactive web-based platform presenting global cancer statistics to inform cancer control and cancer research. The platform focuses on the visualization of cancer indicators using data from IARC’s Cancer Surveillance <a href="http://www.iarc.fr/en/research-groups/sec1/index.php" target="_blank"> IARC’s Cancer Surveillance <strong>Branch</strong> (CSU)</a>, including <a href="http://globocan.iarc.fr/" target="_blank">GLOBOCAN</a>;<a href="http://ci5.iarc.fr/" target="_blank"> Cancer Incidence in Five Continents (CI5)</a>;<a href="http://iicc.iarc.fr/" target="_blank">International Incidence of Childhood Cancer (IICC)</a>; and several cancer survival benchmarking projects (<a href="http://survcan.iarc.fr/" target="_blank">SurvCan</a> and <a href="http://gco.iarc.fr/survmark/survival" target="_blank">SURVMARK</a>). </p>

              <p>The GCO is under continual development and the team will continually seek novel and informative ways of presenting global cancer data that link to our research activities We very much welcome questions and feedback. Please send any comments or queries to csu@iarc.fr</p>

              <p> The data presented in the GCO are considered the best available in each country worldwide. However, caution must be exercised when interpreting the data, recognizing the current limitations in the quality and coverage of cancer data, particularly in some low- and middle-income countries. </p>

              <p>Our approach is not only to use the collected data but to work alongside national staff to improve local data quality, registry coverage, and analytical capacity. You can read more about our global efforts to help implement and develop population-based cancer registries through IARC’s <a href="http://gicr.iarc.fr/" target="_blank">Global Initiative for Cancer Registry Development (GICR)</a>, a multi-partner collaborative project, at <a href="http://gicr.iarc.fr/" target="_blank">the GICR website</a>.</p>
              
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