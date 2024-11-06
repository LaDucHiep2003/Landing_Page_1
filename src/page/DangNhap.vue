

<template>
  <div class="flex">
    <Content_Left />
    <Content_Right />
  </div>
</template>

<script>
  import Content_Left from "../components/DangNhap/Content_Left.vue";
  import Content_Right from "../components/DangNhap/Content_Right.vue";

  export  default {
    components:{
      Content_Left,
      Content_Right
    }

  }
</script>