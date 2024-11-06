

<template>
  <div class="flex">
    <Content_Left />
    <Content_Right />
  </div>
</template>

<script>
import Content_Left from "../components/DangKy/Content_Left.vue";
import Content_Right from "../components/DangKy/Content_Right.vue";

export  default {
  components:{
    Content_Left,
    Content_Right
  }

}
</script>