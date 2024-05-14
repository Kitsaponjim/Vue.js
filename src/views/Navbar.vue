<template>
    <div>
        <v-app-bar app color="#000000" dark>
            <div class="d-flex align-center">
                <h1 class="shrink mt-1 hidden-sm-and-down" style="min-width: 100px;">ShopVue</h1>
            </div>
            <div class="menu ml-5">
                <ul class="d-flex list-unstyled mb-0">
                    <li class="mr-5"><a href="#">หน้าหลัก</a></li>
                    <li class="mr-5"><a href="#">สินค้า</a></li>
                    <li class="mr-5"><a href="#">เกี่ยวกับ</a></li>
                </ul>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-cart</v-icon>
            </v-btn>
            <v-avatar size="45">
                <v-img src="../assets/jim.jpg"></v-img>
            </v-avatar>
            <!-- <v-btn icon>
                <v-icon>mdi-account</v-icon>
            </v-btn> -->
        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>
        <v-footer padless>
            <v-col class="text-center" cols="12">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-col>
        </v-footer>
    </div>
</template>

<script>
export default {
}
</script>

<style>
.menu ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.menu li {
    margin-right: 20px;
}

.menu li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.menu li a:hover {
    text-decoration: underline;
}
</style>
