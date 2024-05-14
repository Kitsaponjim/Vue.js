<template>
  <div>
    <div class="body">
      <h1>Shop</h1>
      <v-btn color="primary" @click="newItem()">New Item</v-btn>
      <v-row>
        <v-col cole="12" md="3" v-for="(item, index) in apiData" :key="index">
          <v-card max width="350">
            <v-img src="../assets/cat.jpg" />
            <v-card-title primary-title>
              <span>{{ item.product_name }}</span>
            </v-card-title>
            <v-card-actions>
              <v-btn color="info" @click="editItem(item)">edit</v-btn>
              <v-btn color="error" @click="saveDeletedata(item._id)">delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog v-model="dialogedit" max-width="500px">
        <v-card>
          <v-card-title primary-title>
            {{ savemode }}
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field name="product_name" label="ชื่อสินค้า" id="product_name"
                  v-model="postdata.product_name"></v-text-field>
                <v-text-field name="amount" label="จำนวนสินค้าที่มี" id="amount"
                  v-model="postdata.amount"></v-text-field>
                <v-text-field name="price" label="ราคา" id="price" v-model="postdata.price"></v-text-field>
                <v-text-field name="Type" label="ประเภทสินค้า" id="Type" v-model="postdata.Type"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="error" @click="closeData()">cancel</v-btn>
            <v-btn text color="info" @click="saveSelect()">save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
  margin: 100px 120px;
}
</style>