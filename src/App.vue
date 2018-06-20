<template>
  <div class="container">
    <app-header class="header"></app-header>
    <div class="content-warp">
      fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br> fdsgjhfsdgjhfsdgjh <br>
    </div>
  </div>
</template>

<script>
import appHeader from '@/resources/components/app-header'
export default {
  name: 'App',
  components: {
    'app-header': appHeader
  }
}
</script>

<style lang="scss">
$max-weight: 650px;
hetml,
body {
  background: #f8f8f8;
}

.container {
  background: #fff;
  height: 100%;
  max-width: $max-weight;
  margin: 0 auto;

  .header {
    position: fixed;
    top: 0;
    max-width: $max-weight;
    display: block;
    z-index: 9999;
  }
  .content-warp {
    padding: 57px 5px 0 5px;
  }
}
</style>
