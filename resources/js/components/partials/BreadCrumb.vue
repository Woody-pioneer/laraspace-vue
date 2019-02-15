<template>
  <ol class="breadcrumb">
    <li v-for="(item,index) of items" :key="index" :class="{active : item.active}" class="breadcrumb-item"><a :href="item.href">{{ item.text }}</a></li>
  </ol>
</template>
<script>
export default {
  name: 'BreadCrumb',
  props: {
    items: {
      type: Array,
      require: true,
      default: Array
    }
  }
}
</script>

<style lang="scss" scoped>
 .breadcrumb{
   .active{
     color:dodgerblue;
   }
 }
</style>
