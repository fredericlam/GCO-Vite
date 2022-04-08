<template>
  
  <div class="theming"> 
  	<select v-model="theme" v-on:change="changeTheme"> 
  		<option value="">Old IARC</option>
  		<option value="theme1">New IARC Dark Blue</option>
  		<option value="theme2">New IARC Peach</option>
  		<!--<option value="theme3">New IARC Ivory</option>-->
  	</select>

    
  </div>

</template>

<script>

export default {
  name: 'Theming',
  data: function(){
    return {
        theme : 'theme1'
    } 
  },
  mounted(){
    this.changeTheme();
  },
  methods : {
    changeTheme : function(){

    	// 
    	$('body').attr('class',this.theme) ; 	

    	// set globallyt
    	this.$store.commit('setTheme',this.theme) ; 
    }
  }
};

</script>

<style lang="scss">

.theming{
	position: absolute ; 
	left: 0 ; 
	top: 20px ;
    z-index: 99;
}


@font-face {
  font-family: "Frutiger-LT-65-Bold";
  src: url("/src/assets/fonts/Frutiger-LT-65-Bold.woff") format("woff");
}

@font-face {
  font-family: "Frutiger-LT-Com-55-Roman";
  src: url("/src/fonts/Frutiger-LT-Com-55-Roman.woff") format("woff");
}

