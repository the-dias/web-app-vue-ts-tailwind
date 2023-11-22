<script setup lang="ts">
// import { ref } from "vue";
import { ref } from "vue";

import "./ui/styles/styles.css";
// import Search from "./Search.vue";
// import MainHeader from "./ui/MainHeader.vue";
import Table from "./ui/Table.vue";
import Pagination from "./utils/Pagination.vue";

import Sidebar from "./ui/sidebar/Sidebar.vue";

import MainHeader from "./ui/MainHeader.vue";
const isSidebarCollapsed = ref(true);

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};
</script>
<!-- sm:rounded-lg -->
<template>
  <div
    v-if="isSidebarCollapsed"
    class="flex flex-col overflow-x-auto shadow-md w-[calc(100%-274px)] my-2"
  >
    <Sidebar v-if="isSidebarCollapsed" />
    <div v-if="!isSidebarCollapsed" class="toggleSidebarIcon">
      <a class="w-full -ml-3 absolute z-50" href="#" @click="toggleSidebar">
        <img
          src="../assets/collapse_sidebar.svg"
          class="pointer-events-auto fixed z-50 toggleSidebarIcon"
        />
      </a>
    </div>
    <div v-else class="toggleSidebarIcon">
      <a href="#" @click="toggleSidebar" class="w-full fixed z-50">
        <img
          src="../assets/collapse_sidebar.svg"
          class="pointer-events-auto absolute z-50"
        />
      </a>
    </div>
    <MainHeader v-if="!isSidebarCollapsed" />
    <MainHeader v-else />

    <Table />
    <Pagination />
  </div>

  <div v-else class="relative overflow-x-auto shadow-md w-full h-full mt-2">
    <Sidebar v-if="isSidebarCollapsed" />
    <a
      v-if="isSidebarCollapsed === false"
      href="#"
      @click="toggleSidebar"
      class="w-full fixed z-50"
    >
      <img
        src="../assets/collapse_sidebar.svg"
        class="pointer-events-auto fixed z-50"
      />
    </a>
    <a
      v-else
      href="#"
      @click="toggleSidebar"
      class="w-full fixed ml-[274px] z-50"
    >
      <img
        src="../assets/collapse_sidebar.svg"
        class="pointer-events-auto absolute z-50"
      />
    </a>
    <MainHeader v-if="isSidebarCollapsed === false" />
    <MainHeader v-else />

    <Table />
    <!-- v-if="isSidebarCollapsed === false" -->
    <!-- <Table v-else class="sm:ml-[274px]" /> -->
    <Pagination />
  </div>
</template>

<!-- <div :class="{'with-sidebar': isSidebarCollapsed}">
  <Sidebar v-if="isSidebarCollapsed" />

  <a
    href="#"
    @click="toggleSidebar"
    class="w-full mt-10 mr-1 fixed z-50"
  >
    <img
      src="../assets/collapse_sidebar.svg"
      class="pointer-events-auto absolute z-50"
    />
  </a>

  <MainHeader v-if="!isSidebarCollapsed" />

  <div class="relative overflow-x-auto shadow-md" :class="{ 'w-[calc(100%-274px)]': isSidebarCollapsed, 'w-full': !isSidebarCollapsed }">
    <Table />
    <Pagination />
  </div>
</div> -->
