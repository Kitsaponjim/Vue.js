<template>
    <div>
        <h1>Simple Page</h1>
        <h2 v-if="show">{{ name }}</h2>
        <v-btn color="success" @click="show = !show">switch</v-btn>
        <v-btn color="success" @click="calAlert()">ส่งเสียง</v-btn>
        <div>
            <v-row>
                <v-col cols="12" md="3" v-for="(item, index) in list" :key="index">
                    <v-card width="350" >
                        <v-img :src="item.img"  height="300"></v-img>
                        <v-card-title primary-title>
                            <span>{{ item.name }}</span>
                        </v-card-title>
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
    </div>
</template>

<script>
export default {
    data: () => ({
        name: 'Kitsapon',
        show: false,
        list: [
            { name: 'แมว', img: require('../assets/cat.jpg') },
            { name: 'Valorant', img: require('../assets/valo.jpg') },
            { name: 'Honkai Ster Rail', img: require('../assets/hsr.jpg') },
            { name: 'Marvel', img: require('../assets/marvel.png') },
        ]
    }),
    methods: {
        calAlert() {
            alert('โฮกปิ๊ป')
        },

        calName(ok) {

            if(!ok) {
               return alert('ใส่ชื่อด้วยนะครับ')
            }
            alert('สวีดัส สวัสดี '+ ok)
        }
    }
    
}
</script>

<style></style>