<template>
	<div class="row main-zone main-graphics">

      <div class="container splash">
          
       	<h1>Graphics</h1>

          <div class="breadcrumb">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/graphics">Graphics</a></li>
            </ul>
          </div>

          <div class="row">
            

            <div class="col-md-8">
              
              <p style="padding: 0;">This gallery is a bank of all graphics, pictures and materials available accross all of our projects. You can use them freely by clicking on each picture below. </p>


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

              <modal v-if="showModal" @close="closeModal()">
                  <template v-slot:header>
                      <h2>{{ modal.name }}</h2>
                  </template>
                  <template v-slot:body>
                      <img class="modal_img" :src="(modal.thumb_modal)?modal.thumb_modal:modal.thumb" :title="modal.name">
                  </template>
                  <template v-slot:footer>
                      <ul class="dl">
                        <li v-if="modal.urls!=undefined&&modal.urls.png!=undefined"><a @click="downloadItem(modal.urls.png,'png')"> Download the png file(s) </a></li>
                        <li v-if="modal.urls!=undefined&&modal.urls.pptx!=undefined"><a @click="downloadItem(modal.urls.pptx,'pptx')"> Download the pptx file </a></li>
                        <li v-if="modal.urls!=undefined&&modal.urls.pdf!=undefined"><a @click="downloadItem(modal.urls.pdf,'pdf')"> Download the pdf file </a></li>
                        <li v-if="modal.urls!=undefined&&modal.urls.svg!=undefined"><a @click="downloadItem(modal.urls.svg,'svg')"> Download the svg file </a></li>
                      </ul>
                  </template>
                </modal>

            </div>

            <div class="col-md-4">

              <h2 style="margin-top: 0px;padding-left: 15px;">Filter by:  </h2>

              <div class="col-md-12">
                <select class="selector" name="cancer_site" v-model="values.cancer_site" v-on:change="showTag('cancer_site')">
                  <option value="">by cancer site</option>
                  <option value="breast">Breast</option>
                  <option value="prostate">Prostate</option>
                  <option value="lung">Lung</option>
                  <option value="colon">Colon</option>
                  <option value="stomach">Stomach</option>
                  <option value="liver">Liver</option>
                  <option value="other_cancer_site">Others cancer sites</option>
                </select>
              </div>

              <div class="col-md-12">
                <select class="selector" name="type" v-model="values.type" v-on:change="showTag('type')">
                  <option value="">by indicator</option>
                  <option value="incidence">Incidence</option>
                  <option value="mortality">Mortality</option>
                </select>
              </div>

              <div class="col-md-12">
                <select class="selector" name="ext" v-model="values.ext" v-on:change="showTag('ext')">
                  <option value="">by filetype</option>
                  <option value="png">png</option>
                  <option value="pdf">pdf</option>
                  <option value="pptx">pptx</option>
                </select>
              </div>

              <div class="col-md-12">
                <input type="button" v-on:click="showTag('*')" value="Clear">
              </div>

          </div>

        </div>

    </div>
	</div>

</template>

<script>
import graphics from '../assets/data/graphics.json'
import { computed } from 'vue'
import axios from 'axios'
import modal from '../components/Modal.vue' ;

var $grid ; 

