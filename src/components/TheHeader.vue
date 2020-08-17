<template>
  <!-- header area start -->
  <header class="dt-header">
    <!-- Header container -->
    <div class="dt-header__container">
      <!-- Brand -->
      <div class="dt-brand">
        <!-- Brand tool -->
        <div class="dt-brand__tool" data-toggle="main-sidebar">
          <div class="hamburger-inner"></div>
        </div>
        <!-- /brand tool -->

        <!-- Brand logo -->
        <span class="dt-brand__logo">
          <a class="dt-brand__logo-link" href="index-2.html">
            <img
              class="d-none d-sm-inline-block"
              src="/assets/images/logo/botLogo.png"
              alt="bot"
              width="150px"
            />
          </a>
        </span>
        <!-- /brand logo -->
      </div>
      <!-- /brand -->

      <!-- Header toolbar-->
      <div class="dt-header__toolbar">
        <!-- Search box -->
        <!-- <form class="search-box d-none d-lg-block">
          <div class="input-group">
            <input class="form-control" placeholder="Search in app..." value type="search" />
            <span class="search-icon">
              <i class="icon icon-search icon-lg"></i>
            </span>
            <div class="input-group-append">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Category</button>

              <div class="dropdown-menu">
                <a class="dropdown-item" href="javascript:void(0)">Action</a>
                <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
              </div>
            </div>
          </div>
        </form>-->
        <!-- /search box -->

        <!-- Header Menu Wrapper -->
        <div class="dt-nav-wrapper">
          <!-- Header Menu -->
          <ul class="dt-nav d-lg-none">
            <li class="dt-nav__item dt-notification-search dropdown">
              <!-- Dropdown Link -->
              <a
                href="#"
                class="dt-nav__link dropdown-toggle no-arrow"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="icon icon-search icon-fw icon-lg"></i>
              </a>
              <!-- /dropdown link -->

              <!-- Dropdown Option -->
              <div class="dropdown-menu">
                <!-- Search Box -->
                <form class="search-box right-side-icon">
                  <input
                    class="form-control form-control-lg"
                    type="search"
                    placeholder="Search in app..."
                  />
                  <button type="submit" class="search-icon">
                    <i class="icon icon-search icon-lg"></i>
                  </button>
                </form>
                <!-- /search box -->
              </div>
              <!-- /dropdown option -->
            </li>
          </ul>
          <!-- /header menu -->

          <!-- Header Menu -->
          <ul class="dt-nav">
            <li class="dt-nav__item dt-notification-app dropdown">
              <!-- Dropdown Link -->
              <a
                href="#"
                class="dt-nav__link dropdown-toggle no-arrow"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="icon icon-apps icon-sm icon-fw"></i>
                <span>Apps</span>
              </a>
              <!-- /dropdown link -->

              <!-- Dropdown Option -->
              <div class="dropdown-menu ps-custom-scrollbar">
                <!-- Apps -->
                <ul class="dt-app-list">
                  <li class="dt-app-list__item">
                    <a href="javascript:void(0)" class="dt-app-list__link">
                      <img
                        src="assets/images/icon/icon-account.png"
                        alt="Google Account"
                      />
                      <span class="dt-app-list__text">Account</span>
                    </a>
                  </li>
                  <li class="dt-app-list__item">
                    <a href="javascript:void(0)" class="dt-app-list__link">
                      <img
                        src="assets/images/icon/icon-google.png"
                        alt="Google Search"
                      />
                      <span class="dt-app-list__text">Search</span>
                    </a>
                  </li>
                  <li class="dt-app-list__item">
                    <a href="javascript:void(0)" class="dt-app-list__link">
                      <img
                        src="assets/images/icon/icon-map.png"
                        alt="Google Map"
                      />
                      <span class="dt-app-list__text">Maps</span>
                    </a>
                  </li>
                  <li class="dt-app-list__item">
                    <a href="javascript:void(0)" class="dt-app-list__link">
                      <img
                        src="assets/images/icon/icon-youtube.png"
                        alt="Youtube"
                      />
                      <span class="dt-app-list__text">YouTube</span>
                    </a>
                  </li>
                  <li class="dt-app-list__item">
                    <a href="javascript:void(0)" class="dt-app-list__link">
                      <img
                        src="assets/images/icon/icon-playstore.png"
                        alt="Play Store"
                      />
                      <span class="dt-app-list__text">Play</span>
                    </a>
                  </li>
                  <li class="dt-app-list__item">
                    <a href="javascript:void(0)" class="dt-app-list__link">
                      <img
                        src="assets/images/icon/icon-news.png"
                        alt="Google News"
                      />
                      <span class="dt-app-list__text">News</span>
                    </a>
                  </li>
                  <li class="dt-app-list__item">
                    <a href="javascript:void(0)" class="dt-app-list__link">
                      <img
                        src="assets/images/icon/icon-gmail.png"
                        alt="Google Drive"
                      />
                      <span class="dt-app-list__text">Gmail</span>
                    </a>
                  </li>
                  <li class="dt-app-list__item">
                    <a href="javascript:void(0)" class="dt-app-list__link">
                      <img
                        src="assets/images/icon/icon-drive.png"
                        alt="Google Drive"
                      />
                      <span class="dt-app-list__text">Drive</span>
                    </a>
                  </li>
                  <li class="dt-app-list__item">
                    <a href="javascript:void(0)" class="dt-app-list__link">
                      <img
                        src="assets/images/icon/icon-calendar.png"
                        alt="Calendar"
                      />
                      <span class="dt-app-list__text">Calendar</span>
                    </a>
                  </li>
                  <li class="dt-app-list__item">
                    <a href="javascript:void(0)" class="dt-app-list__link">
                      <img
                        src="assets/images/icon/icon-google-plus.png"
                        alt="Google Plus"
                      />
                      <span class="dt-app-list__text">Google+</span>
                    </a>
                  </li>
                  <li class="dt-app-list__item">
                    <a href="javascript:void(0)" class="dt-app-list__link">
                      <img
                        src="assets/images/icon/icon-translate.png"
                        alt="Translate"
                      />
                      <span class="dt-app-list__text">Translate</span>
                    </a>
                  </li>
                  <li class="dt-app-list__item">
                    <a href="javascript:void(0)" class="dt-app-list__link">
                      <img
                        src="assets/images/icon/icon-photos.png"
                        alt="Photos"
                      />
                      <span class="dt-app-list__text">Photos</span>
                    </a>
                  </li>
                </ul>
                <!-- /apps -->
              </div>
              <!-- /dropdown option -->
            </li>
          </ul>
          <!-- /header menu -->

          <!-- Header Menu -->
          <ul class="dt-nav">
            <li class="dt-nav__item dt-notification dropdown">
              <!-- Dropdown Link -->
              <a
                href="#"
                class="dt-nav__link dropdown-toggle no-arrow"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="icon icon-notification2 icon-fw dt-icon-alert"></i>
              </a>
              <!-- /dropdown link -->

              <!-- Dropdown Option -->
              <div
                class="dropdown-menu dropdown-menu-right dropdown-menu-media"
              >
                <!-- Dropdown Menu Header -->
                <div class="dropdown-menu-header">
                  <h4 class="title">Notifications (9)</h4>

                  <div class="ml-auto action-area">
                    <a href="javascript:void(0)">Mark All Read</a>
                    <a class="ml-2" href="javascript:void(0)">
                      <i class="icon icon-settings icon-lg text-light-gray"></i>
                    </a>
                  </div>
                </div>
                <!-- /dropdown menu header -->

                <!-- Dropdown Menu Body -->
                <div class="dropdown-menu-body ps-custom-scrollbar">
                  <div class="h-auto">
                    <!-- Media -->
                    <a href="javascript:void(0)" class="media">
                      <!-- Avatar -->
                      <img
                        class="dt-avatar mr-3"
                        src="assets/images/user-avatar/stella-johnson.jpg"
                        alt="User"
                      />
                      <!-- avatar -->

                      <!-- Media Body -->
                      <span class="media-body">
                        <span class="message">
                          <span class="user-name">Stella Johnson</span>
                          and
                          <span class="user-name">Chris Harris</span>
                          have birthdays today. Help them celebrate!
                        </span>
                        <span class="meta-date">8 hours ago</span>
                      </span>
                      <!-- /media body -->
                    </a>
                    <!-- /media -->

                    <!-- Media -->
                    <a href="javascript:void(0)" class="media">
                      <!-- Avatar -->
                      <img
                        class="dt-avatar mr-3"
                        src="assets/images/user-avatar/jeson-born.jpg"
                        alt="User"
                      />
                      <!-- avatar -->

                      <!-- Media Body -->
                      <span class="media-body">
                        <span class="message">
                          <span class="user-name">Jonathan Madano</span>
                          commented on your post.
                        </span>
                        <span class="meta-date">9 hours ago</span>
                      </span>
                      <!-- /media body -->
                    </a>
                    <!-- /media -->

                    <!-- Media -->
                    <a href="javascript:void(0)" class="media">
                      <!-- Avatar -->
                      <img
                        class="dt-avatar mr-3"
                        src="assets/images/user-avatar/selena.jpg"
                        alt="User"
                      />
                      <!-- avatar -->

                      <!-- Media Body -->
                      <span class="media-body">
                        <span class="message">
                          <span class="user-name">Chelsea Brown</span>
                          sent a video recomendation.
                        </span>
                        <span class="meta-date">
                          <i
                            class="icon icon-play-circle text-primary icon-fw mr-1"
                          ></i>
                          13 hours ago
                        </span>
                      </span>
                      <!-- /media body -->
                    </a>
                    <!-- /media -->

                    <!-- Media -->
                    <a href="javascript:void(0)" class="media">
                      <!-- Avatar -->
                      <img
                        class="dt-avatar mr-3"
                        src="assets/images/user-avatar/alex-dolgove.jpg"
                        alt="User"
                      />
                      <!-- avatar -->

                      <!-- Media Body -->
                      <span class="media-body">
                        <span class="message">
                          <span class="user-name">Alex Dolgove</span> and
                          <span class="user-name">Chris Harris</span>
                          like your post.
                        </span>
                        <span class="meta-date">
                          <i
                            class="icon icon-like text-light-blue icon-fw mr-1"
                          ></i>
                          yesterday at 9:30
                        </span>
                      </span>
                      <!-- /media body -->
                    </a>
                    <!-- /media -->
                  </div>
                </div>
                <!-- /dropdown menu body -->

                <!-- Dropdown Menu Footer -->
                <div class="dropdown-menu-footer">
                  <a href="javascript:void(0)" class="card-link">
                    See All
                    <i class="icon icon-arrow-right icon-fw"></i>
                  </a>
                </div>
                <!-- /dropdown menu footer -->
              </div>
              <!-- /dropdown option -->
            </li>

            <li class="dt-nav__item dt-notification dropdown">
              <!-- Dropdown Link -->
              <a
                href="#"
                class="dt-nav__link dropdown-toggle no-arrow"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="icon icon-open-mail icon-fw"></i>
              </a>
              <!-- /dropdown link -->

              <!-- Dropdown Option -->
              <div
                class="dropdown-menu dropdown-menu-right dropdown-menu-media"
              >
                <!-- Dropdown Menu Header -->
                <div class="dropdown-menu-header">
                  <h4 class="title">Messages (6)</h4>

                  <div class="ml-auto action-area">
                    <a href="javascript:void(0)">Mark All Read</a>
                    <a class="ml-2" href="javascript:void(0)">
                      <i class="icon icon-settings icon-lg text-light-gray"></i>
                    </a>
                  </div>
                </div>
                <!-- /dropdown menu header -->

                <!-- Dropdown Menu Body -->
                <div class="dropdown-menu-body ps-custom-scrollbar">
                  <div class="h-auto">
                    <!-- Media -->
                    <a href="javascript:void(0)" class="media">
                      <!-- Avatar -->
                      <img
                        class="dt-avatar mr-3"
                        src="assets/images/user-avatar/mathew.jpg"
                        alt="User"
                      />
                      <!-- avatar -->

                      <!-- Media Body -->
                      <span class="media-body text-truncate">
                        <span class="user-name mb-1">Chris Mathew</span>
                        <span class="message text-light-gray text-truncate"
                          >Okay.. I will be waiting for your...</span
                        >
                      </span>
                      <!-- /media body -->

                      <span class="action-area h-100 min-w-80 text-right">
                        <span class="meta-date mb-1">8 hours ago</span>
                        <!-- Toggle Button -->
                        <span
                          class="toggle-button"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Mark as read"
                        >
                          <span class="show">
                            <i
                              class="icon icon-dot-o icon-fw f-10 text-light-gray"
                            ></i>
                          </span>
                          <span class="hide">
                            <i
                              class="icon icon-dot icon-fw f-10 text-light-gray"
                            ></i>
                          </span>
                        </span>
                        <!-- /toggle button -->
                      </span>
                    </a>
                    <!-- /media -->

                    <!-- Media -->
                    <a href="javascript:void(0)" class="media">
                      <!-- Avatar -->
                      <img
                        class="dt-avatar mr-3"
                        src="assets/images/user-avatar/stella-johnson.jpg"
                        alt="User"
                      />
                      <!-- avatar -->

                      <!-- Media Body -->
                      <span class="media-body text-truncate">
                        <span class="user-name mb-1">Alia Joseph</span>
                        <span class="message text-light-gray text-truncate">
                          Alia Joseph just joined Messenger! Be the first to
                          send a welcome message or sticker.
                        </span>
                      </span>
                      <!-- /media body -->

                      <span class="action-area h-100 min-w-80 text-right">
                        <span class="meta-date mb-1">9 hours ago</span>
                        <!-- Toggle Button -->
                        <span
                          class="toggle-button"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Mark as read"
                        >
                          <span class="show">
                            <i
                              class="icon icon-dot-o icon-fw f-10 text-light-gray"
                            ></i>
                          </span>
                          <span class="hide">
                            <i
                              class="icon icon-dot icon-fw f-10 text-light-gray"
                            ></i>
                          </span>
                        </span>
                        <!-- /toggle button -->
                      </span>
                    </a>
                    <!-- /media -->

                    <!-- Media -->
                    <a href="javascript:void(0)" class="media">
                      <!-- Avatar -->
                      <img
                        class="dt-avatar mr-3"
                        src="assets/images/user-avatar/steve-smith.jpg"
                        alt="User"
                      />
                      <!-- avatar -->

                      <!-- Media Body -->
                      <span class="media-body text-truncate">
                        <span class="user-name mb-1">Joshua Brian</span>
                        <span class="message text-light-gray text-truncate">
                          Alex will explain you how to keep the HTML structure
                          and all that.
                        </span>
                      </span>
                      <!-- /media body -->

                      <span class="action-area h-100 min-w-80 text-right">
                        <span class="meta-date mb-1">12 hours ago</span>
                        <!-- Toggle Button -->
                        <span
                          class="toggle-button"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Mark as read"
                        >
                          <span class="show">
                            <i
                              class="icon icon-dot-o icon-fw f-10 text-light-gray"
                            ></i>
                          </span>
                          <span class="hide">
                            <i
                              class="icon icon-dot icon-fw f-10 text-light-gray"
                            ></i>
                          </span>
                        </span>
                        <!-- /toggle button -->
                      </span>
                    </a>
                    <!-- /media -->

                    <!-- Media -->
                    <a href="javascript:void(0)" class="media">
                      <!-- Avatar -->
                      <img
                        class="dt-avatar mr-3"
                        src="assets/images/user-avatar/domnic-brown.jpg"
                        alt="User"
                      />
                      <!-- avatar -->

                      <!-- Media Body -->
                      <span class="media-body text-truncate">
                        <span class="user-name mb-1">Domnic Brown</span>
                        <span class="message text-light-gray text-truncate"
                          >Okay.. I will be waiting for your...</span
                        >
                      </span>
                      <!-- /media body -->

                      <span class="action-area h-100 min-w-80 text-right">
                        <span class="meta-date mb-1">yesterday</span>
                        <!-- Toggle Button -->
                        <span
                          class="toggle-button"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Mark as read"
                        >
                          <span class="show">
                            <i
                              class="icon icon-dot-o icon-fw f-10 text-light-gray"
                            ></i>
                          </span>
                          <span class="hide">
                            <i
                              class="icon icon-dot icon-fw f-10 text-light-gray"
                            ></i>
                          </span>
                        </span>
                        <!-- /toggle button -->
                      </span>
                    </a>
                    <!-- /media -->
                  </div>
                </div>
                <!-- /dropdown menu body -->

                <!-- Dropdown Menu Footer -->
                <div class="dropdown-menu-footer">
                  <a href="javascript:void(0)" class="card-link">
                    See All
                    <i class="icon icon-arrow-right icon-fw"></i>
                  </a>
                </div>
                <!-- /dropdown menu footer -->
              </div>
              <!-- /dropdown option -->
            </li>
          </ul>
          <!-- /header menu -->

          <!-- Header Menu -->
          <ul class="dt-nav">
            <li class="dt-nav__item dropdown">
              <!-- Dropdown Option -->
              <div class="dropdown-menu">
                <a class="dropdown-item" href="javascript:void(0)">
                  <i class="flag-icon flag-icon-in mr-2"></i>
                  <span>Hi-In</span>
                </a>
                <a class="dropdown-item" href="javascript:void(0)">
                  <i class="flag-icon flag-icon-cn mr-2"></i>
                  <span>Chinese</span>
                </a>
                <a class="dropdown-item" href="javascript:void(0)">
                  <i class="flag-icon flag-icon-es mr-2"></i>
                  <span>Spanish</span>
                </a>
              </div>
              <!-- /dropdown option -->
            </li>
          </ul>
          <!-- /header menu -->

          <!-- Header Menu -->
          <ul class="dt-nav">
            <li class="dt-nav__item dropdown">
              <!-- Dropdown Link -->
              <a
                href="#"
                class="dt-nav__link dropdown-toggle no-arrow dt-avatar-wrapper"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  class="dt-avatar size-30"
                  :src="
                    $store.state.authModule.user
                      ? $store.state.authModule.user.profile_pic
                      : ''
                  "
                  alt="Domnic Harris"
                />
                <span class="dt-avatar-info d-none d-sm-block">
                  <span class="dt-avatar-name">{{ fullname }}</span>
                </span>
              </a>
              <!-- /dropdown link -->

              <!-- Dropdown Option -->
              <div class="dropdown-menu dropdown-menu-right">
                <div
                  class="dt-avatar-wrapper flex-nowrap p-6 mt-n2 bg-gradient-purple text-white rounded-top"
                >
                  <img
                    class="dt-avatar"
                    src="assets/images/user-avatar/domnic-harris.jpg"
                    alt="Domnic Harris"
                  />
                  <span class="dt-avatar-info">
                    <span class="dt-avatar-name">Bob Hyden</span>
                    <span class="f-12">Administrator</span>
                  </span>
                </div>
                <a class="dropdown-item" href="javascript:void(0)">
                  <i class="icon icon-user icon-fw mr-2 mr-sm-1"></i>Account
                </a>
                <a class="dropdown-item" href="javascript:void(0)">
                  <i class="icon icon-settings icon-fw mr-2 mr-sm-1"></i>Setting
                </a>
                <a class="dropdown-item" href="page-login.html">
                  <i class="icon icon-editors icon-fw mr-2 mr-sm-1"></i>Logout
                </a>
              </div>
              <!-- /dropdown option -->
            </li>
          </ul>
          <!-- /header menu -->
        </div>
        <!-- Header Menu Wrapper -->
      </div>
      <!-- /header toolbar -->
    </div>
    <!-- /header container -->
  </header>
  <!-- header area end -->
</template>

<script>
export default {
  computed: {
    fullname() {
      return this.$store.getters['authModule/fullname'];
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.dt-header,
.dt-brand {
  background-color: #512da8;
}
</style>
