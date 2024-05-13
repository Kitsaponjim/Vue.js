<template>
    <div>

        <body>
            <div class="sec1">
                <v-img src="../assets/bg.jpg" height="300"></v-img>
            </div>

            <div class="sec2">
                <v-row align="center">
                    <!-- <v-row> -->
                    <v-col cols="12" md="2"></v-col>
                    <v-col cols="12" md="2">
                        <v-avatar class="avatar" size="250">
                            <v-img src="../assets/cat.jpg" class="image-with-border"></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col cols="12" md="1"></v-col>
                    <v-col cols="12" md="3">
                        <div class="name">
                            <h1>Kitsapon Sutto</h1>
                            <p>#นอนน้อยไม่กลัวกลัวไม่ได้นอน</p>
                            <v-btn @click="display()">Click here</v-btn>
                        </div>
                    </v-col>
                    <!-- <v-col cols="12" md="6">
                        <v-img src="../assets/jim.jpg" height="200" width="200"></v-img>
                    </v-col> -->
                </v-row>
            </div>
            <div class="sec3">
                <v-row>
                    <v-col cols="12" md="2"></v-col>
                    <v-col cols="12" md="4">
                        <v-card class="into">
                            <h2>แนะนำตัว</h2>
                            <v-divider></v-divider>
                            <p><strong>ชื่อ:</strong> <span>{{ name }}</span></p>
                            <p><strong>ชื่อเล่น:</strong> <span>{{ nickname }}</span></p>
                            <p><strong>อายุ:</strong> <span>{{ age }}</span></p>

                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="into">
                            <h2>การศึกษา</h2>
                            <v-divider></v-divider>
                            <p><strong>จบจากมหาลัย:</strong> <span>{{ university }}</span></p>
                            <p><strong>คณะ:</strong> <span>{{ faculty }}</span></p>
                            <p><strong>สาขา:</strong> <span>{{ branch }}</span></p>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
            <div class="sec4">
                <v-row>
                    <v-col cols="12" md="2"> </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="into">
                            <h2>ความชอบ</h2>
                            <v-divider></v-divider>
                            <p><strong>งานอดิเรก:</strong> <span>{{ work }}</span></p>
                            <p><strong>กีฬาที่ชอบ:</strong> <span>{{ likesport }}</span></p>
                            <p><strong>สัตว์ที่ชอบ:</strong> <span>{{ likeanimal }}</span></p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="into">
                            <h2>ช่องทางการติดต่อ</h2>
                            <v-divider></v-divider>
                            <p><strong>Email:</strong> <span>{{ email }}</span></p>
                            <p><strong>Phone:</strong> <span>{{ phone }}</span></p>
                            <p><strong>Facebook:</strong> <span>{{ facebook }}</span></p>
                        </v-card>
                    </v-col>
                </v-row>
                <div class="sec5">
                    <v-row>
                        <v-col>
                            <v-col cols="12" md="4ุ">
                                <div class="pig">
                                    <card />
                                </div>
                            </v-col>
                        </v-col>
                    </v-row>
                </div>
            </div>
            <footer class="footer">
                <v-row align="center" justify="center">
                    <v-col cols="12">
                        <h2 v-if="show">
                            <marquee>{{ data }}</marquee>
                        </h2>
                        <p class="text-center">© 2024 Your Website. All rights reserved.</p>
                    </v-col>
                </v-row>
            </footer>

        </body>
    </div>
</template>

<script>
import card from '../components/Cardimg.vue'
export default {
    components: {
        card
    },
    methods: {
        display() {
            alert("Hello World!!!")
        }
    },
    data() {
        return {
            data: 'Hello',
            show: false,
            icons: [
                'mdi-facebook',
                'mdi-instagram',
            ],
            name: 'นายกิจศภณ สุทโธ',
            nickname: 'จิม',
            age: 22,
            university: 'มหาวิทยาลัยสงขลานครินทร์',
            likeanimal: 'แมว',
            faculty: 'คณะวิศวกรรมศาสตร์',
            branch: 'คอมพิวเตอร์',
            work: 'ดูหนัง, ฟังเพลง, เล่นเกม, ชอบทำงานฝีมือ',
            likesport: 'แบตมินตัน',
            strength: 'ชอบช่วยผู้อื่น',
            weakness: 'ปฏิเสธคนไม่เก่ง, ง่วงง่าย',
            phone: '087-692-4343',
            email: 'kitsapon.su@inet.co.th',
            facebook: 'Kitsapon Sutto',
        }
    }

}
</script>

<style>
body {
    background-color: #f3f3f3;
}

.sec2 {
    text-align: center;
    margin-bottom: -60px;
}

.image-with-border {
    border: 8px solid #f3f3f3;
    border-radius: 50%;
}

.avatar {
    position: relative;
    top: -60px;
    /*-55px*/
}

.name {
    position: relative;
    top: -45px;
    /*-45px*/
    color: #282c34;
}

.into {
    margin: 10px 15px;
    padding: 15px;
}

.sec3 p,
.sec4 p {
    font-size: 18px;
    color: #000;
}

.sec3 span,
.sec4 span {
    font-size: 16px;

    color: #3c3c3c;
}

.footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
}

.sec5 {
    margin-bottom: 20px;
}

/* 
.sec1,
.sec2,
.sec3,
.sec4,
.sce5{
    border:1px solid red
} */

.pig {
    margin: 0px 15px;
}
</style>
