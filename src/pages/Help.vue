<template>
 	
 	<div class="row main-zone">

      <div class="container splash">

        <h1>Help </h1>
        
        <div class="breadcrumb">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/help">Help</a></li>
            </ul>
        </div>

        <div class="row">
          

          <div class="col-md-12 glossary-container">

              <!-- Nav tabs -->
              <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#glossary" aria-controls="glossary" role="tab" data-toggle="tab">Glossary</a></li>
              </ul>

              <!-- Tab panes -->
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="population-based-registry">

                    <div class="row">

                      <div class="col-md-6">
                        
                        <h2>Population-Based Cancer Registry</h2>
                        <p>
                          <strong>Population-based cancer registries</strong> (PBCR) are a core component of cancer control strategy. PBCR systematically collects information from multiple sources on all reportable neoplasms occurring in a geographically defined population. The purpose of a PBCR is to provide information on cancer burden and to assess possible causes of cancer in the community, as well as to carry out studies on prevention, early detection and screening, and cancer care. The registry provides an unbiased profile of the cancer burden in the population and how it changes over time, and therefore plays a unique role in the planning and evaluation of cancer control programmes. You can read more about our global efforts to help implement and develop cancer registries through the Global Initiative for Cancer Registry Development (GICR), a multi-partner collaborative project, <a href="http://gicr.iarc.fr/" target="_blank">at the GICR website</a>.
                        </p>

                        <h2>Prevalence</h2>
                        <p>
                        <strong>The prevalence</strong> of a given cancer is the number of individuals within a defined population who have been diagnosed with that cancer and who are still alive at a given point in time (i.e. the survivors). <br>Complete prevalence is the number of individuals alive, at a given point in time, who have been diagnosed with the disease of interest, regardless of the amount of time since the diagnosis or whether the individual is still under treatment or is considered cured. Partial prevalence limits the number of patients to those diagnosed within a defined period of time in the past, and this is a particularly useful measure of cancer burden.
                        </p>

                        <h2>Population Attributable Fraction</h2>
                        <p>
                        <strong>The population attributable fraction</strong> (PAF) of cancer incidence attributable to a given risk factor is the proportion of cancer cases in an entire population that would have been avoided if exposure to that risk factor had not occurred within the population. 
                        </p>

                      </div>

                      <div class="col-md-6">

                        <h2>Incidence</h2>
                        <p>
                        <strong>Cancer incidence</strong> is the number of new cancer cases arising in a specified population over a given period of time (typically 1 year). It can be expressed as an absolute number of cases within the entire population per year or as a rate per 100 000 persons per year. Incidence information is collected routinely by cancer registries.
                        </p>

                        <h2>Mortality</h2>
                        <p>
                        <strong>Cancer mortality</strong> is the number of deaths due to cancer occurring in a specified population over a given period of time (typically 1 year). It can be expressed as an absolute number of deaths within the entire population per year or as a rate per 100 000 persons per year. Mortality data are provided by national statistical offices.
                        </p>

                        <h2>Survival</h2>
                        <p>
                        <strong>Cancer survival proportion</strong> is the probability of survival after a given period of time since the diagnosis of a cancer; 1-, 3-, and 5-year survival probability are commonly reported.
                        <br><br>The cancer-specific survival probability is determined based on mortality: both from the cancer of interest and from all other causes. For this reason, the relative survival ratio is usually calculated instead.
                        <br><br>The relative cancer survival ratio measures the excess mortality experienced by patients diagnosed with cancer, irrespective of whether the excess mortality is directly or indirectly attributable to the cancer. The relative cancer survival ratio can be calculated as the ratio of the observed overall survival proportion in a group of patients with the cancer of interest to the expected overall survival proportion in a group of individuals that, at the beginning of the follow-up period, is similar to the patient group with respect to all possible factors affecting survival (e.g. age and sex) except for the cancer of interest.
                        </p>

                      </div>

                    </div>

                </div>
              </div>

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

