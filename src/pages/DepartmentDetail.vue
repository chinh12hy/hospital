<template>
    <div class="p-3">
        <DepartmentHeader/>
        <Row :gutter="20">
            <i-col :xs="24"
                   :sm="24"
                   :md="12"
                   :xl="8"
                   :xxl="6">
                <Card class="card-user"
                      :padding="0">
                    <div class="card-avatar">
                        <img src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                             alt="">
                    </div>
                    <div class="card-content">
                        <h4>Phạm Đức Chính</h4>
                        <p>Trưởng phòng nhân sự</p>
                        <p>Số điện thoại: 0958547448</p>
                        <p>email: nhansu@gmail.com</p>
                    </div>
                </Card>
            </i-col>
        </Row>
    </div>
</template>

<style lang="less">
    .card-user {
        text-align: center;
        padding: 30px 0;
        &.ivu-card {
            border-radius: 15px;
        }
        .card-avatar {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 0;
            img {
                height: 100px;
                width: 100px;
                border-radius: 50%;
                object-fit: cover;
            }
        }
        .card-content {
            padding: 0 0 15px 0;
        }
    }
</style>

<script>
    import DepartmentHeader from '@/components/department/DepartmentHeader.vue';

    export default {
        name: 'DepartmentDetail',

        components: {
            DepartmentHeader,
        },

        data() {
            return {
                subDepartments: [
                    {
                        id: 10,
                        name: 'Sub phòng ban 1'
                    },
                    {
                        id: 12,
                        name: 'Sub phòng ban 2'
                    },
                    {
                        id: 13,
                        name: 'Sub phòng ban 3'
                    },
                    {
                        id: 14,
                        name: 'Sub phòng ban 4'
                    },
                    {
                        id: 15,
                        name: 'Sub phòng ban 5'
                    },
                    {
                        id: 16,
                        name: 'Sub phòng ban 6'
                    }
                ]
            }
        }
    }
</script>
