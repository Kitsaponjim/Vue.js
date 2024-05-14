<template>
    <div>
        <div class="body">
            <h1>Your Cart</h1>
            <v-row>
                <v-col cols="12" md="7">
                    <v-card class="list"  style="padding: 15px">
                        <div class="sec1">
                            <div>
                                <v-img src="../assets/hsr.jpg" width="200px" style="border-radius: 5px;"></v-img>
                            </div>
                            <div>
                                <v-card-title>
                                    Honkai Star Rail
                                </v-card-title>
                                <v-card-text style="font-size: 35px; font-weight: 700; margin-top: 70px;">
                                    <span>฿ 250</span>
                                </v-card-text>
                            </div>
                        </div>
                        <div class="sec2">
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn class="error"><v-icon>mdi-delete</v-icon></v-btn>
                            </v-card-actions>
                            <div class="order">
                                <span class="icon d-flex align-center pa-3" style="cursor: pointer" @click="minus()">
                                    <v-icon>mdi-minus</v-icon>
                                </span>
                                <span class="number d-flex align-center pa-3">{{ testitem }}</span>
                                <span class="icon d-flex align-center pa-3" style="cursor: pointer" @click="add()">
                                    <v-icon>mdi-plus</v-icon>
                                </span>
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" md="5">
                    <v-card width="400px" style="padding: 15px">
                        <v-card-title>
                            Order Summary
                        </v-card-title>
                        <div class="total"  >
                            <v-card-text style="font-size: 30px;">
                                Total
                            </v-card-text>
                            <v-card-text style="font-size: 35px; font-weight: 700;">
                                $ 250
                            </v-card-text>
                        </div>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn class="primary" width="">Go to check out <v-icon>mdi-arrow-right</v-icon></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        testitem: 1,
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
        add() {
            this.testitem++
        },
        minus() {
            if (this.testitem <= 0) {
                return this.testitem = 0
            }
            this.testitem--
        },
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
    margin: 100px 120px;
}

.order {
    display: flex;
    background: #f5f5f5;
    width: 137px;
    border-radius: 5px;
    margin-top: 85px;
    margin-right: 15px;
}

.list {
    display: flex;
    justify-content: space-between;
}

.sec1 {
    display: flex;
}

.total {
    display: flex;
    justify-content: space-around;
}
</style>