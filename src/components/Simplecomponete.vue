<template>
    <div>
        <h1>Simple Component Zone</h1>
        <h1>{{ name }}</h1>
        <v-btn @click="callMain()">CallMain</v-btn>
    </div>
</template>

<script>
import {EventBus } from '@/EventBus'
export default {
    props: ['name'],
    mounted() {
        EventBus.$on('SimCallAlert', this.SimCallAlert)
    },
    methods: {
        allMain() {
            EventBus.$emit('MainCallAlert')
        },
        SimCallAlert () {
            alert('โฮกปิ๊ป2')
        }
    }

}
</script>

<style></style>