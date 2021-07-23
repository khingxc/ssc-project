<template>


  <v-form>


    <v-app style="background: lemonchiffon">
      <v-container>
        <v-container>
          <v-container>
            <v-container>
              <v-container>
                <v-container>
                  <v-container>
                    <v-container>
                      <v-container>
                        <v-container>
                          <v-container>
                            <v-container>
                              <v-container>

                                <h2>Hello, my name is POV. You can tell me anything you want to as I'm your diary. You know I always listen to you, and I'm not telltale.</h2>
                                <v-textarea
                                    solo
                                    name="input-7-4"
                                    label="I'll keep it in secret for you."
                                    color="#F57F17"
                                ></v-textarea>

                                <v-btn color="#FDD835">
                                  save
                                </v-btn>
                                <v-btn
                                    class="mx-2"
                                    fab
                                    dark
                                    large
                                    color="#4DD0E1"
                                    fixed right bottom
                                >
                                  <v-icon dark>
                                    mdi-comment-question
                                  </v-icon>
                                </v-btn>




                              </v-container>
                            </v-container>

                          </v-container>
                        </v-container>
                      </v-container>
                    </v-container>

                  </v-container>
                </v-container>
              </v-container>
            </v-container>
          </v-container>
        </v-container>


      </v-container>
    </v-app>

    <v-app-bar
        absolute
        color="#fcb69f"
        dark
        shrink-on-scroll
        src="https://picsum.photos/1920/1080?random"
        scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-avatar>
        <img
            src="https://st.depositphotos.com/1359043/2279/i/600/depositphotos_22795844-stock-photo-blue-butterfly-isolated-on-white.jpg"
            alt="POV"
        >
      </v-avatar>
      <v-toolbar-title>Username</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="1000"

    >

    </v-sheet>



    <v-btn dark small color="rgba(177,236,242,255)" fixed left bottom>
      <v-icon color="rgba(0,97,101,255)">Add self Checklists</v-icon>
    </v-btn>



  </v-form>


</template>

<script>
// import image from "src/assets/logo.png"
import Vue from "vue";

export default {
  methods: {
    async submit () {

      if (this.$refs.form.validate()){
        let formData = new FormData();
        formData.append("email", this.email);
        formData.append("password", this.password);
        let response = Vue.axios.post("/api/login", formData);
        console.log(response);
        if (response.data.success) {
          await this.$router.push({name: 'Questions'});
          // Vue.$router.push({name: 'Questions'});
        }
        else{
          await this.$router.push({name: 'Login'});
        }
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
}
</script>

<style >
</style>