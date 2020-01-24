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
  >
    <v-toolbar dense dark class="primary">
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
    </v-toolbar>
  </v-card>  
    <main>
      <router-view></router-view>
    </main>
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
