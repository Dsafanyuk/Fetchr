<template >
   <v-app>
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
                            <a href="#" v-on:click="first_name_dialog = true">
                                <span><i> edit</i></span>
                            </a>
                            <!--dialog boxes-->
                            <v-layout row >
                               <!--first dialog box to edit first name-->
                               <v-dialog v-model="first_name_dialog"  max-width="400px">
                                  <v-card tile>
                                     <v-card-title class="v-primary"><strong>Edit Your first name</strong></v-card-title>
                                        <v-card-text>
                                           <div class="form-group col-sm-12">
                                              <label class="text-warning control-label col-sm-4 " for="firstName">First Name:</label>
                                              <div class="col-sm-8">
                                                <input for="fnHelp" type="text" v-model="new_firstName" class="Edit_dialog" maxlength="15" placeholder="Enter up to 15 characters." required>
                                              </div><br>
                                              <small id="fnHelp" class="form-text text-danger col-sm-12">{{first_name_errMessage}}</small>
                                           </div>        
                                        <v-card-actions>
                                           <v-btn round color="cyan" flat type="button" @click="first_name_dialog = false">Close</v-btn>
                                           <v-btn round color="cyan" flat type="submit"  @click="updateInfo('first_name')" >Save</v-btn>
                                        </v-card-actions>
                                     </v-card-text>
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
                            <a  href="#" v-on:click="last_name_dialog = true">
                               <span><i> edit</i></span>
                            </a>
                            <!--dialog boxes-->
                            <v-layout row justify-center>
                               <!--first dialog box to edit last name-->
                               <v-dialog v-model="last_name_dialog"  max-width="400px">
                                  <v-card tile>
                                     <v-card-title class="v-primary"><strong>Edit Your last name</strong></v-card-title>
                                        <v-card-text>
                                           <div class="form-group col-sm-12">
                                              <label class="text-warning control-label col-sm-4 " for="lastName">Last Name:</label>
                                              <div class="col-sm-8">
                                                <input for="lnHelp" type="text" v-model="new_lastName" class="Edit_dialog" maxlength="15" placeholder="Enter up to 15 characters." required>
                                              </div><br>
                                              <small id="fnHelp" class="form-text text-danger col-sm-12">{{last_name_errMessage}}</small>
                                           </div>        
                                        <v-card-actions>
                                           <v-btn round color="cyan" flat type="button" @click="last_name_dialog = false">Close</v-btn>
                                           <v-btn round color="cyan" flat type="submit" @click="updateInfo('last_name')">Save</v-btn>
                                        </v-card-actions>
                                     </v-card-text>
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
                            <a href="#" v-on:click="room_num_dialog = true">
                               <span><i> edit</i></span>
                            </a>
                            <!--dialog boxes-->
                            <v-layout row justify-center>
                               <!--first dialog box to edit room number-->
                               <v-dialog v-model="room_num_dialog"  max-width="400px">
                                  <v-card tile>
                                     <v-card-title class="v-primary"><strong>Edit Your room number</strong></v-card-title>
                                        <v-card-text>
                                           <div class="form-group col-sm-12">
                                              <label class="text-warning control-label col-sm-5 " for="roomNumber">Room Number:</label>
                                              <div class="col-sm-7">
                                                <input type="number" for="nHelp" onKeyDown="if(this.value.length==4 && event.keyCode!=8) return false;" placeholder="####" v-model="new_roomNumber" class="Edit_dialog"/>
                                              </div><br>
                                              <small id="fnHelp" class="form-text text-danger col-sm-12">{{room_num_errMessage}}</small>
                                           </div>        
                                        <v-card-actions>
                                           <v-btn round color="cyan" flat type="button" @click="room_num_dialog = false">Close</v-btn>
                                           <v-btn round color="cyan" flat type="submit" @click="updateInfo('room_num')">Save</v-btn>
                                        </v-card-actions>
                                     </v-card-text>
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
                            <a href="#" v-on:click="phone_num_dialog = true">
                               <span><i> edit</i></span>
                            </a>
                            <!--dialog boxes-->
                            <v-layout row justify-center>
                               <!--first dialog box to edit phone number-->
                               <v-dialog v-model="phone_num_dialog"  max-width="400px">
                                  <v-card tile>
                                     <v-card-title class="v-primary"><strong>Edit Your Phone number</strong></v-card-title>
                                        <v-card-text>
                                           <div class="form-group col-sm-12">
                                              <label class="text-warning control-label col-sm-5 " for="phone number">Phone Number:</label>
                                              <div class="col-sm-7">
                                                <input type="number" for="pnHelp"  onKeyDown="if(this.value.length == 10 && event.keyCode != 8) return false;"  placeholder="##########" v-model="new_phoneNumber" class="Edit_dialog " />
                                              </div><br>
                                              <small id="fnHelp" class="form-text text-danger col-sm-12">{{phone_num_errMessage}}</small>
                                           </div>        
                                        <v-card-actions>
                                           <v-btn round color="cyan" flat type="button" @click="phone_num_dialog = false">Close</v-btn>
                                           <v-btn round color="cyan" flat type="submit" @click="updateInfo('phone_number')">Save</v-btn>
                                        </v-card-actions>
                                     </v-card-text>
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
  </v-app>
