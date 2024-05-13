<template>
    <div>
        <div class="sec3">
            <center>
                <h1>คำนวนเกรด</h1>
                <v-text-field v-model="score" label="Input Grade" prepend-icon="mdi-alarm-panel" id="score"></v-text-field>
                <v-btn @click="calculate(score)">submit</v-btn>
            </center>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        calculate(score) {
            if (score <= 100 && score >= 0) {
                if (score >= 80) {
                    return alert("คุณได้เกรด A!!")
                }
                else if (score <= 79 && score >= 70) {
                    return alert("คุณได้เกรด B!!")
                }
                else if (score <= 69 && score >= 60) {
                    return alert("คุณได้เกรด C!!")
                }
                else if (score <= 59 && score >= 50) {
                    return alert("คุณได้เกรด D!!")
                }
                else if (score <= 49 && score >= 0) {
                    return alert("คุณได้เกรด F!!")
                }
            }
            else {
                alert('กรุณาใส่คะแนนเป็น"ตัวเลข"ให้อยู่ในช่วง 0-100')
            }
        }
    },
    data() {
        return {
            score: '',
        }
    }
}
</script>

<style>
.sec3 {
    margin: 100px auto;
    width: 500px;
    justify-content: center;
}
</style>
