<template>
    <div class="p-3">
        <Table ref="currentRowTable"
               :columns="headerTable"
               :data="dataTable">
            <template slot-scope="{ index }" slot="stt">
                {{ index + 1 }}
            </template>
            <template slot-scope="{ row }" slot="name">
                <div class="flex-row-middle">
                    <div class="avatar-user">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                             alt="">
                    </div>
                    <div class="flex-column pl-sm">
                        <span class="semi-bold ">
                            {{ row.name }}
                        </span>
                        <span class="fs-sm text-secondary">
                            chinh12hy@gmail.com
                        </span>
                    </div>
                </div>
            </template>

            <template slot-scope="{ row }" slot="specialized">
                {{ row.specialized }}
            </template>

            <template slot-scope="{ row }" slot="phone_number">
                {{ row.phone_number }}
            </template>

            <template slot-scope="{ }" slot="action">
                <div class="flex-row-middle center">
                    <div class="wrap-icon setting bg-primary border-radius pointer mr-md">
                        <Icon type="md-checkmark"
                              class="text-white"
                              size="13"/>
                    </div>
                    <div class="wrap-icon delete bg-danger border-radius pointer">
                        <Icon type="md-close"
                              class="text-white"
                              size="13" />
                    </div>
                </div>
            </template>
        </Table>
        <div class="flex-row-right py-sm">
            <Page :total="100"/>
        </div>
    </div>
</template>

<style scoped lang="less">
    .avatar-user {
        height: 50px;
        width: 50px;
        padding: 5px;
        img {
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }
    .wrap-icon {
        position: relative;
        width: 1.5em;
        height: 1.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
        transition: .2s;
        &.setting {
            &:hover {
                opacity: 1;
            }
        }
        &.delete {
            &:hover {
                opacity: 1;
            }
        }
    }
</style>

<script>
    export default {
        name: 'PendingUsers',

        data() {
            return {
                headerTable: [
                    {
                        title: '#',
                        slot: 'stt',
                        width: 55
                    },
                    {
                        title: 'Họ tên',
                        slot: 'name',
                        minWidth: 250,
                    },
                    {
                        title: 'Chuyên ngành',
                        slot: 'specialized',
                        minWidth: 150
                    },
                    {
                        title: 'Số điện thoại',
                        slot: 'phone_number',
                        minWidth: 150
                    },
                    {
                        title: 'Xác nhận phê duyệt',
                        slot: 'action',
                        width: 200,
                        align: 'center',
                        fixed: 'right'
                    }
                ],
                dataTable: [
                    {
                        id: 1,
                        name: 'Phạm Đức Chính',
                        status: false,
                        specialized: 'Bác sĩ phụ khoa',
                        phone_number: '0975852114'
                    },
                    {
                        id: 2,
                        name: 'Nguyễn trọng đạt',
                        status: true,
                        specialized: 'Bác sĩ nhi',
                        phone_number: '0975852114'
                    },
                    {
                        id: 3,
                        name: 'Nguyễn văn hoàng',
                        status: true,
                        specialized: 'Bác sĩ phụ khoa',
                        phone_number: '0975852114'
                    },
                    {
                        id: 4,
                        name: 'Nguyễn văn ngữ',
                        status: true,
                        specialized: 'Bác sĩ nhi',
                        phone_number: '0975852114'
                    },
                    {
                        id: 5,
                        name: 'Trần thị bưởi',
                        status: false,
                        specialized: 'Bác sĩ phụ khoa',
                        phone_number: '0975852114'
                    },
                    {
                        id: 6,
                        name: 'Lê Văn Luyện',
                        status: true,
                        specialized: 'Bác sĩ nhi',
                        phone_number: '0975852114'
                    }
                ],
            }
        },
    }
</script>
