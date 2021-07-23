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



    <v-btn dark small color="rgba(254,249,196,255)" fixed left bottom>
      <v-icon color="rgba(166,123,91,255)">Add self Checklists</v-icon>
    </v-btn>



  </v-form>

</template>

<script>
// import image from "src/assets/logo.png"
export default {
  name: "Questions"
}
</script>

<style >
</style>