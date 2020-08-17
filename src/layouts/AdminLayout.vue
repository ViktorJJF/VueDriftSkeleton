<template>
  <div class="dt-root">
    <div class="dt-root__inner">
      <!-- Header -->
      <the-header></the-header>
      <!-- Site Main -->
      <main class="dt-main">
        <!-- Sidebar -->
        <the-sidebar></the-sidebar>
        <!-- Sidebar -->
        <!-- Site Content Wrapper -->
        <div class="dt-content-wrapper">
          <!-- Site Content -->
          <div class="dt-content">
            <router-view></router-view>
          </div>
          <!-- Footer -->
          <the-footer></the-footer>
          <!-- Footer -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import TheSidebar from '@/components/TheSidebar';
import { addCustomScript } from '@/utils/utils';
export default {
  components: {
    TheHeader,
    TheSidebar,
    TheFooter,
  },
  data() {
    return {
      isDataReady: false,
    };
  },
  mounted() {
    console.log('se monto admin');
    addCustomScript('/modules/jquery/dist/jquery.min.js');
    addCustomScript('/modules/bootstrap/dist/js/bootstrap.bundle.min.js');
    addCustomScript('/assets/js/functions.js');
    addCustomScript('/assets/js/script.js');
    this.isDataReady = true;
  },
};
</script>

<style lang="scss" scoped></style>
