<template >
  <v-app>
<div class='col-md-12 col-xs-12'>
   <div>
      <LandingHeader v-on:showcart="displayCart" ></LandingHeader><br>
   </div>

   <div class=" col-sm-10">
      <h3 class="text-warning">Account Overview</h3>
      <div class="tab-content">
         <div class="tab-pane active" id="home">
            <div class="row">
               <div class="col-sm-8">
                  <div class="well card profile">
                       <div class="form-group">
                          <p class="control-label"><strong class='text-warning'>First name</strong>: {{ firstName }}</p>
                       </div>

                       <div class="form-group">
                          <p class="control-label"><strong class='text-warning'>Last name</strong>: {{ lastName }}</p>
                       </div>

                       <div class="form-group">
                          <p class="control-label"><strong class='text-warning'>Email</strong>: {{ emailAddress }}</p>
                       </div>

                       <div class="form-group">
                          <p class="control-label"><strong class='text-warning'>Room number</strong>: {{ roomNumber }}</p>
                       </div>

                       <div class="form-group">
                          <p class="control-label"><strong class='text-warning'>Phone Number</strong>: {{ phoneNumber }}</p>
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
