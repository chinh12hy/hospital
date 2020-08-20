<template>
    <div class="flex-row space-between pb-sm-3">
        <h3>Danh sách phòng ban</h3>
        <Button type="primary"
                @click="openModal">
            Tạo mới phòng ban
        </Button>
    </div>
</template>

<script>
    export default {
        name: 'DepartmentHeader',

        methods: {
            openModal() {
                this.$emit('on-open-create-modal');
            }
        }
    }
</script>