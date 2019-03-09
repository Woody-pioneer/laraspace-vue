<template>
  <nav id="top">
    <div class="container">
      <slot name="language"/>
      <slot name="currency"/>
      <div id="top-links" class="nav pull-right">
        <ul class="list-inline">
          <li><a href="countact"> <i class="icon-fa icon-fa-phone"/></a> <span class="hidden-xs hidden-sm hidden-md"> telephone </span></li>
          <li class="dropdown">
            <a href=" account " title=" text_account " class="dropdown-toggle" data-toggle="dropdown"><i class="icon-fa icon-fa-user"/> <span class="hidden-xs hidden-sm hidden-md"> account </span> <span class="caret"/></a>
            <ul class="dropdown-menu dropdown-menu-right">
              <li><a href=" register ">register </a></li>
              <li><a href=" login ">login </a></li>
            </ul>
          </li>
          <li><a id="wishlist-total" href=" wishlist " title=" text_wishlist "><i class="icon-fa icon-fa-heart"/> <span class="hidden-xs hidden-sm hidden-md"> wishlist </span></a></li>
          <li><a href=" shopping_cart " title=" text_shopping_cart "><i class="icon-fa icon-fa-shopping-cart"/> <span class="hidden-xs hidden-sm hidden-md"> shopping_cart </span></a>
          </li>
          <li><a href=" checkout " title=" text_checkout "><i class="icon-fa icon-fa-share"/> <span class="hidden-xs hidden-sm hidden-md">checkout </span></a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'FrontTop'
}
</script>

<style scoped>

</style>
