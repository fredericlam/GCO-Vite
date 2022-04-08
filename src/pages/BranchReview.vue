<template>
 	
 	<div class="row main-zone main-branch">

      <div class="container splash">

        <h1>Aligning with IARC's mission CSU focus in the next 5 years</h1>
         
        <div class="row">
          <div class="col-md-2 topic" v-for="topic in topics">
            <a href="#">
              <img :src="topic.icon" :title="topic.label">
              <label>{{ topic.label }}</label>
            </a>
          </div>
        </div>

        <div id="graphics" class="row grid">
          <div v-bind:class="graphic.tags_class" v-for="graphic in graphics">
            <div class="graphic infographic">
              <a @click="showModal = true" class="link_modal" test-click="downloadItem(graphic.url,graphic.ext)" data-tooltip="tooltip" :title="graphic.name">
                <img :src="graphic.thumb" :title="graphic.name">
              </a>
              <div class="mask" @click="openModal(graphic)" >
                 <span class="title">{{ graphic.name }}</span><br>
                  Click to download
              </div>
            </div>
            
          </div>
        </div>

      </div>

    </div>

</template>

<script>
import graphics from '../assets/data/graphics.json'
import { reactive,computed } from "vue" ;

export default{
  name : "BranchReview" ,
  components: {
  },
  data () {
    return {
      topics : [
        { 'icon' : '/img/branch-review/gear.png' , 'label' : 'Accelerating cancer registry support and development' },
        { 'icon' : '/img/branch-review/globe.png' , 'label' : 'Global cancer indicators: expansion and innovation' },
        { 'icon' : '/img/branch-review/epidemiology.png' , 'label' : 'Descriptive epidemilogy of cancer' },
        { 'icon' : '/img/branch-review/childhood.png' , 'label' : 'Childhood cancer' },
        { 'icon' : '/img/branch-review/economic.png' , 'label' : 'Economics of cancer' },
        { 'icon' : '/img/branch-review/inequalities.png' , 'label' : 'Social inequalities of cancer' }
      ],
      graphics : []
    }
  }
}
</script>	

<style lang="scss">
.main-branch{
  background: #02579A ; 
  color: #fff ; 
  min-height:1000px!important; 
  h1{
    color: #fff ; 
    text-align: center;
    padding: 20px 0; 
  }
  .topic{
    margin-top: 20px; 
    img{
      display: block; 
      margin: auto; 
      max-height: 50px;
    }
    label{
      color: #fff ; 
      text-align: center;
    }
  }
}
</style>
