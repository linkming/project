<template>

  <div class="main">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style>
.main{
  flex: 1;
  /* background-color: #eee; */
  text-align: left;
}
 .fade-enter-active {
      transition: all 0.2s ease;
   }
   .fade-leave-active {
      transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }
   .fade-enter, .fade-leave-to{
      transform: translateX(5rem);
      opacity: 0;
   }
</style>
