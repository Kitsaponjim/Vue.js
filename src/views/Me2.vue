<template>
    <div>
        <div class="test">
            <div class="sec1">
                <v-img src="../assets/bg.jpg" height="300"></v-img>
            </div>
            <div class="sec2">
                <div>
                    <v-avatar color="#000" size="220">
                    </v-avatar>
                    <v-avatar class="avatar" color="primary" size="200">
                        <v-img src="../assets/cat.jpg"></v-img>
                    </v-avatar>
                </div>
                <div class="name">
                    <h1>Kitsapon Sutto</h1>
                    <p>#นอนน้อยไม่กลัวกลัวไม่ได้นอน</p>
                </div>
            </div>
            <div class="sec3">
                <v-row>
                    <v-col cols="3">
                        <div class="box1">
                            <v-card elevation="17">
                                <h1>แนะนำตัว</h1>
                                <p>ชื่อ: <span>{{ name }}</span></p>
                                <p>ชื่อเล่น: <span>{{ nickname }}</span></p>
                                <p>อายุ: <span>{{ age }}</span></p>
                                <p>จบจากมหาลัย: <span>{{ university }}</span></p>
                                <p>คณะ: <span>{{ faculty }}</span></p>
                                <p>สาขา: <span>{{ branch }}</span></p>
                                <p>งานอดิเรก: <span>{{ work }}</span></p>
                                <p>สัตว์ที่ชอบ: <span>{{ likeanimal }}</span></p>
                                <p>กีฬาที่ชอบ: <span>{{ likesport }}</span></p>
                                <p>ข้อดี: <span>{{ strength }}</span></p>
                                <p>ข้อเสีย: <span>{{ weakness }}</span></p>
                            </v-card>
                        </div>
                    </v-col>
                    <v-col cols="3">
                        <div class="box2">
                            <v-card title="Card title" subtitle="Subtitle" text="..." variant="tonal"></v-card>
                            <v-card elevation="17" outlined shaped>
                                <p>Phone: <span>{{ phone }}</span></p>
                                <p>Email: <span>{{ email }}</span></p>
                                <p>Facebook: <span>{{ facebook }}</span></p>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </div>
            <div class="sec4">
                
            </div>

        </div>
    </div>
</template>

<script>
export default {
    // components: {
    //     catcrad
    // },
    data: () => ({
        name: 'นายกิจศภณ  สุทโธ',
        nickname: 'จิม',
        age: 22,
        university: 'มหาวิทยาลัยสงขลานครินทร์',
        likeanimal: 'แมว, หมา',
        faculty: 'คณะวิศวกรรมศาสตร์',
        branch: 'คอมพิวเตอร์',
        work: '',
        likesport: 'แบตมินตัน',
        strength: 'ชอบช่วยผู้อื่น',
        weakness: 'ปฏิเสธคนไม่เก่ง',
        phone: '087-692-4343',
        email: 'kitsapon.su@inet.co.th',
        facebook: 'Kitsapon Sutto',
    })
}
</script>

<style>
.test {
    /* position: absolute; */
    /* width: 1000; */
    /* border: 2px solid red; */
    /* left: 2.5%;
    right: 2.5%; */
}

.sec1 {
    /* position: absolute; */
    /* border: 2px solid red; */
}

.sec1 p {
    font-size: 24px;
}

.sec1 .name {
    margin-top: 10px;
    position: absolute;
    /* left: 500px; */
    /* border: 2px solid red; */
}


.sec2 {
    display: flex;
    position: relative;
    left: 18%;
    right: 18%;
    bottom: 90px;
    /* left: 250px; */
}

.sec2 .name {
    font-size: large;
    margin-top: 100px;
    position: absolute;
    left:250px;
    /* border: 2px solid red; */
}

.sec2 .name p {
    margin-top: 5px;
    font-size: 18px;
}

.sec2 .avatar {
    position: relative;
    right: 210px;
}

.sec3 {
    /* display: flex; */
    /* position: relative;
    left: 18%;
    right: 18%; */
    /* padding-left: 85px; */
    justify-content: center;
    border: 2px solid red;
}

.sec3 p {
    font-size: 24px;
}

.sec3 span {
    font-size: 20px;
    color: #5b5b5b;
}
</style>