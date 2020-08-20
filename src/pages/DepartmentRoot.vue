<template>
    <div class="p-md-3">
        <div class="grid-container">
            <div v-for="(item, index) in 10"
                 :key="index"
                 class="department-item" >
                <DepartmentItem/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 20px;
        .department-item {
            padding: 7px 10px;
            border: 1px solid #2c3e50;
            border-radius: 6px;
        }
    }
</style>

<script>
    import DepartmentItem from '@/components/department/DepartmentDetail.vue';
    export default {
        name: 'DepartmentRoot',

        components: {
            DepartmentItem,
        }
    }
</script>