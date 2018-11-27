<template >
  <v-app>
      <LandingHeader v-on:showcart="displayCart" ></LandingHeader>
 <div>
 <div class="container bootstrap snippet">
    <div class="row">
     <div class="col-sm-10"><h1>Header</h1></div>
  </div>
    <div class="row">
       <div class=" col-sm-3 hidden-xs">
          <div class="text-center">
      <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-square img-thumbnail" alt="avatar">
      <h6>Upload a different photo...</h6>
      <input type="file" class="text-center center-block file-upload">
      </div></hr><br>


        <div class="panel panel-default">
          <div class="panel-heading">Account Overview</div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading"><a href="">My Profile</a></div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading"><a href="">My Orders</a></div>
             <div class="panel-body">
                <li class="list-group-item text-right"><span class="pull-left"><strong>Number of Orders</strong></span> 5</li>
                <li class="list-group-item text-right"><span class="pull-left"><strong>Likes</strong></span> 29</li>
             </div>
          </div>
      </div><!--/col-3-->

     <div class=" col-sm-9">
        <h3>Account Overview</h3>
         <div class="tab-content">
          <div class="tab-pane active" id="home">
          <hr>
             <div class="row">
              <div class="col-sm-6">
               <div class="well card profile" id>
                <h3 class="text-primary">Profile</h3>
                   <div class="form-group">
                    <label class="control-label">First name</label>
                    <p class="form-control-static" id="card-profile-email">John</p>
                   </div>
                   <div class="form-group">
                    <label class="control-label">Last name</label>
                    <p class="form-control-static" id="card-profile-email">Done</p>
                   </div>
                   <div class="form-group">
                    <label class="control-label">Email</label>
                    <p class="form-control-static" id="card-profile-email">your@email.com</p>
                   </div>
                   <div class="form-group">
                    <label class="control-label">Date of birth</label>
                    <p class="form-control-static" id="card-profile-email">MM/DD/YYYY</p>
                   </div>
                   <div class="form-group">
                    <label class="control-label">State</label>
                    <p class="form-control-static" id="card-profile-email">XX</p>
                   </div>
                <button class="btn"><a href="" type="button">  Edit Profile  </a></button>
               </div>
              </div>

              <div class="col-sm-6">
               <div class="well card" id>
                <h3 class="text-primary">My Orders</h3>
                   <div class="row">
                    <div class="col-sm-6">
                     <div class="form-group">
                      <label for="email"><h6>Number of Orders: 15</h6></label>
                     </div>
                     <div class="form-group">
                         <p class="input-group"> Currently in the
                          <i class="glyphicon glyphicon-shopping-cart"></i> : 1
                         </p>
                     </div>
                    </div>
                     <button class="btn"><a href="" type="button">  View Order  </a ></button>
                   </div>
                </div>
               </div>
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

    export default {
      data() {
        return {};
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
