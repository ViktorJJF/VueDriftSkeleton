<template>
  <aside id="main-sidebar" class="dt-sidebar">
    <div class="dt-sidebar__container">
      <!-- Sidebar Navigation -->
      <ul class="dt-side-nav">
        <!-- Menu Header -->
        <li class="dt-side-nav__item dt-side-nav__header">
          <span class="dt-side-nav__text">Menú de opciones</span>
        </li>
        <!-- /menu header -->
        <!-- Menu Header -->
        <li
          :class="{ 'dt-side-nav__item': true, open: false }"
          v-for="item in items"
          :key="item.id"
        >
          <router-link
            :to="item.to"
            :class="{
              'dt-side-nav__link': true,
              'dt-side-nav__arrow': item.subItems.length > 0,
            }"
          >
            <i class="icon icon-dashboard icon-fw icon-lg"></i>
            <span class="dt-side-nav__text">{{ item.title }}</span>
          </router-link>

          <!-- Sub-menu -->
          <ul
            class="dt-side-nav__sub-menu"
            v-for="subItem in item.subItems"
            :key="subItem.id"
            v-show="item.subItems.length > 0"
          >
            <li class="dt-side-nav__item">
              <router-link :to="subItem.to" class="dt-side-nav__link">
                <i class="icon icon-layout icon-fw icon-lg"></i>
                <span class="dt-side-nav__text">{{ subItem.title }}</span>
              </router-link>
            </li>
          </ul>
        </li>
        <!-- multiple menu -->
      </ul>
      <!-- /sidebar navigation -->
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        {
          id: this.$uuid(),
          title: 'Marcas',
          to: { name: 'ListBrands' },
          icon: 'ti-dashboard',
          subItems: [],
        },
        {
          id: this.$uuid(),
          title: 'Marcas',
          to: { name: 'ListBrands' },
          icon: 'ti-dashboard',
          subItems: [
            {
              id: this.$uuid(),
              title: 'Listar Marca',
              to: { name: 'ListBrands' },
              icon: 'ti-dashboard',
            },
            {
              id: this.$uuid(),
              title: 'Crear Marca',
              to: { name: 'CreateBrands' },
              icon: 'ti-dashboard',
            },
          ],
        },
      ],
    };
  },
  methods: {
    getActiveIndex(index) {
      this.activeIndex = index;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.sidebar-font {
  font-size: 18px;
}
</style>
