<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md10 offset-sm1 offset-md1>
                <v-carousel :show-arrows="false" class="mb-5">
                    <v-carousel-item
                    v-for="citem in citems"
                    :key="citem.title"
                    :src="citem.src"
                    ></v-carousel-item>
                </v-carousel>     
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12 sm10 md10 offset-sm1 offset-md1>
                <v-row no-gutters>
                    <v-col
                        v-for="card in cards"
                        :key="card.title"
                        cols="12"
                        xs="12"
                        sm="12"
                        md="4"
                    >
                    <v-card outlined shaped class="ma-2">
                        <v-card-text>
                            <router-link tag="span" :to="card.link" style="cursor">    
                            <v-col align="center" justify="center">
                                <v-avatar color="primary" size="72">
                                    <v-icon dark large>{{ card.icon }}</v-icon>
                                </v-avatar>
                                <v-spacer class="mb-4"></v-spacer>
                                <p class="display-1 text--primary">
                                {{ card.title }}
                            </p>
                                <div class="text--primary">
                                Lorem ipsum dolor sit amet consectetur <br>
                                adipisicing elit. Tempore modi odit earum assumenda? <br>
                                Architecto culpa dicta dolore distinctio est corrupti <br>
                                suscipit magni, accusantium amet, excepturi rem? Nobis <br>
                                possimus earum dolor?
                                </div>
                            </v-col>
                            </router-link>
                        </v-card-text>
                    </v-card>    
                    </v-col>
                </v-row>
            </v-flex>
        </v-layout>
        <v-card
            class="pa-md-4 mx-lg-auto"
            color="white"
            flat
            height="30px"
        >
        </v-card>
        <v-layout>
            <v-flex xs12 sm10 md10 offset-sm1 offset-md1>
                <div align="center" justify="center">
                <p class="display-1 text--primary">
                            Something Something
                        </p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maiores sapiente esse vitae nulla veniam quod nemo, 
                    dolore voluptates natus laudantium id deleniti veritatis 
                    consequatur fuga maxime quia placeat laborum qui?
                    dolore voluptates natus laudantium id deleniti veritatis 
                    consequatur fuga maxime quia placeat laborum qui?</p>
                </div>    
            </v-flex>
            
        </v-layout>

    </v-container>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {icon: 'mdi-home', title: 'About', link: '/about'},
        {icon: 'mdi-bank', title: 'Services' , link: '/services'},
        {icon: 'mdi-lock', title: 'Online Inquiry', link: '/login'}
      ],
      citems: [
        {title: 'Pantawin Pasada', src: 'https://i1.wp.com/rmn.ph/wp-content/uploads/2019/01/PANTAWID-PASADA.jpg'}
      ]
    }
  }
};
</script>