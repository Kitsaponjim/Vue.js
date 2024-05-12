<template>
    <div>
        <div class="home">
            <div class="img">
                <v-avatar  size="340">
                    <v-img src="../assets/cat.jpg" width="350px" height="350px" border-radius="50%"></v-img>
                </v-avatar>
            </div>
            <div class="text">
                <p>Hello, I'm</p>
                <h1>Kitsapon Sutto</h1>
            </div>
        </div>
        <div class="contents">
            <h1>Profile</h1>
        </div>
        <div class="like">
            <h1>Like</h1>
        </div>
        <div class="education">
            <h1>Education</h1>
        </div>
        <div class="contact">
            <h1>Contact</h1>
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
        university: 'มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่',
        like: 'แมว, หมา'
    })
}
</script>

<style>
.home {
    /* margin-top: 20px; */
    /* display: flex; */
    /* justify-content: center; */
    /* background: #000; */
    border: 2px solid red;
}

.text {
    /* border-radius: 100%; */
    border: 1px solid red;
}

.text {
    /* border-radius: 100%; */
    border: 1px solid red;
}

.contents {
    border: 2px solid red;
}

.like {
    border: 2px solid red;
}

.education {
    border: 2px solid red;
}

.contact {
    border: 2px solid red;
}
</style>