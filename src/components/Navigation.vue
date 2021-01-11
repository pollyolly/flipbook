<template>
<div>    
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">
          <v-list-item :key="item.text" router :to="item.url">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content >
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app style="background-color: #85162e;" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Flipbook</span>
      </v-toolbar-title>
      <v-spacer />
      <span class="mr-5" >Johnmark</span>
      <v-btn icon href="https://helpdesk.ilc.upd.edu.ph" target="_blank">
        <v-icon>mdi-help-circle</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify"/></v-avatar>
      </v-btn>
    </v-app-bar>
</div>
</template>
<script>
export default {
    data(){
        return {
            dialog: false,
            drawer: null,
            items: [
            { icon: 'mdi-home', text: 'Home', url: '/' },
            { icon: 'mdi-home', text: 'Admin Home', url: '/adminhome' },
            { icon: 'mdi-content-copy', text: 'Template', url: '/template' },
            { icon: 'mdi-contacts', text: 'My Info', url: '/user' },
            { icon: 'mdi-contacts', text: 'Admin User', url: '/adminuser' },
            { icon: 'mdi-settings', text: 'LDAP Settings', url: '/settings' },
            { icon: 'mdi-desktop-tower', text: 'Logs', url: '/logs' },
            { icon: 'mdi-information', text: 'About', url: '/about' },
            // { icon: 'mdi-help-circle', text: 'Helpdesk', ur:''},
            ],
        }
    }
}
</script>