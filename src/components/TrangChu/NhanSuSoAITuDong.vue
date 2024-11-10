
<template>
  <div class="container mx-auto mt-20">
    <div class="text-center">
      <div class="text-xs font-semibold py-3 px-4 my-9 inline-flex bg-white rounded-[32px] justify-center items-center border border-color-4 shadow-sd-4">
        <RouterLink to="/" class="color-text">
          Template tùy chỉnh
        </RouterLink>
      </div>
      <div class="text-4xl font-bold tracking-wide"><span class="color-text">Nhân sự số AI</span> <span class="text-color-8">tự động không giới hạn</span></div>

      <div class="mt-10">
        <div class="mb-8 ">
          <div class="bg-color-9 shadow-sd-5 overflow-scroll rounded-[50vh] scroll-w-none max-w-full my-0 mx-auto">
            <ul class="flex p-[5px] border-b-none overflow-y-hidden whitespace-nowrap flex-nowrap">
              <li v-for="(tab, index) in tabs"
                  :key="index"
                  @click="activeTab = index">
                <button
                    :class="{ 'bg-white text-color-8': activeTab === index }"
                    class="px-3.5 py-[18px] transition-all duration-300 uppercase hover:bg-color-11 hover:text-white text-sm  mr-3 min-w-20 rounded-[35px] text-color-1 border-none">{{tab.name}}</button>
              </li>
            </ul>
          </div>
        </div>
        <div class="relative">
          <div class="pt-2">
            <div class="">
              <div  :class="isExpanded ? 'min-h-full max-h-full' : 'min-h-[640px] overflow-hidden nhansusoai max-h-[640px]'">
                <div>
                  <div class="flex flex-wrap -mx-3">
                    <transition-group name="fade" tag="div" class="flex flex-wrap -mx-3">
                      <div v-for="(template, index) in tabs[activeTab].content" :key="template.id" class="w-1/3 max-lg:w-1/2 max-md:w-full px-3 transition-all duration-300 ease-in-out">
                        <div class="h-full cursor-pointer transition-all duration-200 ease-in-out hover:scale-105">
                          <div class="flex flex-col break-words relative mb-6 rounded-2xl border border-solid bg-custom-gradient-6 flex-wrap">
                            <div class="min-h-40 flex-auto py-4 px-6 relative pt-6">
                              <div class="mb-4 relative">
                                <img src="https://beta.aigate.app/uploads/icons/1730339755.png" alt="Image" class="w-[352px] h-60 rounded-xl">
                                <div class="absolute z-50 top-3.5 left-3.5 rounded-[32px] border-2 border-color-6 bg-custom-gradient-3 w-16 h-8 flex justify-center items-center text-white text-center text-sm font-medium">New</div>
                              </div>
                              <div class="text-start mb-2 text-color-10 font-bold text-lg">{{ template.title }}</div>
                              <div class="mb-2 text-sm font-medium text-start">{{ template.desc }}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </transition-group>
                  </div>
                </div>
                <div :class="isExpanded ? 'mt-5' : 'mt-0 absolute'" class=" bottom-0 left-3.5 right-0 pb-1 z-[1] bg-white text-center">
                  <div @click="toggleExpand" class="inline-block text-sm font-medium rounded-[32px] text-color-11 hover:bg-color-12 py-3 px-6 border border-solid bg-custom-gradient-8 cursor-pointer">
                    {{ isExpanded ? 'Hiển thị ít hơn' : 'Hiển thị thêm' }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isExpanded: false,
      activeTab: 0,
      tabs: [
        { name: 'Tất cả templates', content: [
            {
              id : 1,
              title : "YouTube thuyết phục khán giả 1",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 2,
              title : "YouTube thuyết phục khán giả 2",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 3,
              title : "YouTube thuyết phục khán giả 3",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 3,
              title : "YouTube thuyết phục khán giả 3",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 3,
              title : "YouTube thuyết phục khán giả 3",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 3,
              title : "YouTube thuyết phục khán giả 3",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 3,
              title : "YouTube thuyết phục khán giả 3",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
          ] },
        { name: 'Chiến lược', content: [
            {
              id : 1,
              title : "YouTube thuyết phục khán giả 1",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 2,
              title : "YouTube thuyết phục khán giả 2",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },

          ] },
        { name: 'Hành chính', content: [
            {
              id : 1,
              title : "YouTube thuyết phục khán giả 1",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 2,
              title : "YouTube thuyết phục khán giả 2",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 3,
              title : "YouTube thuyết phục khán giả 3",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            }
          ] },
        { name: 'Kinh doanh', content: [
            {
              id : 1,
              title : "YouTube thuyết phục khán giả 1",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 2,
              title : "YouTube thuyết phục khán giả 2",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 3,
              title : "YouTube thuyết phục khán giả 3",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            }
          ] },
        { name: 'Marketing', content: [
            {
              id : 1,
              title : "YouTube thuyết phục khán giả 1",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 2,
              title : "YouTube thuyết phục khán giả 2",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 3,
              title : "YouTube thuyết phục khán giả 3",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            }
          ] },
        { name: 'Năng suất', content: [
            {
              id : 1,
              title : "YouTube thuyết phục khán giả 1",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 2,
              title : "YouTube thuyết phục khán giả 2",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 3,
              title : "YouTube thuyết phục khán giả 3",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            }
          ] },
        { name: 'Nhân sự', content: [
            {
              id : 1,
              title : "YouTube thuyết phục khán giả 1",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 2,
              title : "YouTube thuyết phục khán giả 2",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 3,
              title : "YouTube thuyết phục khán giả 3",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            }
          ] },
        { name: 'Sale', content: [] },
        { name: 'Thương hiệu', content: [] },
        { name: 'Thương mại điện tử', content: [] },
        { name: 'Vận hành', content: [
            {
              id : 1,
              title : "YouTube thuyết phục khán giả 1",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 2,
              title : "YouTube thuyết phục khán giả 2",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            },
            {
              id : 3,
              title : "YouTube thuyết phục khán giả 3",
              desc : "Để tạo một video lan truyền (viral video) trên YouTube nhằm thuyết phục khán giả, bạn cần kết hợp chiến lược\n" +
                  "sáng tạo nội dung độc đáo với các yếu tố gây cảm xúc mạnh"
            }
          ] },
      ],
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>