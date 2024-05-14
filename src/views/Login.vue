<template>
    <div>
        <div class="sec3">
            <v-card>
                <div class="card">
                    <div class="header">
                        <a class="login" href="#login">Login</a>
                        <a class="register" href="#register">Register</a>
                    </div>
                    <v-divider></v-divider>
                    <v-text-field v-model="username" label="Username" prepend-icon="mdi-account"
                        id="score"></v-text-field>
                    <v-text-field v-model="password" label="Password" prepend-icon="mdi-lock" id="score"></v-text-field>
                    <v-btn class="primary" @click="calculate(score)">submit</v-btn>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        name: '',
        password: '',
    })
}
</script>

<style>
.sec3 {
    margin: 200px auto;
    width: 400px;
    justify-content: center;
}

.card {
    text-align: center;
    padding: 15px;
}

.header {
    display: flex;
    justify-content: space-around;

}

a {

}
.login {

    font-size: 18px;
    text-decoration: none;
}

.register {
    color: #000;
    font-size: 18px;
    text-decoration: none;
}

</style>