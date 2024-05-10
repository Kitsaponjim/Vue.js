<template>
    <div>
        <div class="frame">
            <marquee>
                <h1>แนะนำตัวเอง</h1>
            </marquee>
            <p>ชื่อ: {{ name }}</p> 
            <p>ชื่อเล่น: {{ nickname }}</p>
            <p>อายุ: {{ age }}</p>
            <p>จบจากมหาลัย: {{ university }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        name: 'นายกิจศภณ  สุทโธ',
        nickname: 'จิม',
        age: 22,
        university: 'มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่'
    })
}
</script>

<style>
p {
    font-size: 26px;
    font-style: italic;
}

.frame {
    margin:10px;
    padding: 10px;
    border: 2px solid #000;
}

.frame marquee{
    margin:10px;
    padding: 10px;
    border: 2px solid #000;
}

</style>