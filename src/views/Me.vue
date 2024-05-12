<template>
    <div class="frame">

        <!-- <v-card class="mx-auto" max-width="434" tile>
            <v-img height="100%" src="../assets/bg.jpg">
                <v-row align="end" class="fill-height">
                    <v-col align-self="start" class="pa-0" cols="12">
                        <v-avatar class="profile" color="grey" size="128" tile rounded>
                            <img src="../assets/avt.gif" alt="John">
                        </v-avatar>
                    </v-col>
                    <v-col class="py-0">
                        <v-list-item color="rgba(0, 0, 0, .4)" dark>
                            <v-list-item-content>
                                <v-list-item-title class="text-h6">
                                    Kitsapon Sutto
                                </v-list-item-title>
                                <v-list-item-subtitle>Software Engineer</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-img>
        </v-card> -->

        <v-card elevation="17" outlined shaped>
            <marquee direction="right">
                <h1>แนะนำตัวเอง
                    <v-avatar size="128">
                        <img src="../assets/avt.gif" alt="John">
                    </v-avatar>
                </h1>
            </marquee>
            <v-divider></v-divider>
            <div class="contents">
                <p>ชื่อ:<span>{{ name }}</span></p>
                <p>ชื่อเล่น:<span>{{ nickname }}</span></p>
                <p>อายุ:<span>{{ age }}</span></p>
                <p>จบจากมหาลัย:<span>{{ university }}</span></p>
                <p>สิ่งที่ชอบ:<span>{{ like }}</span></p>

            </div>
            <catcrad />
        </v-card>
    </div>
</template>

<script>
import catcrad from '../components/Cardimg.vue'
export default {
    components: {
        catcrad
    },
    data: () => ({
        name: 'นายกิจศภณ  สุทโธ',
        nickname: 'จิม',
        age: 22,
        university: 'มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่',
        like: 'แมว'
    })
}
</script>

<style>
.contents {
    margin: 10px 5px;
}

.contents p span {
    font-size: 20px;
    color: #303030;
    margin: 0px 20px;
}

.contents p {
    font-size: 20px;
    color: #000000;
    margin: 0px 20px;
}

.frame {
    margin: 10px;
    padding: 10px;
    /* border: 2px solid #000; */
}

.frame marquee {
    padding: 10px;
    /* border: 2px solid #000; */
}
</style>