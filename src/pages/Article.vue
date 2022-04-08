<template>
 	
 	<div class="row main-zone">

      <div class="container splash">
          
          <h1>Dummy article</h1>

          <div class="breadcrumb">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">The standard Lorem Ipsum passage, used since the 1500s</a></li>
              </ul>
          </div>

          <div class="row">

            <div class="col-md-8">

              <h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<strong> <a href="http://www.iarc.fr/en/research-groups/sec1/index.php" target="_blank"> IARC’s Branch of Cancer Surveillance (CSU)</a></strong>, including <strong><a href="http://globocan.iarc.fr/" target="_blank">GLOBOCAN</a></strong>; <strong> <a href="http://ci5.iarc.fr/" target="_blank"> Cancer Incidence in Five Continents (CI5)</a></strong>; <strong> <a href="http://iicc.iarc.fr/" target="_blank">International Incidence of Childhood Cancer (IICC)</a></strong>; and <strong><a href="http://survcan.iarc.fr/" target="_blank">Cancer Survival in Africa, Asia, the Caribbean and Central America (SurvCan)</a></strong>. </p>

              <iframe width="100%" height="650" src="http://localhost:8091/overtime/en/dataviz/trends?populations=3600_38000_44000_52800_75200_19100&sexes=2&types=0_1&multiple_populations=1&key=asr&age_end=15&print=1&embed=1" style="border:none;overflow:hidden;"></iframe>

              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores <strong> <a href="http://gicr.iarc.fr/" target="_blank"> Global Initiative for Cancer Registry Development (GICR)</a></strong>, a multi-partner collaborative project, at <a href="http://gicr.iarc.fr/" target="_blank">the GICR website</a>.</p>
              <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>

              <p> e denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the sam , International Agency for Research on Cancer, Lyon, France (<a href="mailto:csu@iarc.fr">csu@iarc.fr</a>). </p>   

            </div>

            <div class="col-md-4">

             <SideBar/>

            </div>

          </div>
            

      </div>

      <div class="container splash">

        <h2>Another block 100% wide</h2>

        <iframe width="100%" height="800" src="http://localhost:8091/overtime/en/dataviz/trends?populations=3600_38000_44000_52800_75200_19100&sexes=2&types=0_1&multiple_populations=1&key=asr&age_end=15&print=1&embed=1" style="border:none;overflow:hidden;"></iframe>


      </div>

    </div>

</template>

<script>
import { reactive,computed } from "vue";
import SideBar from '../components/SideBar.vue' ;

export default{
  name : "Article" ,
  components: {
    SideBar
  }
}
</script>	