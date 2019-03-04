<template >
   <v-app>
      <LandingHeader v-on:showcart="displayCart"></LandingHeader>
      <br>
         <div class="container ">
            <h3 class="v-primary"><br>Account Overview</h3>
            <hr>
            <div class="row">
               <!-- personal info form -->
               <div class="col-sm-12">
                  <form class="form-horizontal" role="form">
                     <div class="form-group">
                        <!-- display label and user first name with option to edit-->
                        <div class="row col-sm-12">
                           <div class="col-sm-10">
                              <strong class="text-warning">First name</strong>: {{ firstName }}
                           </div>
                           <div class="col-sm-2" justify-right>
                              <!--not showing <i class="glyphicon glyphicon-pencil"></i> -->
                            <a href="#" v-on:click="dialog1 = true">
                                <span><i> edit</i></span>
                            </a>
                            <!--dialog boxes-->
                            <v-layout row >
                               <!--first dialog box to edit first name-->
                               <v-dialog v-model="dialog1"  max-width="400px">
                                  <v-card tile>
                                     <v-card-title class="v-primary"><strong>Edit Your first name</strong></v-card-title>
                                        <v-card-text>
                                           <div class="form-group col-sm-12">
                                              <label class="text-warning control-label col-sm-4 " for="firstName">First Name:</label>
                                              <div class="col-sm-8">
                                                <input for="fnHelp" type="text" v-model="new_firstName" class="Edit_dialog" maxlength="15" required="true">
                                              </div><br>
                                              <small id="fnHelp" class="form-text text-danger col-sm-12">*The First Name field may not be greater than 15 characters</small>
                                           </div>        
                                        <v-card-actions>
                                           <v-btn round color="cyan" flat type="button" @click="dialog1 = false">Close</v-btn>
                                           <v-btn round color="cyan" flat type="submit" @click="ask_dialog1 = !ask_dialog1">Save</v-btn>
                                        </v-card-actions>
                                     </v-card-text>
                                     <div style="flex: 1 1 auto;"></div>
                                  </v-card>
                               </v-dialog>
                               <!--confirmation dialog box to edit first name-->
                               <v-dialog v-model="ask_dialog1" max-width="300px">
                                  <v-card>
                                  <v-card-text>Are You sure you want to change your firstname?</v-card-text>
                                     <v-card-actions>
                                        <v-btn color="primary" flat @click="ask_dialog1 = false">no</v-btn>
                                        <v-btn color="primary" flat v-on:click="editfirstname" @click="ask_dialog1 = false; dialog1 = false">yes</v-btn>
                                     </v-card-actions>
                                  </v-card>
                               </v-dialog>
                            </v-layout>
                          </div>
                      </div><br>
                      <!-- display label and user last name with option to edit-->
                      <div class="row col-sm-12">
                         <div class="col-sm-10">
                            <strong class="text-warning">Last name</strong>: {{ lastName }}
                         </div>
                         <div class="col-sm-2">
                            <a  href="#" v-on:click="dialog2 = true">
                               <span><i> edit</i></span>
                            </a>
                            <!--dialog boxes-->
                            <v-layout row justify-center>
                               <!--first dialog box to edit last name-->
                               <v-dialog v-model="dialog2"  max-width="400px">
                                  <v-card tile>
                                     <v-card-title class="v-primary"><strong>Edit Your last name</strong></v-card-title>
                                        <v-card-text>
                                           <div class="form-group col-sm-12">
                                              <label class="text-warning control-label col-sm-4 " for="lastName">Last Name:</label>
                                              <div class="col-sm-8">
                                                <input for="lnHelp" type="text" v-model="new_lastName" class="Edit_dialog" maxlength="15" required="true">
                                              </div><br>
                                              <small id="lnHelp" class="form-text text-danger col-sm-12">*The Last Name field may not be greater than 15 characters</small>
                                           </div>        
                                        <v-card-actions row justify-right>
                                           <v-btn round color="cyan" flat @click="dialog2 = false">Close</v-btn>
                                           <v-btn round color="cyan" flat type="button" @click="ask_dialog2 = !ask_dialog2">Save</v-btn>
                                        </v-card-actions>
                                     </v-card-text>
                                     <div style="flex: 1 1 auto;"></div>
                                  </v-card>
                               </v-dialog>
                               <!--confirmation dialog box to edit last name-->
                               <v-dialog v-model="ask_dialog2" max-width="300px">
                                  <v-card>
                                  <v-card-text>Are You sure you want to change your lastname?</v-card-text>
                                     <v-card-actions>
                                        <v-btn color="primary" flat @click="ask_dialog2 = false">no</v-btn>
                                        <v-btn color="primary" flat v-on:click="editlastname" @click="ask_dialog2 = false; dialog2 = false">yes</v-btn>
                                     </v-card-actions>
                                  </v-card>
                               </v-dialog>
                            </v-layout>
                          </div>
                      </div><br>
                      
                       <!--display label and user room number with option to edit-->
                      <div class="row col-sm-12">
                         <div class="col-sm-10">
                            <strong class="text-warning">Room number</strong>: {{ roomNumber }}
                         </div>
                         <div class="col-sm-2">
                            <a href="#" v-on:click="dialog3 = true">
                               <span><i> edit</i></span>
                            </a>
                            <!--dialog boxes-->
                            <v-layout row justify-center>
                               <!--first dialog box to edit room number-->
                               <v-dialog v-model="dialog3"  max-width="400px">
                                  <v-card tile>
                                     <v-card-title class="v-primary"><strong>Edit Your room number</strong></v-card-title>
                                        <v-card-text>
                                           <div class="form-group col-sm-12">
                                              <label class="text-warning control-label col-sm-5 " for="roomNumber">Room Number:</label>
                                              <div class="col-sm-7">
                                                <input type="number" for="nHelp" onKeyDown="if(this.value.length==4 && event.keyCode!=8) return false;" placeholder="####" v-model="new_roomNumber" class="Edit_dialog"/>
                                              </div><br>
                                              <small id="rnHelp" class="form-text text-danger col-sm-12" >*The Room Number field may not be greater than 4 characters</small>
                                           </div>        
                                        <v-card-actions row justify-right>
                                           <v-btn round color="cyan" flat @click="dialog3 = false">Close</v-btn>
                                           <v-btn round color="cyan" flat type="button" @click="ask_dialog3 = !ask_dialog3">Save</v-btn>
                                        </v-card-actions>
                                     </v-card-text>
                                     <div style="flex: 1 1 auto;"></div>
                                  </v-card>
                               </v-dialog>
                               <!--confirmation dialog box to edit room number-->
                               <v-dialog v-model="ask_dialog3" max-width="300px">
                                  <v-card>
                                  <v-card-text>Are You sure you want to change your room number?</v-card-text>
                                     <v-card-actions>
                                        <v-btn color="primary" flat @click="ask_dialog3 = false">no</v-btn>
                                        <v-btn color="primary" flat v-on:click="editroomnum" @click="ask_dialog3 = false; dialog3 = false">yes</v-btn>
                                     </v-card-actions>
                                  </v-card>
                               </v-dialog>
                            </v-layout>
                          </div>
                      </div><br>
                      <!-- display label and user phone number with option to edit-->
                      <div class="row col-sm-12">
                         <div class="col-sm-10">
                            <strong class="text-warning">Phone Number</strong>: {{ phoneNumber }}
                         </div>
                         <div class="col-sm-2">
                            <a href="#" v-on:click="dialog4 = true">
                               <span><i> edit</i></span>
                            </a>
                            <!--dialog boxes-->
                            <v-layout row justify-center>
                               <!--first dialog box to edit phone number-->
                               <v-dialog v-model="dialog4"  max-width="400px">
                                  <v-card tile>
                                     <v-card-title class="v-primary"><strong>Edit Your Phone number</strong></v-card-title>
                                        <v-card-text>
                                           <div class="form-group col-sm-12">
                                              <label class="text-warning control-label col-sm-5 " for="phone number">Phone Number:</label>
                                              <div class="col-sm-7">
                                                <input type="number" for="pnHelp"  onKeyDown="if(this.value.length==10 && event.keyCode!=8) return false;" placeholder="##########" v-model="new_phoneNumber" class="Edit_dialog " />
                                              </div><br>
                                              <small id="pnHelp" class="form-text text-muted-danger col-sm-12" >*The Phone Number field may not be greater than 10 numbers</small>
                                           </div>        
                                        <v-card-actions row justify-right>
                                           <v-btn round color="cyan" flat @click="dialog4 = false">Close</v-btn>
                                           <v-btn round color="cyan" flat type="button" @click="ask_dialog4 = !ask_dialog4">Save</v-btn>
                                        </v-card-actions>
                                     </v-card-text>
                                     <div style="flex: 1 1 auto;"></div>
                                  </v-card>
                               </v-dialog>
                               <!--confirmation dialog box to edit phone number-->
                               <v-dialog v-model="ask_dialog4" max-width="300px">
                                  <v-card>
                                  <v-card-text>Are You sure you want to change your phone number??</v-card-text>
                                     <v-card-actions>
                                        <v-btn color="primary" flat @click="ask_dialog4 = false">no</v-btn>
                                        <v-btn color="primary" flat v-on:click="editphonenumber" @click="ask_dialog4 = false; dialog4 = false">yes</v-btn>
                                     </v-card-actions>
                                  </v-card>
                               </v-dialog>
                            </v-layout>
                          </div>
                      </div><br>
                      <!-- display label and user email address with no option to edit-->
                      <div class="row col-sm-10">
                         <div class="col-sm-10" >
                            <v-tooltip bottom>
                               <template v-slot:activator="{ on }">
                                  <span v-on="on"><strong for="emailHelp" class="text-warning">Email address</strong>: {{ emailAddress }}</span>
                               </template>
                                  <span>Vue only</span>
                            </v-tooltip>
                         </div>
                      </div><br>
                    </div>
                 <hr>
                 </form>
              </div>
           </div>
        </div>
     <LandingFooter></LandingFooter>
  </v-app>
