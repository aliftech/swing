<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary color="primary">
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      >
        <template v-slot:append>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                variant="text"
                icon="mdi-chevron-right"
                v-bind="props"
              ></v-btn>
            </template>

            <v-list min-width="200" class="list">
              <v-list-item @click="toProfile">
                <v-list-item-title>
                  <v-icon>mdi-account</v-icon>
                  Profile
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <v-icon>mdi-cog</v-icon>
                  Setting
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <v-icon>mdi-run</v-icon>
                  Activities
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <v-icon color="red">mdi-power</v-icon>
                  <span class="text-red">Logout</span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav v-for="(item, i) in menu" :key="i">
        <v-list-item
          :prepend-icon="item.icon"
          :title="item.title"
          :to="item.url"
          v-if="!item.submenu"
        ></v-list-item>

        <v-list-group v-else :key="i">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :prepend-icon="item.icon"
              :title="item.title"
            ></v-list-item>
          </template>

          <v-list-item
            class="item_menu"
            v-for="(sub, idx) in item.submenu"
            :key="idx"
            :title="sub.title"
            :prepend-icon="sub.icon"
            :to="sub.url"
          ></v-list-item>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-item
          prepend-icon="mdi mdi-download"
          title="Download"
          href="https://github.com/aliftech/swing"
          target="__blank"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi mdi-currency-usd"
          title="Donate"
          href="https://teer.id/wahyu krisna aji"
          target="__blank"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <template v-slot:append>
        <v-btn class="text-none" stacked>
          <v-badge content="9+" color="error">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>

        <v-btn class="text-none" stacked>
          <v-badge content="9+" color="error">
            <v-icon>mdi-message</v-icon>
          </v-badge>
        </v-btn>
        <v-btn :prepend-icon="icon" @click="onClick"></v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import { themeSwitcher } from "@/store/theme";
export default {
  data() {
    return {
      drawer: null,
      menu: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          url: "/",
        },
        {
          title: "Layout",
          icon: "mdi-page-layout-header-footer",
          submenu: [
            {
              title: "Default Layout",
              icon: "mdi-circle-small",
              url: "/default-layout",
            },
            {
              title: "Top Navigation",
              icon: "mdi-circle-small",
              url: "/top-nav",
            },
            {
              title: "Bottom Navigation",
              icon: "mdi-circle-small",
              url: "/bottom-nav",
            },
          ],
        },
        {
          title: "Blank Page",
          icon: "mdi-file",
          url: "/blank-page",
        },
        {
          title: "Components",
          icon: "mdi-view-dashboard-variant",
          submenu: [
            {
              title: "Alert",
              icon: "mdi-circle-small",
              url: "/alert",
            },
            {
              title: "Article",
              icon: "mdi-circle-small",
              url: "/article",
            },
            {
              title: "Avatar",
              icon: "mdi-circle-small",
              url: "/avatar",
            },
            {
              title: "Badge",
              icon: "mdi-circle-small",
              url: "/badge",
            },
            {
              title: "Carousel",
              icon: "mdi-circle-small",
              url: "/carousel",
            },
            {
              title: "Chat Box",
              icon: "mdi-circle-small",
              url: "/chat-box",
            },
            {
              title: "Chart",
              icon: "mdi-circle-small",
              url: "/chart",
            },
            {
              title: "Color Picker",
              icon: "mdi-circle-small",
              url: "/color-picker",
            },
            {
              title: "Galery",
              icon: "mdi-circle-small",
              url: "/galery",
            },
            {
              title: "Tab",
              icon: "mdi-circle-small",
              url: "/tab",
            },
            {
              title: "Table",
              icon: "mdi-circle-small",
              url: "/table",
            },
            {
              title: "Timeline",
              icon: "mdi-circle-small",
              url: "/timeline",
            },
          ],
        },
        {
          title: "Form",
          icon: "mdi-format-align-justify",
          submenu: [
            {
              title: "Standard Form",
              icon: "mdi-circle-small",
              url: "/form-standard",
            },
            {
              title: "Advanced Form",
              icon: "mdi-circle-small",
              url: "/form-advanced",
            },
            {
              title: "Validation",
              icon: "mdi-circle-small",
              url: "/validation",
            },
          ],
        },
        {
          title: "Authorization",
          icon: "mdi-account-circle",
          submenu: [
            {
              title: "Login",
              icon: "mdi-circle-small",
              url: "/login",
            },
            {
              title: "Registration",
              icon: "mdi-circle-small",
              url: "/registration",
            },
            {
              title: "Forget Password",
              icon: "mdi-circle-small",
              url: "/forget-password",
            },
            {
              title: "Reset Password",
              icon: "mdi-circle-small",
              url: "/reset-password",
            },
          ],
        },
        {
          title: "Errors",
          icon: "mdi-alert-circle",
          submenu: [
            {
              title: "403",
              icon: "mdi-circle-small",
              url: "/403",
            },
            {
              title: "404",
              icon: "mdi-circle-small",
              url: "/404",
            },
            {
              title: "500",
              icon: "mdi-circle-small",
              url: "/500",
            },
            {
              title: "503",
              icon: "mdi-circle-small",
              url: "/503",
            },
          ],
        },
        {
          title: "Swipper",
          icon: "mdi-view-carousel",
          url: "/swipper",
        },
      ],
      icon: null,
      store: themeSwitcher(),
    };
  },
  mounted() {
    this.getIcon();
  },
  methods: {
    onClick() {
      this.$emit("tema");
      this.store.changeIcon();
      this.getIcon();
    },

    toProfile() {
      this.$router.push("/profile");
    },

    getIcon() {
      this.icon = this.store.icon;
    },
  },
};
</script>

<style scoped>
.list {
  cursor: pointer;
}

.item_menu {
  padding-left: 0px;
  margin-left: -25px;
}
</style>
