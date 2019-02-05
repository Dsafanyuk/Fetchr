<template>
    <v-app>
      <LandingHeader v-on:showcart="displayCart" ></LandingHeader><br>

            <div class="container">
               <h1 class="text-warning">Edit Profile</h1>
          	   <hr>
        	     <div class="row">
              <!-- edit form column -->
              <div class="col-md-12 personal-info">

                <form class="form-horizontal" role="form">
                  <div class=" form-group">
                     <label class="col-sm-4 control-label text-left">First name:</label>
                     <div class="col-sm-6">
                        <input class="form-control" type="text" value="">
                     </div>
                  </div>
                  <div class="form-group">
                     <label class="col-sm-4 control-label text-left">Last name:</label>
                     <div class="col-sm-6">
                        <input class="form-control" type="text" value="" placeholder="">
                     </div>
                  </div>
                  <div class="form-group">
                     <label class="col-sm-4 control-label text-left">Email:</label>
                     <div class="col-sm-6">
                        <input class="form-control" type="text" value="">
                     </div>
                  </div>

                  <div class="form-group">
                    <label class="col-sm-4 control-label text-left">Phone Number:</label>
                    <div class="col-sm-6">
                      <input class="form-control" type="text" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-4 control-label text-left">Password:</label>
                    <div class="col-sm-6">
                      <input class="form-control" type="password" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-4 control-label text-left">Confirm password:</label>
                    <div class="col-sm-6">
                      <input class="form-control" type="password" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-4 control-label"></label>
                    <div class="col-sm-6">
                      <v-btn
                          round color="cyan"
                          type="submit"
                          href="#"
                      >save</v-btn>
                      <span></span>
                      <v-btn
                          round color="cyan"
                          type="reset"
                      >cancel</v-btn>

                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>
        <hr>
      <LandingFooter></LandingFooter>
   </v-app>
</template>

<script>
import Navigation from './Navigation.vue';
import LandingHeader from './mini-components/LandingHeader.vue';
import LandingFooter from './mini-components/LandingFooter.vue';
import browsercookies from 'browser-cookies';

export default {
  data() {
   return {
       firstName: browsercookies.get('first_name'),
      lastName: browsercookies.get('last_name'),
       roomNumber: browsercookies.get('room_num'),
       phoneNumber: browsercookies.get('phone_number'),
       emailAddress: browsercookies.get('email_address')
     };
   },

   components: {
     Navigation: Navigation,
     LandingHeader: LandingHeader,
     LandingFooter: LandingFooter,
   },

   created: function loadUserInfo() {
     api.get("/api/users/login")
   },

  components: {
    Navigation: Navigation,
    LandingHeader: LandingHeader,
    LandingFooter: LandingFooter},
};
</script>

<style scoped lang="css">
@import './assets/css/bootstrap.min.css';
@import 'custom_css/landing.scss';
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css';
@import 'https://use.fontawesome.com/releases/v5.4.1/css/all.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js';
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js';



</style>
