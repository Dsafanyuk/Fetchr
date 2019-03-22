<template >
   <v-app>
   <br>
      <div class="container">
         <h3 class="v-primary">
         <br>Account Overview
         </h3>
         <hr>
         <div class="row">
            <!-- personal info for -->
            <div class="col-sm-12">
               <v-form class="form-horizontal" ref="form">
                  <v-layout class="form-group">
                     <v-flex sm12 md12 lg12><strong class="text-warning">First name</strong>: {{ user.first_name }}</v-flex><br>
                     <v-flex sm12 md12 lg12><strong class="text-warning">Last name</strong>: {{ user.last_name }}</v-flex><br>
                     <v-flex sm12 md12 lg12p><strong class="text-warning">Email address</strong>: {{ user.email_address}}</v-flex><br>
                     <v-flex sm12 md12 lg12><strong class="text-warning">Room number</strong>: {{ user.room_num }}</v-flex><br>
                     <v-flex sm12 md12 lg12><strong class="text-warning">Phone Number</strong>: {{ user.phone_number }}</v-flex><br>
                  </v-layout>
                  <div class="form-group text-center">
                     <v-btn rectangle color="lightened" dark type="submit" href="#" v-on:click="editItem(user)">Update Profile</v-btn>
                  </div>
                  <v-dialog v-model="dialog" max-width="500px">
                     <v-card>
                        <v-card-title>
                           <span class="headline">{{ formTitle }}</span>
                        </v-card-title>
                        <v-card-text>
                           <v-form ref="form">
                           <v-container grid-list-md>
                              <v-layout wrap>
                                 <v-flex sm12 md6 lg6>
                                    <v-text-field v-model="editedItem.first_name" label="First Name" required></v-text-field>
                                 </v-flex>
                                 <v-flex sm12 md6 lg6>
                                    <v-text-field v-model="editedItem.last_name" label="Last Name" required></v-text-field>
                                 </v-flex>
                                 <v-flex sm12 md6 lg6>
                                    <v-text-field v-model="editedItem.room_num" label="Room Number" required></v-text-field>
                                 </v-flex>
                                 <v-flex sm12 md6 lg6>
                                    <v-text-field v-model="editedItem.phone_number" label="Phone Number" required></v-text-field>
                                 </v-flex>
                             </v-layout>
                         </v-container>
                      </v-form>
                   </v-card-text>

                   <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                      <v-btn color="blue darken-1" :loading="sending" flat @click="save">Save</v-btn>
                   </v-card-actions>
                   </v-card>
                   </v-dialog>
               <hr>
               </v-form>
            </div>
         </div>
      </div>
   </v-app>
</template>

<script>
import browsercookies from "browser-cookies";
import axios from '../../../../axios';

export default {
   
   data() {
      return {
         user:{
            user_id : browsercookies.get("user_id"),
            first_name: browsercookies.get("first_name"),
            last_name: browsercookies.get("last_name"),
            room_num: browsercookies.get("room_num"),
            phone_number: browsercookies.get("phone_number"),
            email_address: browsercookies.get("email_address"),
         },
         sending: false,
         dialog : false,
         editedIndex: -1,
         editedItem: {
            user_id : "",
            first_name: "",
            last_name: "",
            phone_number: "",
            room_num: "",
            email_address: "",
         },
         defaultItem: {
            user_id: "",
            first_name: "",
            last_name: "",
            phone_number: "",
            room_num: "",
            email_address: ""
         }
         
      };

  },

computed: {
    users() {
      return this.$store.getters["account/showUser"];
    },
    formTitle() {
      return this.editedIndex = "Edit User";
   }
},
watch: {
   dialog(val) {
   val || this.close();
   }
},

methods : {
   displayCart(show) {
      if (this.seen) this.seen = false;
      else {
         this.seen = true;
      }
   },

   editItem(item) {
   this.editedIndex = this.user;
   this.editedItem = Object.assign({}, item);
   this.dialog = true;
   },

   close() {
   this.dialog = false;
   setTimeout(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
   }, 300);
   this.$refs.form.reset();
   },
   save() {
   this.sendForm();
   },
   sendForm() {
      console.log(this.editedItem)
   this.sending = true;
   this.$store
      .dispatch("account/editExistingUser", this.editedItem)
      .then(result => { console.log('done')
         this.sending = false;
         this.close();
      });
      this.user.first_name =  this.editedItem.first_name
      this.user.last_name =  this.editedItem.last_name
      this.user.room_num =  this.editedItem.room_num
      this.user.phone_number =  this.editedItem.phone_number
      
    }
  }
};
</script>

<style  lang="css">
.v-primary {
   color: #344955;
}
</style>
