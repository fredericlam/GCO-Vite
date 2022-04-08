<template>
  <div class="breadcrumb">
    <ul>
      <li><a href="/">Home</a></li>
      <!--<li
        v-for="(breadcrumb, idx) in breadcrumbList"
        :key="idx"
        @click="routeTo(idx)"
        :class="{'linked': !!breadcrumb.link}">
      <li
        v-for="(breadcrumb, idx) in breadcrumbList"
        :key="idx" v-if="breadcrumb.link != undefined">

        <router-link :to="$i18nRoute({ name: breadcrumb.link })">
          {{ breadcrumb.name }}
        </router-link>
      </li>

      <li
        v-for="(breadcrumb, idx) in breadcrumbList"
        :key="idx" v-if="breadcrumb.link == undefined">

        {{ breadcrumb.name }}

      </li>-->

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      breadcrumbList: []
    }
  },
  mounted () { this.updateList() },
  watch: { '$route' () { this.updateList() } },
  methods: {
    routeTo (pRouteTo) {
      // if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList () { 
      this.breadcrumbList = this.$route.meta.breadcrumb 
      console.info("this.breadcrumbList",this.$route.meta.breadcrumb,this.breadcrumbList) ; 
    }
  }
}
</script>

<style scoped>

  .breadcrumb {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: .75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: .25rem;
  }

  .breadcrumb {
    background: #ffffff ;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 10px 15px 10px 0;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul > li {
    display: flex;
    float: left;
    height: 10px;
    width: auto;
    color: $default;
    font-weight: bold;
    font-size: .8em;
    cursor: default;
    align-items: center;
  }

  ul > li:not(:last-child)::after {
    content: '/';
    float: right;
    font-size: .8em;
    margin: 0 .5em;
    color: #000 ;
    cursor: default;
  }

  .linked {
    cursor: pointer;
    font-size: 1em;
    font-weight: normal;
  }
</style>