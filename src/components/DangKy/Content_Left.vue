
<template>
  <div class="w-1/2 h-screen bg-white flex justify-center">
    <div class="max-w-[66.66%] flex-[66.66%]">
      <div class="pt-10 relative py-4 px-6">
        <RouterLink :to="{ name : 'Home'}" class="whitespace-nowrap py-1.5 flex justify-center mb-6">
          <img src="https://beta.aigate.app/img/brand/logo.png" alt="" class="h-10">
        </RouterLink>
        <div class="text-color-16 text-2xl font-bold text-center">Đăng ký tài khoản <span class="color-text">AI Gate</span></div>
        <div class="text-center font-base font-medium text-[#667085] mt-3">Đăng ký và mở tài khoản sáng tạo cùng AIGATE</div>

        <div class="mb-4 grid grid-cols-2 gap-5 mt-12">
            <div>
              <label for="inner_email" class="text-sm text-color-16 font-medium">Tên*</label>
              <input type="email" id="inner_email" placeholder="Your First Names" class="w-full mt-2 flex items-center text-base overflow-ellipsis outline-0
            py-2.5 px-3.5 rounded-lg border border-[#D0D5DD] focus:border-[#7F56D9] focus:transition-all focus:duration-300">
            </div>
            <div>
              <label for="inner_email" class="text-sm text-color-16 font-medium">Họ*</label>
              <input type="email" id="inner_email" placeholder="Your Last Names" class="w-full mt-2 flex items-center text-base overflow-ellipsis outline-0
            py-2.5 px-3.5 rounded-lg border border-[#D0D5DD] focus:border-[#7F56D9] focus:transition-all focus:duration-300">
            </div>
        </div>
        <div class="mb-4">
          <label for="inner_email" class="text-sm text-color-16 font-medium">Địa chỉ Email*</label>
          <input type="email" id="inner_email" placeholder="Địa chỉ email" class="w-full mt-2 flex items-center text-base overflow-ellipsis outline-0
            py-2.5 px-3.5 rounded-lg border border-[#D0D5DD] focus:border-[#7F56D9] focus:transition-all focus:duration-300">
        </div>
        <div class="mb-4">
          <label for="inner_email" class="text-sm text-color-16 font-medium">Mật khẩu *</label>
          <input type="email" id="inner_email" placeholder="Nhập mật khẩu" class="w-full flex items-center mt-2 text-base overflow-ellipsis outline-0
            py-2.5 px-3.5 rounded-lg border border-[#D0D5DD] focus:border-[#7F56D9] focus:transition-all focus:duration-300">
        </div>
        <div class="mb-4">
          <label for="inner_email" class="text-sm text-color-16 font-medium">Xác nhân mật khẩu *</label>
          <input type="email" id="inner_email" placeholder="Xác nhận mật khẩu" class="w-full flex items-center mt-2 text-base overflow-ellipsis outline-0
            py-2.5 px-3.5 rounded-lg border border-[#D0D5DD] focus:border-[#7F56D9] focus:transition-all focus:duration-300">
        </div>
        <div class="mb-4">
          <label class="cursor-pointer mb-4">
            <input type="checkbox" class="absolute opacity-0 custom_switch_input">
            <span class="inline-block h-6 w-10 bg-[#f5f9fc] custom-switch-indicator rounded-[50px] relative border border-[#ebecf1] align-bottom save_inf"></span>
            <span class="text-sm text-color-16 ml-2">Bằng cách tiếp tục, tôi đồng ý với <span class="text-color-12">Điều khoản</span> và <span class="text-color-12">điều kiện và Privacy Policies</span> </span>
          </label>
        </div>
        <label class="cursor-pointer">
          <input type="checkbox" class="absolute opacity-0 custom_switch_input" checked>
          <span class="inline-block h-6 w-10 bg-[#f5f9fc] custom-switch-indicator rounded-[50px] relative border border-[#ebecf1] align-bottom save_inf"></span>
          <span class="text-sm text-color-16 ml-2"> Tôi đồng ý nhận bản tin qua email</span>
        </label>

        <div class="text-center mt-7 ">
          <button class="w-full flex justify-center items-center p-4 rounded-lg bg-custom-gradient text-base font-semibold text-white">Tiếp tục</button>
        </div>
        <div class="mt-4 text-color-16 font-medium text-sm text-center">
          Bạn đã có tài khoản?
          <RouterLink :to="{ name : 'login'}" class="font-bold hover:text-color-12">Đăng nhập ngay</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>