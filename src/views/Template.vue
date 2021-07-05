<template>
     <v-app>
    <v-content>
          <v-card class="mx-auto mt-5" max-width="1000">
            <v-card-title class="d-flex flex-row">
              Template
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>
                    mdi-content-copy
                </v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <div class="d-flex flex-row" v-if="changeTitle != ''">
                <p class="text--primary">'''{{ changeTitle }}'''</p>
              </div>
              <div class="d-flex flex-row" v-if="changeAbstract != ''">
                <p class="text--primary">'''Abstract'''</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text--primary">{{ changeAbstract }}</p>
              </div>
              <div class="d-flex flex-row" v-if="changeKeywords != ''">
                <p class="text--primary">'''Keywords'''</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text--primary">{{ changeKeywords }}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text--primary">[{{ changeFlipbooklink }} {{ changeFlipbooktitle }}]</p> <v-spacer/>
              </div>
              <div class="d-flex flex-row">
                <p class="text--primary">[[Category:Theses]]
                {{ changeCollegeAbrrevation }}
                {{ changeDepartment }}
                {{ changeYear }}
                {{ changesubjectField }}
                {{ changesubjectSubField }}
                </p><br>
                <v-spacer/>
              </div>
            </v-card-text>
          </v-card>
          <v-card class="mx-auto mt-5" max-width="1000">
            <v-card-title>
              Generator
            </v-card-title>
            <v-card-text>
                <div class="d-flex flex-row">
                    <v-text-field outlined dense label="Title" v-model="myTitle" :clearable="true"></v-text-field>
                </div>
                <div class="d-flex flex-row">
                    <v-textarea outlined dense label="Abstract" v-model="abstract" :clearable="true"></v-textarea>
                </div>
                <div class="d-flex flex-row">
                    <v-text-field outlined dense label="Keywords" v-model="keywords" :clearable="true"></v-text-field>
                </div>
                <div class="d-flex flex-row">
                    <v-text-field outlined dense label="Flipbook Link" v-model="flipbooklink" :clearable="true"></v-text-field>
                    <v-text-field outlined dense label="Flipbook Title" v-model="flipbooktitle" :clearable="true"></v-text-field>
                </div>
                <div class="d-flex flex-row">
                    <v-text-field outlined dense label="College Abbreviation" v-model="collegeAbrrevation" :clearable="true"></v-text-field>
                </div>
                <div class="d-flex flex-row">
                    <v-text-field outlined dense label="Department" v-model="department" :clearable="true"></v-text-field>
                </div>
                <div class="d-flex flex-row">
                    <v-text-field outlined dense label="Year" v-model="year" :clearable="true"></v-text-field>
                </div>
                <div class="d-flex flex-row">
                    <v-text-field outlined dense label="Subject Field" v-model="subjectField" :clearable="true"></v-text-field>
                </div>
                <div class="d-flex flex-row">
                    <v-text-field outlined dense label="Subject Sub Field" v-model="subjectSubField" :clearable="true"></v-text-field>
                </div>
            </v-card-text>
          </v-card>
    </v-content>
  </v-app>
</template>
<script>
export default {
    data(){
      return {
        myTitle: 'My Title',
        abstract: 'My abstract here...',
        keywords: `Keyword 1, Keyword 2`,
        flipbooklink: `https://flipbook.com/wMxYtpkzF2/MyTitle`,
        flipbooktitle: 'My Title',
        collegeAbrrevation: `[[Category:CollegeAbbreviation Thesis]]`,
        department: '[[Category:Department of Whatever Thesis]]',
        year: '[[Category:Year Thesis]]',
        subjectField: '[[Category:Thesis--Subject Field]]',
        subjectSubField: '[[Category:Thesis--Subject Sub-field]]'
      }
    }, computed: {
        changeTitle(){
          return this.myTitle
        },
        changeAbstract(){
          return this.abstract
        },
        changeKeywords(){
          return this.keywords
        },
        changeFlipbooklink(){
          return this.flipbooklink
        },
        changeFlipbooktitle(){
          return this.flipbooktitle
        },
        changeCollegeAbrrevation(){
          return this.collegeAbrrevation
        },
        changeDepartment(){
          return this.department
        },
        changeYear(){
          return this.year
        },
        changesubjectField(){
          return this.subjectField
        },
         changesubjectSubField(){
          return this.subjectSubField
        }
    }
}
</script>
