<template>
    <div>
        <div class="sec3">
            <v-card>
                <div class="card">
                    <h1>คำนวนเกรด</h1>
                    <v-divider></v-divider>
                    <v-text-field v-model="score" label="ใส่คะแนนที่ได้" prepend-icon="mdi-alarm-panel"
                        id="score"></v-text-field>
                    <v-btn class="primary" @click="calculate(score)">submit</v-btn>
                </div>
            </v-card>
        </div>
        <div class="sec3">
            <v-alert v-if="show1"
                text="..."
                title="Alert title" type="success">
                {{ grade }}
            </v-alert>
            <v-alert v-if="show2" density="compact"
                text="..."
                title="Alert title" type="warning">
                {{ grade }}
            </v-alert>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        calculate(score) {
            if (!score) {
                this.show1 = false
                this.show2 = true
                this.grade = 'กรุณาใส่คะแนนเป็น"ตัวเลข"ให้อยู่ในช่วง 0-100'
                // return alert('กรุณาใส่คะแนนเป็น"ตัวเลข"ให้อยู่ในช่วง 0-100')
            } else {
                if (score <= 100 && score >= 0) {
                    if (score >= 80) {
                        this.show1 = true
                        this.show2 = false
                        this.grade = 'คุณได้เกรด A!!'
                        // return alert("คุณได้เกรด A!!")
                    }
                    else if (score <= 79 && score >= 70) {
                        this.show1 = true
                        this.show2 = false
                        this.grade = 'คุณได้เกรด B!!'
                        // return alert("คุณได้เกรด B!!")
                    }
                    else if (score <= 69 && score >= 60) {
                        this.show1 = true
                        this.show2 = false
                        this.grade = 'คุณได้เกรด C!!'
                        // return alert("คุณได้เกรด C!!")
                    }
                    else if (score <= 59 && score >= 50) {
                        this.show1 = true
                        this.show2 = false
                        this.grade = 'คุณได้เกรด D!!'
                        // return alert("คุณได้เกรด D!!")
                    }
                    else if (score <= 49 && score >= 0) {
                        this.show1 = true
                        this.show2 = false
                        this.grade = 'คุณได้เกรด F!!'
                        // return alert("คุณได้เกรด F!!")
                    }
                }
                else {
                    this.show1 = false
                    this.show2 = true
                    this.grade = 'กรุณาใส่คะแนนเป็น"ตัวเลข"ให้อยู่ในช่วง 0-100'
                    // alert('กรุณาใส่คะแนนเป็น"ตัวเลข"ให้อยู่ในช่วง 0-100')
                }
            }

        }
    },
    data() {
        return {
            score: '',
            grade: 'กรุณาใส่คะแนนเป็น"ตัวเลข"ให้อยู่ในช่วง 0-100',
            show1: false,
            show2: false,
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

.card {
    text-align: center;
    padding: 15px;
}
</style>