@font-face {
    font-family: 'PP Object Sans';
    src: url('/src/assets/fonts/PPObjectSans-Bold.woff2') format('woff2'),
        url('/src/assets/fonts/PPObjectSans-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Frutiger';
    src: url('/src/assets/fonts/FrutigerBold.woff2') format('woff2'),
        url('/src/assets/fonts/FrutigerBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PP Object Sans';
    src: url('/src/assets/fonts/PPObjectSans-Light.woff2') format('woff2'),
        url('/src/assets/fonts/PPObjectSans-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PP Object Sans Slanted';
    src: url('/assets/fonts/PPObjectSans-BoldSlanted.woff2') format('woff2'),
        url('/assets/fonts/PPObjectSans-BoldSlanted.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'PP Object Sans';
    src: url('/assets/fonts/PPObjectSans-HeavySlanted.woff2') format('woff2'),
        url('/assets/fonts/PPObjectSans-HeavySlanted.woff') format('woff');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Futura';
    src: url('/assets/fonts/FuturaBT-Light.woff2') format('woff2'),
        url('/assets/fonts/FuturaBT-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PP Object Sans';
    src: url('/src/assets/fonts/PPObjectSans-Regular.woff2') format('woff2'),
        url('/src/assets/fonts/PPObjectSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('/src/assets/fonts/Lato-Bold.woff2') format('woff2'),
        url('/src/assets/fonts/Lato-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PP Object Sans';
    src: url('/src/assets/fonts/PPObjectSans-LightSlanted.woff2') format('woff2'),
        url('/src/assets/fonts/PPObjectSans-LightSlanted.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'PP Object Sans';
    src: url('/src/assets/fonts/PPObjectSans-Heavy.woff2') format('woff2'),
        url('/src/assets/fonts/PPObjectSans-Heavy.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('/src/assets/fonts/Lato-Regular.woff2') format('woff2'),
        url('/src/assets/fonts/Lato-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PP Object Sans Slanted';
    src: url('/src/assets/fonts/PPObjectSans-Slanted.woff2') format('woff2'),
        url('/src/assets/fonts/PPObjectSans-Slanted.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

$dark_blue : #303153 ; 
$peach : #d27f65 ; 
$ivory : #F1EEDF ; 
$blue_iarc : #1E7FB8	 ;

$font_pp_object_sans : "PP Object Sans";
$font_frutiger : "Frutiger" ;
$font_futura : 'Futura';
$font_lato : 'Lato' ;

/* Dark blue */
body.theme1{
    font-family: $font_pp_object_sans  !important;
    border-top-color: $dark_blue !important;
    a{
  	 color: $peach ;
    }
	#app {

		header,
		.follow,
		.list-group .list-group-item.active,
		#bloc_left table thead tr,
		.database table thead tr,
		#container-filters .filters .radios_toggle input[type=radio]:checked + label, 
		#container-filters .filters .radios_toggle input[type=checkbox]:checked + label, 
		#container-filters .filters .checkbox_toggle input[type=radio]:checked + label, 
		#container-filters .filters .checkbox_toggle input[type=checkbox]:checked + label,
		form .multiselect__tag,
		form .vue-slider-process,
        table.datatable tr th,
        #table-container .nav-tabs .nav-link.active, #table-container .nav-tabs .nav-item.show .nav-link,
        ul.sub-menu li a.router-link-active,
		{
			background-color: $dark_blue !important; 
		}

        .grid-item .graphic .mask{
            background-color: rgba(48,49,83,0.8) ;  
        }

        header{
            background-repeat:no-repeat;
            border-bottom: solid 1px #fff ; 
        }

        .slick-initialized .slick-slide{
            background: $ivory!important;
        }

        ul.downloads li span.icon{
            background-color: $dark_blue ;
        }

        .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover,
        .tab-content>.tab-pane{
            background:$ivory;
        }

        ul.sub-menu li {
            a.router-link-active,
            a:hover{
                border-color:$dark_blue ;
            }
        }

        .tab-content{
            border:none ; 
        }
		.list-group-item.active{
			border:$dark_blue ;
		}

        h1,.nav-tabs>li>a{
            color:$dark_blue!important ;
        }
        .nav-tabs>li>a{
            font-weight: 900;
        }
		.page h2,h2,
		form fieldset h4,
        form fieldset.container_populations a.emptyPopButton i{
			color: $dark_blue ;
            font-weight: 900;
            text-transform: uppercase; 
		}

        ul.social li a:hover i{
            color: $peach ; 
        }

        .slick-prev:before, .slick-next:before{
            color: $peach ; 
            font-size: 50px;
        }

		.breadcrumb{
			background:$ivory!important;
            padding: 10px 20px ;
		}
		h5.publishing,
        .sub-menu-tabs .nav-tabs .nav-link.active, 
        .sub-menu-tabs .nav-tabs .nav-item.show .nav-link{
			color: $dark_blue ; 
		}
		.follow .content ul.social li a i,
		ul.footer_links li i{
			color: $peach !important;
		}

        ul#tags li a,.aim{
            background:$peach;
            color: #fff ;
            h3{
                color: $dark_blue;
            } 
        }

        #container-filters .filters .radios_toggle label, 
        #container-filters .filters .checkbox_toggle label,
        .title_l1,.title_l2{
            color: $dark_blue;
        }

        .navbar.navbar-reverse .container #navbar.navbar-collapse ul.navbar-nav li a:hover{
            color: $ivory!important;
            text-decoration: underline;
        }
        .navbar.navbar-reverse .container #navbar.navbar-collapse ul.navbar-nav li a.active{
            color: #fff!important;
            text-decoration: underline;
        }
        .navbar.navbar-reverse,
        .navbar.navbar-reverse .container #navbar.navbar-collapse ul.navbar-nav li a{
            background-color: $peach !important;
        }

        .graphic svg {
            .axis text{
                /*font-size: 1.4em!important;*/
            }
            text,tspan{
                font-family: $font_pp_object_sans !important;
            }
        }

        table.datatable#populations{
            font-size: 0.8em;
            
        }

		footer,
		#container-filters a.nav-link.active,
		#container-filters .filters,
        ul.sub-menu,
        .sub-menu-tabs .nav-tabs .nav-link.active, 
        .sub-menu-tabs .nav-tabs .nav-item.show .nav-link{
			background-color: $ivory ; 
		}

        footer{
            border-top: solid 1px #fff ; 
        }

		a.btn_clear,
        .pretty.p-switch .state label:after,
        .tooltip > .tooltip-inner,
        ul.downloads li span.csv{
			background: $peach !important;
            background-color: $peach !important ;
		}

        .pretty.p-switch .state:before{
            border-color: $peach!important;
        }

        footer{
        }
	}
}


/* Peach */
body.theme2{
	font-family: $font_pp_object_sans  !important;
	#app {
		header,.follow{
			background-color: $peach ; 
		}
	}
}

/* Ivory */
body.theme3{
	font-family: $font_pp_object_sans !important;
	#app {
		header,.follow{
			background-color: $ivory ; 
		}
	}
}

</style>