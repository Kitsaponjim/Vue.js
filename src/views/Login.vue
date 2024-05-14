<template>
    <div>

        <body>
            <div class="sec3">
                <v-card class="card">
                    <c class="header">
                        <h1>Welcome to Page</h1>
                    </c>
                    <v-text-field v-if="showLogin" v-model="postdata.Username" label="Username" required></v-text-field>
                    <v-text-field v-if="showLogin" type="password" v-model="postdata.Password" label="Password"
                        required></v-text-field>
                    <v-text-field v-if="showRegister" v-model="postdata.Username" label="Username"
                        required></v-text-field>
                    <v-text-field v-if="showRegister" type="password" v-model="postdata.Password" label="Password"
                        required></v-text-field>
                    <v-text-field v-if="showRegister" type="password" v-model="ConfirmPassword" label="ConfirmPassword"
                        required></v-text-field>
                    <v-text-field v-if="showRegister" v-model="postdata.FirstName" label="FirstName"
                        required></v-text-field>
                    <v-text-field v-if="showRegister" v-model="postdata.LastName" label="LastName"
                        required></v-text-field>
                    <v-btn v-if="showLogin" class="success btn" @click="checklogin()">login</v-btn>
                    <v-btn v-if="showRegister" class="primary btn"
                        @click="check(postdata, ConfirmPassword)">register</v-btn>
                    <div class="register">
                        <p v-if="showLogin">Don't have an account? <a @click="newregister()">register</a></p>
                        <p v-if="showRegister">Already have an account? <a @click="newlogin()">login</a></p>
                    </div>
                </v-card>
            </div>
        </body>
    </div>
</template>

<script>
export default {
    data: () => ({
        ConfirmPassword: '',
        showLogin: true,
        showRegister: false,
        postdata: {
            Username: '',
            Password: '',
            FirstName: '',
            LastName: '',
            Role: '',
            StatusApprove: '',
        },
        postdefault: {
            Username: '',
            Password: '',
            FirstName: '',
            LastName: '',
            Role: 0,
            StatusApprove: 0,
        },
    }),
    methods: {
        checklogin() {
            alert('กำลังปรับปรุง')
            this.newlogin()
        },

        check(postdata, ConfirmPassword) {
            if (postdata.Password != ConfirmPassword) {
                return alert('รหัสผ่านไม่ตรงกัน')
            } else this.PostRegister()
        },

        newregister() {
            this.id = ''
            this.postdata = { ...this.postdefault }
            this.showRegister = true
            this.showLogin = false
        },
        newlogin() {
            this.id = ''
            this.postdata = { ...this.postdefault }
            this.showRegister = false
            this.showLogin = true
        },
        async PostRegister() {
            try {
                const { data } = await this.axios.post('http://localhost:3000/api/v1/register', this.postdata)
                console.log(data)
                alert('register complete')
                this.newlogin()
            } catch (err) {
                console.log(err)
                alert("register error")
            }
        },
    }
}
</script>

<style>
.sec3 {
    margin: 50px auto;
    width: 400px;
    justify-content: center;
    /* border: 1px solid red; */
}

.header h1 {
    margin-top: 30px;
    margin-bottom: 50px;
}

.card {
    display: block;
    text-align: center;
    padding: 15px;
    border-radius: 5px;
}

.btn {
    width: 250px;
    margin-top: 20px;
    background: #3c3c3c;
    color: #fff;
    padding: 10px;
    border-radius: 4px;
}

.register {
    margin-top: 100px;
}
</style>