<script setup lang="ts">
import Search from "../utils/Search.vue";
import "./styles/styles.css";
</script>

<template>
  <header>
    <nav class="bg-white border-gray-200 dark:bg-gray-800">
      <div class="flex my-4 flex-wrap justify-between items-center w-full">
        <a href="#" class="flex items-center">
          <span
            class="self-center text-xl ml-6 my-6 font-semibold whitespace-nowrap color-black"
            >Учебные сессии</span
          >
        </a>
        <div class="flex flex-row">
          <div class="flex items-center lg:order-2">
            <Search class="mr-[14px]" />
          </div>
          <div class="flex items-center lg:order-2">
            <button class="mr-[14px]">
              <svg
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.25" width="44" height="44" rx="12" fill="#F4F4F4" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.1968 12.9522C14.1968 12.9522 14.1969 12.9522 14.1968 12.9522H30.3031C30.594 12.9523 30.8789 13.037 31.1226 13.1961C31.3663 13.3551 31.5584 13.5815 31.6757 13.8478C31.7929 14.1141 31.8302 14.4087 31.7829 14.6958C31.7358 14.9824 31.6065 15.249 31.4107 15.4635C31.4103 15.4639 31.41 15.4643 31.4096 15.4647L25.25 22.2431V27.5462C25.2516 27.7957 25.1906 28.0416 25.0725 28.2615C24.9545 28.4809 24.7835 28.6673 24.5751 28.8035L21.578 30.7985L21.575 30.8005C21.3499 30.9487 21.0891 31.0336 20.8199 31.0461C20.5507 31.0587 20.2831 30.9985 20.0452 30.8719C19.8073 30.7453 19.6079 30.5569 19.4679 30.3266C19.328 30.0962 19.2527 29.8325 19.25 29.563L19.2499 29.5554L19.25 22.2432L19.248 22.2411L13.0904 15.4647C13.09 15.4644 13.0897 15.464 13.0894 15.4636C12.8935 15.2492 12.7642 14.9824 12.717 14.6958C12.6697 14.4087 12.707 14.1141 12.8243 13.8478C12.9415 13.5815 13.1337 13.3551 13.3773 13.1961C13.6208 13.0371 13.9053 12.9524 14.196 12.9522M30.3029 14.4522H14.1971L14.1988 14.4541L20.3553 21.2291C20.6114 21.5054 20.7525 21.869 20.75 22.2458V29.5477L23.75 27.5509L23.7499 27.5491L23.75 22.2458C23.7474 21.869 23.8886 21.5054 24.1447 21.2291L30.3012 14.4541L30.3029 14.4522Z"
                  fill="#2F3144"
                  fill-opacity="0.65"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center lg:order-2">
            <a href="#" class="mr-[14px]">
              <svg
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.25" width="44" height="44" rx="12" fill="#F4F4F4" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.0527 22C15.0527 21.5858 15.3885 21.25 15.8027 21.25H27.8027C28.2169 21.25 28.5527 21.5858 28.5527 22C28.5527 22.4142 28.2169 22.75 27.8027 22.75H15.8027C15.3885 22.75 15.0527 22.4142 15.0527 22Z"
                  fill="#2F3144"
                  fill-opacity="0.65"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3027 17.5C11.3027 17.0858 11.6385 16.75 12.0527 16.75H31.5527C31.9669 16.75 32.3027 17.0858 32.3027 17.5C32.3027 17.9142 31.9669 18.25 31.5527 18.25H12.0527C11.6385 18.25 11.3027 17.9142 11.3027 17.5Z"
                  fill="#2F3144"
                  fill-opacity="0.65"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.8027 26.5C18.8027 26.0858 19.1385 25.75 19.5527 25.75H24.0527C24.4669 25.75 24.8027 26.0858 24.8027 26.5C24.8027 26.9142 24.4669 27.25 24.0527 27.25H19.5527C19.1385 27.25 18.8027 26.9142 18.8027 26.5Z"
                  fill="#2F3144"
                  fill-opacity="0.65"
                />
              </svg>
            </a>
          </div>
          <div class="flex items-center lg:order-2">
            <button
              class="bg-blue text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-6 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Создать
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
