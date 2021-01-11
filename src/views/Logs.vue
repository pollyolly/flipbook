<template>
  <v-app>
    <v-content>
          <v-card>
            <v-card-title>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="fileList" :search="search">
            </v-data-table>
          </v-card>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return{
        dialog: false,
        search: '',
        headers: [
            { text: 'IP Address', value: 'ipaddress' },
            { text: 'User', value: 'user' },
            { text: 'Date', value: 'date' },
            { text: 'Activity', value: 'activity' }
        ],
        fileList: [
          {  
            ipaddress: '202.92.19.56',
            user: 'Johnmark',
            date: '2019/11/25 01:45 PM',
            activity: 'Login'
          },
          {  
            ipaddress: '202.92.19.56',
            user: 'Anonymous',
            date: '2019/11/25 12:00 AM',
            activity: 'Delete flipbook.'
          },
        ],
      }
    }
  }
</script>