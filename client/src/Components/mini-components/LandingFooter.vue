<template>
<<<<<<< HEAD
  <v-footer height="auto" color="primary">
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link" color="white" flat round>{{ link }}</v-btn>
      <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
        &copy;2018 —
        <strong>Fetchr</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  })
};
</script>


<style>
=======
  <footer id="LandingFooter" class="footer">
    <div class="container bottom_border">
      <div class="row">
        <ul class="foote_bottom_ul_amrc">
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <ul class="foote_bottom_ul_amrc">
        <li>
          <a href="#">Home</a>
        </li>
        <li @click="showOneUser">
          <a href="#">About</a>
        </li>
        <li>
          <a href="#"></a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <!--foote_bottom_ul_amrc ends here-->
      <p class="text-center">Copyright @2018 | All Right Reserved</p>

      <ul class="social_footer_ul">
        <li>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
      <!--social_footer_ul ends here-->
    </div>
  </footer>
</template>

<script>
import axios from "axios";

const api = axios.create({
  withCredentials: true
});

export default {
  name: "LandingFooter",
  methods: {
    showOneUser(e) {
      let userId = document.cookie.split("=")[2];
      api
        .post(`/api/users/${userId}`, {
          clientToken: document.cookie.split("=")[1].split(";")[0]
        })
        .then(response => {
          if (response.status == 200) {
            console.log(response);
          }
        })
        .catch(function(error) {
          console.log(error);
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });

      return;
    }
  }
};
</script>

<style>
@import "../custom_css/footer.scss";
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
</style>
