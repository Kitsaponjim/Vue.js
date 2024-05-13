<template>
    <div>
        <h1>Simple Page</h1>
        <h2 v-if="show">{{ name }}</h2>
        <v-btn color="success" @click="show = !show">switch</v-btn>
        <v-btn color="success" @click="calAlert()">ส่งเสียง</v-btn>
        <div>
            <v-row>
                <v-col cols="12" md="2" v-for="(item, index) in list" :key="index">
                    <v-card width="350" >
                        <v-img :src="item.img"  height="300"></v-img>
                        <v-card-title primary-title>
                            <span>{{ item.name }}</span>
                        </v-card-title>
                        <v-btn @click="callInfo(item.info)" color="primary">
                            info
                        </v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <v-col cols="12">
            <v-text-field v-model="Ok" label="ใส่ชื่อ">
            </v-text-field>
            <v-btn @click="calName(Ok)">
                ส่งชื่อ
            </v-btn>
        </v-col>
        <div>
            <simple :name="name" @callAlert="callAlert"/>
        </div>
        <div>
            <v-btn @click="callSim()">
                CallSim
            </v-btn>
        </div>
    </div>
</template>

<script>
import {EventBus } from '@/EventBus'
import simple from '../components/Simplecomponete.vue'
export default {
    components: {
        simple
    },
    data: () => ({
        name: 'Kitsapon',
        show: false,
        list: [
            { name: 'แมว', img: require('../assets/cat.jpg'), info:'แมวร้องโฮกปิ๊ป' },
            { name: 'Valorant', img: require('../assets/valo.jpg'), info:'เกมดี ๆ ที่เรารัก'  },
            { name: 'Honkai Ster Rail', img: require('../assets/hsr.jpg'), info:'เล่นเยอะเป็นไตได้'  },
            { name: 'Marvel', img: require('../assets/marvel.png'), info:'ซี่รี่ยังไม่ได้ดู'  },
        ]
    }),
    mounted() {
        EventBus.$on('MainCallAlert', this.callAlert)
    },
    methods: {
        callSim() {
            EventBus.$emit('SimCallAlert')
        },

        callAlert() {
            alert('โฮกปิ๊ป1')
        },

        calName(ok) {

            if(!ok) {
               return alert('ใส่ชื่อด้วยนะครับ')
            }
            alert('สวีดัส สวัสดี '+ ok)
        },

        callInfo(data) {
            alert(data)
        },
    }
    
}
</script>

<style></style>