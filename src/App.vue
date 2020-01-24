<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
    <v-list>
      <v-subheader>Menu</v-subheader>
      <v-list-item-group>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

   <v-card
    color="grey lighten-4"
    flat
    tile
    class="mb-4"
  >

    <v-app-bar dense dark class="primary" height="80px">
      <v-app-bar-nav-icon 
      @click="drawer = !drawer"
      class="hidden-sm-and-up"
      >
      </v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">New GSIS Cooperative</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" 
      >
        <v-btn text
          v-for="item in menuItems" 
          :key=" item.title"
          route
          :to="item.link"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-card>

        <main>
          <router-view></router-view>
        </main>

      <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      primary
    >
    <v-card-text class="white--text pt-0">

      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>    
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      menuItems: [
        {icon: 'mdi-home', title: 'Home' ,link: '/'},
        {icon: 'mdi-bank', title: 'Services' ,link: '/services'},
        {icon: 'mdi-information-outline', title: 'About' ,link: '/about'},
        {icon: 'mdi-lock', title: 'Log In' ,link: '/login'}
      ]
    }
  }
};
</script>
