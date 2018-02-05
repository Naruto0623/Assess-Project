<template>
  <div class="box">
    <div class="top">
      <header>Favorites</header>
      <p class="title">You liked</p>
    </div>
    <div class="content">
      <ul class="conLeft">
        <li>
          <div>
            <img src="../assets/img/favorites/Layer 1189.png"/>
            <i class="fa fa-circle fa-4x" style="position: absolute;bottom: -4px;right: 1.5rem;color: #4cd964"></i>
          </div>
          <p>Maybell Dynes</p>
        </li>
        <li>
          <div>
            <img src="../assets/img/favorites/Layer 1191.png"/>
          </div>
          <p>Kaley Hirano</p>
        </li>
        <li>
          <div>
            <img src="../assets/img/favorites/Layer 1193.png"/>
            <i class="fa fa-circle fa-4x" style="position: absolute;bottom: -4px;right: 1.5rem;color: #4cd964"></i>
          </div>
          <p>Nila Hebel</p>
        </li>
      </ul>
      <ul style="width: 1rem"></ul>
      <ul class="conright">
        <li style="padding-left: 3rem;">
          <div>
            <img src="../assets/img/favorites/Layer 1190.png"/>
          </div>
          <p style="width: 9rem">Christy Weinstein</p>
        </li>
        <li style="padding-left: 3rem;">
          <div>
            <img src="../assets/img/favorites/Layer 1192.png"/>
            <i class="fa fa-circle fa-4x" style="position: absolute;bottom: -4px;right: 1.5rem;color: #4cd964"></i>
          </div>
          <p>Armanda Febus</p>
        </li>
        <li style="padding-left: 3rem;">
          <div>
            <img src="../assets/img/favorites/Layer 1194.png"/>
            <i class="fa fa-circle fa-4x" style="position: absolute;bottom: -4px;right: 1.5rem;color: #4cd964"></i>
          </div>
          <p>Clara Hensen</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "favorites"
  }
</script>

<style scoped>
  header {
    font-weight: 600;
    text-align: center;
    margin-top: 1rem;
    font-size: 1.8rem;
  }

  .title {
    text-transform: uppercase;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2.6rem;
    margin-top: 1rem;
    border-bottom: 2px solid #363636;
  }

  .content {
    flex: 1;
    background-color: #ececec;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    overflow: hidden;
  }

  .content > ul {
    height: 100%;
    width: 47%;
    display: flex;
    /*border: 1px solid #f00;*/
    flex-direction: column;
  }

  .content > ul > li {
    padding: 1rem;
  }

  .content > ul > li p {
    width: 8rem;
    line-height: 2.8rem;
    font-size: 1.4rem;
    text-align: center;
  }

  .content > ul > li > div {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    position: relative;
  }

  .content > ul > li > div > img {
    width: 8rem;
    height: 8rem;
  }

  /*conLeft*/
  /*conright*/
</style>