</template>

<script>
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
         first_name_dialog : false,
         last_name_dialog : false,
         room_num_dialog : false,
         phone_num_dialog : false,
         new_firstName:'',
	      new_lastName:'',
	      new_phoneNumber:'',
         new_roomNumber:'',
         first_name_errMessage : '',
         last_name_errMessage: '',
         room_num_errMessage: '',
         phone_num_errMessage: '',
      };

  },

  components: {
  },



  methods : {
     displayCart(show) {
        if (this.seen) this.seen = false;
        else {
           this.seen = true;
        }
     },  
     updateInfo : function (fieldname)
     {
        if (this.checkField(fieldname))
         {  
            switch(fieldname)
            {
            // First name case codes
            case "first_name" :
            this.$store.commit('account/UpdateAccountInfo',{new_user_input : fieldname, data : this.new_firstName});
            this.firstName = this.new_firstName;
            browsercookies.set('first_name', this.new_firstName);
            break;

            // Last name case codes
            case "last_name" :
            this.$store.commit('account/UpdateAccountInfo',{new_user_input : fieldname, data : this.new_lastName});
            this.lastName = this.new_lastName;
            browsercookies.set('last_name', this.new_lastName);
            break;

            // Room number case codes
            case "room_num" : 
            this.$store.commit('account/UpdateAccountInfo',{new_user_input : fieldname, data : this.new_roomNumber});
            this.roomNumber = this.new_roomNumber;
            browsercookies.set('room_num', this.new_roomNumber);
            break;

            // Phone number case codes
            case "phone_number" :
            this.$store.commit('account/UpdateAccountInfo',{new_user_input : fieldname, data : this.new_phoneNumber});
            this.phoneNumber = this.new_phoneNumber;
            browsercookies.set('phone_number', this.phoneNumber);
            break;

            }
         }
         else
         console.log(" Something is wrong ")
     },
   checkField : function(fieldName)
   {
      if(fieldName == 'first_name')
      {
         if(this.new_firstName)
         {
            this.first_name_dialog = false
            return true
         } 
         else
         {
            this.first_name_errMessage = "*The first Name field is required"
            return false
         }        
      }
      else if(fieldName == 'last_name')
      {
         if(this.new_lastName )
         {
            this.last_name_dialog = false
            return true
         }
         else
         {
            this.last_name_errMessage = "*The last Name field is required"
            return false
         }   
      }
      else if(fieldName == 'room_num')
      {
         if(this.new_roomNumber)
         {
            if(this.new_roomNumber.length == 4)
            {
               this.room_num_dialog = false
               return true
            }
            else
            {
               this.room_num_errMessage = "*The Room Number field must exactly contain 4 digits"
               return false
            }
         }
         else
         {
            this.room_num_errMessage = "*The room number field is required"
            return false
         }

      }
      else if(fieldName == 'phone_number')
      {
         if(this.new_phoneNumber)
         {
            if(this.new_phoneNumber.length == 10)
            {
               this.phone_num_dialog = false
               return true
            }
            else
            {
               this.phone_num_errMessage = "*The Phone number field must exactly contain 10 digits"
               return false
            }
         }
         else
         {
            this.phone_num_errMessage = "*The Phone Number field is required"
            return false
         }
      }
   }    
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
      width: 180px;
      border-color: #e0e0e0;
      outline: none;
  }
</style>
