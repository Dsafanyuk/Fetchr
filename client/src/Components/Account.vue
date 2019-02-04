<template >
  <v-app>
<div class='col-md-12 col-xs-12'>
   <div>
      <LandingHeader v-on:showcart="displayCart" ></LandingHeader><br>
   </div>

   <div class="col-sm-2 row">
      <div class="  hidden-xs">
         <div class=" hidden-xs panel pane-warning ">
            <div class="panel-heading">Account Overview</div>
         </div><br>

         <div class=" hidden-xs dropdown">
                <div class=" hidden-xs btn btn-warning dropdown-toggle" type="button" data-toggle="dropdown">My Profile</div>
                   <ul class="dropdown-menu">
                      <li><a href="#"><strong>Edit Profile</strong></a></li>
                      <li><a href="#"><strong>Social Media</strong></a></li>
                   </ul>
               </div><br>

          <div class="dropdown">
                <div class=" hidden-xs btn btn-warning dropdown-toggle" type="button" data-toggle="dropdown">My Orders</div>
                   <ul class="dropdown-menu">
                      <li><a href="/orders"><strong>View Orders</strong></a></li>
                   </ul>
               </div>
         </div>
      </div><!--/col-3-->

      <div class=" col-sm-10">
         <h3 class="text-warning">Account Overview</h3>
         <div class="tab-content">
            <div class="tab-pane active" id="home">
               <div class="row">
                  <div class="col-sm-8">
                     <div class="well card profile">
                        <div class="form-group">
                          <p class="control-label">First name</p>
                          <p class="form-control-static" id="card-profile-email">{{ firstName }}</p>
                        </div>

                        <div class="form-group">
                           <p class="control-label">Last name</p>
                          <p class="form-control-static" id="card-profile-email">{{ lastName }}</p>
                        </div>

                        <div class="form-group">
                          <p class="control-label">Email</p>
                          <p class="form-control-static" id="card-profile-email">{{ emailAddress }}</p>
                        </div>

                        <div class="form-group">
                           <p class="control-label">Room number</p>
                           <p class="form-control-static" id="card-profile-email">{{ roomNumber }}</p>
                        </div>

                        <div class="form-group">
                           <p class="control-label">Phone Number</p>
                           <p class="form-control-static" id="card-profile-email">{{ phoneNumber }}</p>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
         </div>
      </div>
   </div>

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
          lastName: browsercookies.get('lasst_name'),
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
  @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
  @import 'https://use.fontawesome.com/releases/v5.4.1/css/all.css';
  @import 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
  @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';

  </style>
