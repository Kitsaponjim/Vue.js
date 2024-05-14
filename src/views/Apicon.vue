<template>
    <div>
        <v-btn @click="getData()">Get data</v-btn>
        <div>
            <v-row>
                <v-col cole="12" md="4">
                    <v-card v-for="(item, index) in apiData" :key="index">
                        {{ item.product_name }}
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        apiData: [],
    }),
    methods: {
        getData() {
            this.axios.get('http://localhost:3000/api/v1/products').then((res) => {
                console.log(res.data.data)
                this.apiData = res.data.data
            })
        }
    }
}
</script>

<style></style>