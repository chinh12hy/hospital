<template>
    <div class="p-3">
        <DepartmentHeader @on-open-create-modal="handleOpenModal"/>
        <Row :gutter="20">
            <i-col v-for="(item, index) in departments"
                   :key="index"
                   :sm="24"
                   :md="12"
                   :xl="8"
                   :xxl="6">
                <div style="margin-bottom: 15px">
                    <DepartmentItem :inputData="item"/>
                </div>
            </i-col>
        </Row>
        <CreateDepartmentModal ref="modal"
                               @on-create="handleCreateDepartment"/>
    </div>
</template>

<style lang="less">
    .department-item {
        padding: 7px 10px;
        border: 1px solid #2c3e50;
        border-radius: 6px;
        transition: .2s;
        a {
            &:hover {
                text-decoration: none;
            }
        }
        &:hover {
            background-color: #ebf7ff;
        }
    }
</style>

<script>
    import DepartmentItem from '@/components/department/DepartmentItem.vue';
    import DepartmentHeader from '@/components/department/DepartmentHeader.vue';
    import CreateDepartmentModal from '@/components/department/CreateDepartmentModal.vue';
    export default {
        name: 'Department',

        components: {
            DepartmentItem,
            DepartmentHeader,
            CreateDepartmentModal,
        },

        data() {
            return {
                departments: [
                    {
                        id: 1,
                        name: 'Phòng ban 1'
                    },
                    {
                        id: 2,
                        name: 'Phòng ban 2'
                    },
                    {
                        id: 3,
                        name: 'Phòng ban 3'
                    },
                    {
                        id: 4,
                        name: 'Phòng ban 4'
                    },
                    {
                        id: 5,
                        name: 'Phòng ban 5'
                    },
                    {
                        id: 6,
                        name: 'Phòng ban 6'
                    }
                ]
            }
        },

        methods: {
            handleOpenModal() {
                this.$refs.modal.open();
            },

            handleCreateDepartment(data) {
                this.departments.push(data);
            },
        }
    }
</script>
