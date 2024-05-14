<template>
    <div>
        <div class="body">
            <v-row>
                <!-- <div class="d-flex justify-center mb-6"> -->
                    <v-col col="12" md="6">
                        <div class="border">
                            <v-img src="../assets/hsr.jpg" border-radius="50px" />
                        </div>
                    </v-col>
                    <v-col col="12" md="6">
                        <div class="border">
                            <h1>Honkai Star Rail</h1>
                            <h2>InStock 10</h2>
                        </div>
                        <div class="border">
                            <h2>$ 250</h2>
                            <div class="order">
                                <span class="icon d-flex align-center pa-3" style="cursor: pointer" @click="minus()">
                                    <v-icon>mdi-minus</v-icon>
                                </span>
                                <span class="number d-flex align-center pa-3">{{ testitem }}</span>
                                <span class="icon d-flex align-center pa-3" style="cursor: pointer" @click="add()">
                                    <v-icon>mdi-plus</v-icon>
                                </span>
                            </div>
                            <v-btn class="primary">Add to Cart</v-btn>
                        </div>
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

.showitem {
    display: flex;
    /* justify-content: space-around; */
    border: 1px solid red;
}

.border {
    margin: 20px;
    /* border: 1px solid red; */
}

.order {
    margin-top: 140px;
    margin-bottom: 15px;
    display: flex;
    background: #f5f5f5;
    width: 137px;
    border-radius: 5px;
}
</style>