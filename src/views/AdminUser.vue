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
              <template v-slot:item.status="{ item }">
                <v-chip class="ma-2" color="green" text-color="white" v-if="item.status == 'Enabled'">
                  Enabled
                </v-chip>
                <v-chip class="ma-2" color="red" text-color="white" v-if="item.status == 'Disabled'">
                  Disabled
                </v-chip>
              </template>
              <template v-slot:item.action="{ item }">
                <v-btn icon  v-if="item.status != 'Enabled'">
                  <v-icon>mdi-eye-off</v-icon>
                </v-btn>
                <v-btn icon  v-else>
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-card>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return{
        // dialog: false,
        search: '',
        headers: [
          { text: 'Username', value: 'username' },
          { text: 'Department', value: 'department' },
          { text: 'Type', value: 'type' },
          { text: 'Status', value: 'status' },
          { text: 'Actions', value: 'action' },
        ],
        fileList: [
          {
            username: 'Johnmark',
            department: 'CMC',
            type: 'Faculty',
            status: 'Enabled'
          },
          {
            username: 'Johnmark',
            department: 'CMC',
            type: 'Faculty',
            status: 'Disabled'
          }
        ],
      }
    }
  }
</script>