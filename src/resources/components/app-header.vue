<template>
  <header class="header-container">
    <a href="/" class="logo">
      <h1>豆瓣</h1>
    </a>

    <ul class="navigations">
      <li class="movie">电影</li>
      <li class="book">图书</li>
      <li class="radio">广播</li>
      <li class="group">小组</li>
      <li class="search"><i class="fa fa-search"></i></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'gemini-header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header-container {
  background: #fff;
  height: $height-header;
  border-bottom: 1px solid $border-color;
  margin-bottom: 5px;

  .logo {
    float: left;
    display: block;
    height: 100%;
    padding-left: 15px;
    color: $logo-color;
    font-size: 24px;
    font-weight: bold;
    line-height: $height-header;
  }

  .navigations {
    float: right;
    display: block;
    height: 100%;

    > li {
      display:inline-block;
      line-height: $height-header;
      margin-right: 15px;
      &.movie{
        color: $movie-color;
      }
      &.book{
        color: $book-color;
      }
      &.radio{
        color: $radio-color;
      }
      &.group{
        color: $group-color;
      }
      &.search{
        color: $search-color;
      }
    }
  }
}
</style>
