<template>
    <div>
        <h1>Simple Page</h1>
        <h2 v-if="show">{{ name }}</h2>
        <v-btn color="success" @click="show = !show">switch</v-btn>
    </div>
</template>

<script>
export default {
    data: () => ({
        name: 'Kitsapon',
        show: false,
    })
}
</script>

<style></style>