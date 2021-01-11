<template>
     <v-app>
    <v-content>
          <v-card class="mx-auto mt-5" max-width="500">
            <v-card-title>
              LDAP Settings
            </v-card-title>
            <v-card-text>
              <div class="d-flex flex-row">
                <v-text-field outlined dense label="Host" placeholder="ldaps://10.30.16.3"></v-text-field>
              </div>
              <div class="d-flex flex-row">
                <v-text-field outlined dense label="Port" placeholder="636"></v-text-field>
              </div>
              <!-- <div class="d-flex flex-row">
                <p>Connection:</p><p class="text--primary"> SSL</p> <v-spacer/>
              </div> -->
              <div class="d-flex flex-row">
                <v-text-field outlined dense label="Filter by" placeholder="Any/Faculty/Student"></v-text-field>
              </div>
              <div class="d-flex flex-row">
                  <v-text-field outlined dense label="Organization" placeholder="University of the Philippines"></v-text-field>
              </div>
              <div class="d-flex flex-row">
                  <v-text-field outlined dense label="Country" placeholder="PH"></v-text-field>
              </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn text >Save</v-btn>
            </v-card-actions>
          </v-card>
    </v-content>
  </v-app>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/* .v-text-field {
    font-size: 12px;
  } */
</style>