</template>

<script>
import LandingHeader from "../../../mini-components/LandingHeader.vue";
import LandingFooter from "../../../mini-components/LandingFooter.vue";
import browsercookies from "browser-cookies";
import axios from '../../../../axios';

export default {
   data() {
      return {
         firstName: browsercookies.get("first_name"),
         lastName: browsercookies.get("last_name"),
         roomNumber: browsercookies.get("room_num"),
         phoneNumber: browsercookies.get("phone_number"),
         emailAddress: browsercookies.get("email_address"),
         dialog1 : false,
         dialog2 : false,
         dialog3 : false,
         dialog4 : false,
         ask_dialog1 : false,                                                                                              
         ask_dialog2 : false,
         ask_dialog3 : false,
         ask_dialog4 : false,
         new_firstName:'',
	      new_lastName:'',
	      new_phoneNumber:'',
         new_roomNumber:'',
    };
  },

  components: {
     LandingHeader: LandingHeader,
     LandingFooter: LandingFooter
  },



  methods : {
     displayCart(show) {
        if (this.seen) this.seen = false;
        else {
           this.seen = true;
        }
     },

     editfirstname: function(){
        this.dialog1 = true ;
        this.firstName = this.new_firstName;
        browsercookies.erase('first_name'),
        browsercookies.set('first_name', this.new_firstName);
        axios
           .post('api/account/updatefirstname', {
               firstName: this.new_firstName,
               user_id: browsercookies.get('user_id')

           })
           .then((response) => {
               if (response.status == 200) {
                  console.log('Saved');
                  this.$router.push('/account');
              }
           })
           .catch(function (error) {
              if (error.response.status == 400) {
                toasted.error(error.response.data, {
                   theme: "primary",
                   position: "top-center",
                   duration : 5000
                  });
              }
              console.log(error);
              if (error.response) {
                 // The request was made and the server responded with a status code
                 // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
              }
           });

     },

     editlastname: function(){
        this.dialog2 = true ;
        this.lastName = this.new_lastName;
        browsercookies.erase('last_name'),
        browsercookies.set('last_name', this.new_lastName);
        axios
           .post('api/Account/updatelastname', {
               lastame: this.new_lastName,
               user_id: browsercookies.get('user_id')
           })
           .then((response) => {
               if (response.status == 200) {
                  console.log('Saved');
                  this.$router.push('/account');
              }
           })
           .catch(function (error) {
              if (error.response.status == 400) {
                toasted.error(error.response.data, {
                   theme: "primary",
                   position: "top-center",
                   duration : 5000
                  });
              }
              console.log(error);
              if (error.response) {
                 // The request was made and the server responded with a status code
                 // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
              }
           });

     },

     editroomnum: function(){
        this.dialog3 = true ;
        this.roomNumber = this.new_roomNumber;
        browsercookies.erase('room_num'),
        browsercookies.set('room_num', this.new_roomNumber);
        axios
           .post('api/Account/updateroomnumber', {
               roomNumber: this.new_roomNumber,
               user_id: browsercookies.get('user_id')
           })
           .then((response) => {
               if (response.status == 200) {
                  console.log('Saved');
                  this.$router.push('/account');
              }
           })
           .catch(function (error) {
              if (error.response.status == 400) {
                toasted.error(error.response.data, {
                   theme: "primary",
                   position: "top-center",
                   duration : 5000
                  });
              }
              console.log(error);
              if (error.response) {
                 // The request was made and the server responded with a status code
                 // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
              }
           });

     },

     editphonenumber: function(){
        this.dialog4 = true ;
        this.phoneNumber = this.new_phoneNumber;
        browsercookies.erase('phone_number'),
        browsercookies.set('phone_number', this.new_phoneNumber);
        axios
           .post('api/Account/updatephonenumber', {
               phoneNumber: this.new_phoneNumber,
               user_id: browsercookies.get('user_id')
           })
           .then((response) => {
               if (response.status == 200) {
                  console.log('Saved');
                  this.$router.push('/account');
              }
           })
           .catch(function (error) {
              if (error.response.status == 400) {
                toasted.error(error.response.data, {
                   theme: "primary",
                   position: "top-center",
                   duration : 5000
                  });
              }
              console.log(error);
              if (error.response) {
                 // The request was made and the server responded with a status code
                 // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
              }
           });

     },    
  }
};
</script>

<style  lang="css">
.v-primary {
   color: #344955;
} 
.Edit_dialog {
      border-style: solid;
      display: inline-block;
      border-top: none;
      border-left: none;
      border-right: none;
      width: 160px;
      border-color: #e0e0e0;
      outline: none;
  }
</style>
