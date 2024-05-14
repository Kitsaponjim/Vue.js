<template>
    <div>
        <div class="head">
            <v-row align="center">
                <v-col cols="12" md="2"></v-col>
                <v-col cols="12" md="4">
                    <h1 class="text">Sport Shop</h1>
                </v-col>
                <v-col cols="12" md="4">
                    <v-img class="img" src="../assets/items.png" />
                </v-col>
            </v-row>
        </div>

        <div class="bar"></div>
        <div class="body">
            <div class="sec1" align="center">
                <h1>สินค้าในร้าน</h1>
            </div>
            <div class="item">
                <v-row >
                    <v-col cole="12" md="3" v-for="(item, index) in apiData" :key="index">
                        <v-card width="350">
                            <v-img src="../assets/hsr.jpg" />
                            <v-card-title primary-title>
                                <span>{{ item.product_name }}</span>
                            </v-card-title>
                            <v-card-subtitle>
                                <span>{{ item.price }} บาท</span>
                            </v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="success">Add</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        id: '',
        apiData: [],
        dialogedit: false,
        postdata: {
            product_name: '',
            amount: '',
            price: '',
            Type: '',
        },
        postdefault: {
            product_name: '',
            amount: '',
            price: '',
            Type: '',
        },
    }),
    created() {
        this.getData()
    },
    computed: {
        savemode() {
            return this.id == '' ? 'New Item' : 'Edit Item'
        }
    },
    methods: {
        newItem() {
            this.id = ''
            this.postdata = { ...this.postdefault }
            this.dialogedit = true
        },
        editItem(item) {
            this.id = item._id
            this.postdata = item
            this.dialogedit = true
        },
        closeData() {
            this.id = ''
            this.postdata = { ...this.postdefault }
            this.dialogedit = false
        },
        saveSelect() {
            if (this.id != '') {
                this.savePutdata()
            } else this.savePostdata()
        },
        getData() {
            // this.axios.get('http://localhost:3000/api/v1/products').then((res) => {
            this.axios.get('http://localhost:3000/api/v1/products').then((res) => {
                console.log(res.data.data)
                this.apiData = res.data.data
            })
        },
        async savePostdata() {
            try {
                const { data } = await this.axios.post('http://localhost:3000/api/v1/products', this.postdata)
                console.log(data)
                alert('Post complete')
                this.getData()
                this.closeData()
            } catch (err) {
                console.log(err)
                alert("error")
            }
        },

        async savePutdata() {
            try {
                const { data } = await this.axios.put('http://localhost:3000/api/v1/products/' + this.id, this.postdata)
                console.log(data)
                alert('Update complete')
                this.getData()
                this.closeData()
            } catch (err) {
                console.log(err)
                alert("error")
            }
        },

        async saveDeletedata(item) {
            try {
                const { data } = await this.axios.delete('http://localhost:3000/api/v1/products/' + item)
                console.log(data)
                alert('Delete complete')
                this.getData()
                this.closeData()
            } catch (err) {
                console.log(err)
                alert("error")
            }
        }
    }
}
</script>

<style>
.body {
    margin: 50px 125px;
}

.head {
    display: block;
    height: 400px;
    background: #f2f0f1;
    /* border:1px solid red; */
}

/* .text {
    margin-top: 170px;
    margin-bottom: 0px;
}

.img {
    margin-bottom: 0px;
    margin-top: 165px;
} */

.bar {
    display: block;
    height: 70px;
    background: #000;
    /* border:1px solid red; */
}

.item {
    margin: 0px 60px;
}

.sec1 {
    margin:20px 0px
}
</style>