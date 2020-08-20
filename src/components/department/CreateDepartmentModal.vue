<template>
    <Modal v-model="isOpen"
           title="Tạo mới phòng ban"
           footer-hide>
        <div>
            <Input v-model="departmentName"
                   placeholder="Nhập tên phòng ban" />
            <div class="flex-row-right py-sm-3">
                <Button type="primary"
                        @click="submit">
                    Tạo mới
                </Button>
            </div>
        </div>
    </Modal>
</template>

<script>
    export default {
        name: 'CreateDepartmentModal',

        data() {
            return {
                isOpen: false,
                departmentName: '',
            }
        },

        methods: {
            open() {
                this.isOpen = true;
            },

            close() {
                this.isOpen = false;
            },

            submit() {
                this.$emit('on-create', {
                    id: 12,
                    name: this.departmentName
                });
                this.close();
            }
        }
    }
</script>