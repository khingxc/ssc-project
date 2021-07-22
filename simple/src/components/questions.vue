<template>



<!--    <div class="main">-->
  <v-form>

<!--      <v-img src="https://st3.depositphotos.com/9876904/37112/v/450/depositphotos_371120376-stock-illustration-blank-notebook-template-background-illustration.jpg" height="1000px" width="1500">-->



<!--      </v-img>-->

    <v-app style="background: lightcyan">
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
                                <h2>How was your day ?</h2>
                                <v-textarea
                                    filled
                                    name="input-7-4"
                                    label="Hope you are doing well :)"
                                    color="#00BCD4"
                                ></v-textarea>
                                <h2>Tell me the happiest thing happening today :)</h2>
                                <v-textarea
                                    filled
                                    name="input-7-4"
                                    label="I believe you have one"
                                    color="#00BCD4"
                                ></v-textarea>
                                <h2>Are you achieving the goals that you've set for yourself ? What are they ?</h2>
                                <v-textarea
                                    filled
                                    name="input-7-4"
                                    label="yes yes yes !!!"
                                    color="#00BCD4"
                                ></v-textarea>


                                    <v-btn color="#4DD0E1">
                                      save
                                    </v-btn>
                                    <v-btn
                                        class="mx-2"
                                        fab
                                        dark
                                        large
                                        color="#FFEE58"
                                        fixed right bottom
                                    >
                                      <v-icon dark>
                                        mdi-pencil
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


<!--    <div v-if="image" style="width:600px; height:200px" :style="{ 'background-image': 'url(https://vuejs.org/images/logo.png)' }"></div>-->




<!--      <v-container>-->
<!--        <v-layout row wrap>-->
<!--          &lt;!&ndash; xs12 and sm12 to make it responsive = 12 columns on mobile and 6 columns from medium to XL layouts &ndash;&gt;-->
<!--          <v-flex xs12 sm12 md6>-->
<!--            <v-img src="https://st3.depositphotos.com/9876904/37112/v/450/depositphotos_371120376-stock-illustration-blank-notebook-template-background-illustration.jpg" height="1000px" width="1500">&ndash;&gt;-->
<!--                      <v-textarea-->
<!--                          filled-->
<!--                          name="input-7-4"-->
<!--                          label="write on me :)"-->
<!--                      ></v-textarea>-->
<!--            </v-img>-->

<!--          </v-flex>-->
<!--          <v-flex xs12 sm12 md6>-->

<!--          </v-flex>-->
<!--        </v-layout>-->
<!--      </v-container>-->









    <!--    <v-avatar>-->
<!--      <img-->
<!--          src="https://cdn.nohat.cc/thumb/f/720/m2i8G6d3K9d3K9m2.jpg"-->
<!--          alt="John"-->
<!--      >-->
<!--    </v-avatar>-->
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
<!--        <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

        <v-toolbar-title>Username</v-toolbar-title>

        <v-spacer></v-spacer>

<!--        <v-btn icon>-->
<!--          <v-icon>mdi-magnify</v-icon>-->
<!--        </v-btn>-->

<!--        <v-btn icon>-->
<!--          <v-icon>mdi-heart</v-icon>-->
<!--        </v-btn>-->

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
          id="scrolling-techniques-2"
          class="overflow-y-auto"
          max-height="1000"

      >
<!--        <v-container style="height: 1000px;"></v-container>-->

      </v-sheet>



    <v-btn dark small color="rgba(254,249,196,255)" fixed left bottom>
      <v-icon color="rgba(166,123,91,255)">Add self Checklists</v-icon>
    </v-btn>



  </v-form>












<!--    make a bottom bar-->
<!--    <v-bottom-navigation-->
<!--        :value="value"-->
<!--        color="primary"-->
<!--        horizontal-->
<!--    >-->
<!--      <v-btn>-->
<!--        <span>Recents</span>-->

<!--        <v-icon>mdi-history</v-icon>-->
<!--      </v-btn>-->

<!--      <v-btn>-->
<!--        <span>Favorites</span>-->

<!--        <v-icon>mdi-heart</v-icon>-->
<!--      </v-btn>-->

<!--      <v-btn>-->
<!--        <span>Nearby</span>-->

<!--        <v-icon>mdi-map-marker</v-icon>-->
<!--      </v-btn>-->
<!--    </v-bottom-navigation>-->
<!--  </div>-->






</template>

<script>
// import image from "src/assets/logo.png"


export default {
//   name: ('main')






}
</script>

<style >

</style>