export default {
  name: 'graphics',
  components : {modal} ,
  data () {
    return {
      showModal : false , 
      modal : {} , 
  		graphics: graphics.map((g)=>{
  			// console.info(g) ; 
  			g.tags_class = '' ; 
  			let modal = ( g.overlay == false ) ? '' : `#modal_${g.id}` ; 
      	//tags = arrayUnique(tags.concat(project.tags)) ; 
      	//if ( project.tags == undefined) return ; 
      	if ( g.tags == undefined ) return ; 
        let tags_class = 'grid-item grid-graphic '+g.tags.join(' ') ; 
        g.tags_class = ['grid-item','grid-graphic'].concat(g.tags) ; 
        if ( g.url == '' || g.url == undefined) g.url = g.thumb ; 
  			return g ; 
  		}).filter((g)=>g!=undefined) , 
  		grid : {} ,
      // tags : [] , 
      tags : [ { key : '*' , name : 'All' } ] , 
      values : {
        cancer_site : '' , 
        type : '',
        ext : '' 
      }
    }
  },
  mounted(){
  	setTimeout(() => {
      $grid = $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });

      // console.info("=>",this.graphics); 

      $('#graphics').animate({'opacity':1},1000);

    }, 500 ) ; 
  },
  methods:{
    openModal(obj){
      this.modal = obj ; 
      this.showModal = true ; 
    },
    closeModal(){
      this.showModal = false ; 
    },
    /**
    * Filter projects tags
    * @param (string) tag name
    * @return (no return)
    */
    showTag__ (type){

      let tag = '' ; 

      if ( type == '*') 
        tag = type ; 
      else if( type != '')
        tag = this.values[type] ; 

      if ( tag != '*')
      {
        let find = this.tags.find(f=>tag==f) ;

        if ( find == undefined ) 
          this.tags.push(tag) ; 
        else{
          let key_tag = Object.keys(this.tags).find(key => this.tags[key] === tag) ;

          if ( key_tag != undefined)
          {
            delete this.tags[Number(key_tag)] ; 
            this.tags = this.tags.filter( (item) => { return item !== undefined; });
          }
        }
        
        let str_tags = '' ; 
        this.tags.forEach( (t,i)=> { 
          let comma = (this.tags.length>1&&(i!=this.tags.length-1))?',':'';
          str_tags += `.${t}${comma} `;
        })
        
        console.info("str_tags",this.tags,str_tags) ; 

        $grid.isotope({ filter:str_tags });

        $('ul#tags li a').removeClass('active') ; 

        this.tags.forEach( t=> {
          $('ul#tags li a[attr-tag="'+t+'"]').addClass('active') ; 
        });
      }
      else
      {
        this.tags = [] ; 
      }
      
      // mode reset
      if ( this.tags.length == 0 || tag == '*')
      {
        this.tags = [] ; 
        $grid.isotope({ filter: '*' });
        $('ul#tags li a').removeClass('active') ; 
        $('ul#tags li a[attr-tag="*"]').addClass('active') ; 
      }

    },  // end showTag
    
    downloadItem ( url , ext ) {
      console.info("url",url) ; 
      axios.get(url, { responseType: 'blob' })
        .then(response => {
          const blob = new Blob([response.data], { type: `application/${ext}` })
          const link = document.createElement('a')
          link.href = URL.createObjectURL(blob)
          link.download = url
          link.click()
          URL.revokeObjectURL(link.href)
        }).catch(console.error)
      },
    /**
    * Filter projects tags
    * @param (string) tag name
    * @return (no return)
    */
    showTag(type){
      let tag = '' ; 

      if ( type == '*' || type == '') 
        tag = type ; 
      else if( type != '')
        tag = this.values[type] ; 

      let tags = [] ; 

      if ( tag != '*')
        {
          let find = this.tags.find(f=>tag==f.key) ;

          if ( find == undefined ) 
            tags.push(tag) ; 
          else{
            let key_tag = Object.keys(tags).find(key => tags[key] === tag) ;

            if ( key_tag != undefined)
            {
              delete tags[Number(key_tag)] ; 
              tags = tags.filter( (item) => { return item !== undefined; });
            }
          }

          // tags = [tag] ; 
          let str_tags = '' ; 
          tags.forEach( (t,i)=> { 
            let comma = (tags.length>1&&(i!=tags.length-1))?',':'';
            str_tags += `.${t}${comma} `;
          })

          if ( str_tags == '. ') str_tags = '*' ; 
                    
          $grid.isotope({ filter:str_tags });

          $('ul#tags li a').removeClass('active') ; 

          tags.forEach( t=> {
            $('ul#tags li a[attr-tag="'+t+'"]').addClass('active') ; 
          });
      }
        
      // mode reset
      if ( tags.length == 0 || tag == '*')
      {
        tags = [] ; 
        $grid.isotope({ filter: '*' });
        $('ul#tags li a').removeClass('active') ; 
        $('ul#tags li a[attr-tag="*"]').addClass('active') ; 
      }

    } // end showTag

  }
}
</script>

<style lang="scss">

#graphics{
	opacity: 0 ; 
    margin-left: 0px;
    margin-right: 0px;
}

.infographic{
}
.infographic a{
  display: block ; 
  float: left;
  height: 119px;
  margin-bottom: 20px;
  width: 200px;
  text-align: center;
  border:solid 1px #ccc ; 
      box-shadow: 1px 1px 1px rgb(0 0 0 / 40%);
}

.infographic a img{
  max-height: 100%;
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
  width: 100%;
  margin-bottom: 10px;
}

.main-graphics{
  .modal-container{
    width: 70%;
    height: 80%;
    img.modal_img{
      max-height: 525px;
      margin: auto;
      display: block;
    }
    .modal-header{
      padding: 5px ;
    }
    .modal-body{
      height: auto!important;
    }
    .modal-footer{
      text-align: center ; 
    }
  }
  ul.dl{
    display: block ; 
    li{ 
      display: inline-block ;
      a{
        display: inline-block;
        background: #ccc;
        /* height: 25px; */
        padding: 5px 15px;
        margin: 0px 10px;
        color: #000;
        border-radius: 3px;
        cursor: pointer; 
        &:hover{
          background: #037AB3 ;
          color: #fff ; 
        }
      }
    }
  }
}

.grid-item{
  width: 33%!important;
  &.grid-graphic{
    height: 140px;
  }
  .graphic{
    overflow: hidden; 
    position: relative ; 
    height: 120px;
    cursor: pointer ; 
    .mask{
      position: absolute;
      width: 200px ;
      height: 100% ;
      opacity: 0 ; 
      background: rgba(0,0,0,.8);
      color: #fff ; 
      text-align: center; 
      padding: 25px 0px ; 
      cursor: pointer ; 
      transition    : all 0.2s ease-in-out; 
      span.title{
        font-size: 1.2em;
        font-weight: bold;
      }
    }
    &:hover{
      .mask{
        opacity: 1; 
      }
    }
  }
}

</style>