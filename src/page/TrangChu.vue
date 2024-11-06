

<template>
  <Banner />
  <NhanSuSoAICuaBan />
  <NhanSuSoAITuDong />
  <TichHopCacUngDungAI />
  <TinhNangDocDao />
  <DoiTacCuaChungToi />
</template>

<script>
    import Banner from '../components/TrangChu/Banner.vue';
    import NhanSuSoAICuaBan from "../components/TrangChu/NhanSuSoAICuaBan.vue";
    import NhanSuSoAITuDong from "../components/TrangChu/NhanSuSoAITuDong.vue";
    import TichHopCacUngDungAI from "../components/TrangChu/TichHopCacUngDungAI.vue";
    import TinhNangDocDao from "../components/TrangChu/TinhNangDocDao.vue";
    import DoiTacCuaChungToi from "../components/TrangChu/DoiTacCuaChungToi.vue";

    export default{
        components:{
            Banner,
            NhanSuSoAICuaBan,
            NhanSuSoAITuDong,
            TichHopCacUngDungAI,
            TinhNangDocDao,
            DoiTacCuaChungToi,
        }
    }
</script>