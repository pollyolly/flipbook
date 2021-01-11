<template>
  <v-app>
    <v-content>
          <v-card>
            <v-card-title>
              <v-btn color="d-none d-sm-flex primary" dark class="mb-2" @click="dialog = !dialog">Upload</v-btn>
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
                <v-chip class="ma-2" color="orange" text-color="white" v-if="item.status == 'Deleted'">
                  Waiting
                </v-chip>
              </template>
              <template v-slot:item.action="{ item }">
                 <v-btn icon  target="_blank" :href="item.publiclink" v-if="item.status === 'Enabled'">
                  <v-icon>mdi-file-pdf</v-icon>
                </v-btn>
                <v-btn icon  v-if="item.status != 'Enabled'">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-btn icon v-if="item.status == 'Deleted' || item.status == 'Disabled'">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                 <v-btn icon router :to="{path: '/template'}" v-else>
                  <v-icon>mdi-content-copy</v-icon>
                </v-btn>
                <v-btn icon  v-if="item.status != 'Enabled'">
                  <v-icon>mdi-eye-off</v-icon>
                </v-btn>
                <v-btn icon  v-if="item.status == 'Enabled'">
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn icon @click="deleteItem(item)" v-if="item.status != 'Deleted'">
                  <v-icon >delete</v-icon>
                </v-btn>
                <v-btn icon v-if="item.status == 'Deleted'">
                  <v-icon >mdi-restore</v-icon>
                </v-btn>
                <v-chip class="ma-2" v-if="item.status == 'Deleted'">
                  Requested
                </v-chip>
              </template>
            </v-data-table>
          </v-card>
    </v-content>
    <v-btn class="d-flex d-sm-none" bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-upload</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="grey darken-1">
          Upload
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
              <v-file-input chips multiple label="File input"></v-file-input>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer />
          <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    data() {
      return{
        dialog: false,
        search: '',
        headers: [
          { text: 'Filename', value: 'filename', },
          { text: 'Public link', value: 'publiclink' },
          { text: 'Date Uploaded', value: 'dateuploaded' },
          { text: 'Status', value: 'status' },
          { text: 'Actions', value: 'action' },
        ],
        fileList: [
          {
            filename: 'Sample-pdf.pdf',
            publiclink: 'https://flipbook.com/wMxYtpkzF1',
            dateuploaded: '2011/09/28 01:00 PM',
            status: 'Enabled',
          },
          {
            filename: 'Sample-pdf.pdf',
            publiclink: 'https://flipbook.com/wMxYtpkzF2',
            dateuploaded: '2011/09/28 01:00 PM',
            status: 'Disabled',
          },
          {
            filename: 'Sample-pdf.pdf',
            publiclink: 'https://flipbook.com/wMxYtpkzF3',
            dateuploaded: '2011/09/28 01:00 PM',
            status: 'Deleted',
          },
          {
            filename: 'Sample-pdf.pdf',
            publiclink: 'https://flipbook.com/wMxYtpkzF4',
            dateuploaded: '2011/09/28 01:00 PM',
            status: 'Enabled',
          },
          {
            filename: 'Sample-pdf.pdf',
            publiclink: 'https://flipbook.com/wMxYtpkzF5',
            dateuploaded: '2011/09/28 01:00 PM',
            status: 'Enabled',
          },
          {
            filename: 'Sample-pdf.pdf',
            publiclink: 'https://flipbook.com/wMxYtpkzF6',
            dateuploaded: '2011/09/28 01:00 PM',
            status: 'Enabled',
          },
          {
            filename: 'Sample-pdf.pdf',
            publiclink: 'https://flipbook.com/wMxYtpkzF7',
            dateuploaded: '2011/09/28 01:00 PM',
            status: 'Enabled',
          },
          {
            filename: 'Sample-pdf.pdf',
            publiclink: 'https://flipbook.com/wMxYtpkzF8',
            dateuploaded: '2011/09/28 01:00 PM',
            status: 'Enabled',
          },
          {
            filename: 'Sample-pdf.pdf',
            publiclink: 'https://flipbook.com/wMxYtpkzF9',
            dateuploaded: '2011/09/28 01:00 PM',
            status: 'Enabled',
          },
        ],
      }
    }
  }
</script>