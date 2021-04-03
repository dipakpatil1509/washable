<template>
  <div id="Navbar">
    <div class="navbar-fixed">
      <nav class="desktop-nav">
        <div class="nav_helper"></div>
        <div class="container nav-wrapper u-p">
          <router-link
            :to="{ name: 'Bookings' }"
            class="brand-logo left truncate"
            id="brand-logo"
          >
            <img
              src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/5e17558f848f82e664c09d67_logo-dark.svg"
              alt="Logo"
            />
          </router-link>
          <ul id="nav-mobile" class="right">
            <span class="hide-on-med-and-down">
              <span>
                <li>
                  <router-link :to="{ name: 'Bookings' }">
                    Bookings
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Profile' }"> Profile </router-link>
                </li>
                <li>
                  <a href="#!" @click.prevent="logout"> Logout </a>
                </li>
              </span>
            </span>
          </ul>
          <a href="#!" data-target="slide-out" class="sidenav-trigger left"
            ><i class="material-icons ham">menu</i></a
          >
        </div>
      </nav>
    </div>
    <ul id="slide-out" class="sidenav">
      <li>
        <div class="user-view" align="center">
          <img
            @click="closeSideBar"
            src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/5e17558f848f82e664c09d67_logo-dark.svg"
            alt="Supplys Logo"
          />
        </div>
      </li>

      <li>
        <router-link @click="closeSideBar" :to="{ name: 'Bookings' }">
          Bookings
        </router-link>
      </li>
      <li>
        <router-link @click="closeSideBar" :to="{ name: 'Profile' }">
          Profile
        </router-link>
      </li>

      <li>
        <div class="divider"></div>
      </li>
      <li>
        <a href="#!" @click.prevent="logout"> Logout </a>
      </li>
    </ul>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  name: "Navbar",
  methods: {
    logout() {},
    closeSideBar() {
      var elem = document.querySelector(".sidenav");
      var instance = new M.Sidenav(elem);
      instance.close();
    },
  },

  mounted() {
    var elems = document.querySelectorAll(".sidenav");
    var options = {};
    M.Sidenav.init(elems, options);
  },
};
</script>

<style lang="scss" scoped>
.ham {
  font-size: 24px !important;
}
.nav-wrapper .brand-logo {
  img {
    width: 150px;
    height: 50px;
    object-fit: contain;
  }
}
#nav-mobile li a {
  font-size: 18px;
}
nav {
  background: var(--textColor);
  color: var(--backgroundColor);
  border: none;
  box-shadow: none;
  padding: 2px 0;
  z-index: 123456789;
}
nav li {
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}
nav a {
  color: #fff !important;
}
.active {
  font-weight: bolder;
  font-size: 25px;
}
.sidenav {
  img {
    width: 100%;
    height: 100px;
    object-fit: contain;
  }
}
@media screen and (max-width: 600px) {
  nav {
    text-align: center;
  }
  .nav-wrapper .brand-logo {
    display: inline-block;
    margin: 0 20% !important;
  }
}
</style>