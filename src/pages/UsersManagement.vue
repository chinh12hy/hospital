<template>
    <div class="p-3">
        <div class="flex-row space-between pb-3">
            <h3>Danh sách tài khoản</h3>
            <Button type="primary"
                    @click="openCreateModal">
                Tạo mới tài khoản
            </Button>
        </div>
<!--        <input type="file" v-on:change="onImageChange" class="form-control">-->
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

            <template slot-scope="{ row }" slot="status">
                <Tag v-if="row.status"
                     color="success">
                    Hoạt động
                </Tag>
                <Tag v-else
                     color="error">
                    Bị khóa
                </Tag>
            </template>

            <template slot-scope="{ row }" slot="action">
                <div class="flex-row-middle center">
                    <div class="wrap-icon setting bg-primary border-radius pointer mr-md"
                         @click="openUpdateModal(row)">
                        <Icon type="md-settings"
                              class="text-white"
                              size="13"/>
                    </div>
                    <div class="wrap-icon delete bg-danger border-radius pointer"
                         @click="openConfirmModal(row)">
                        <Icon type="md-trash"
                              class="text-white"
                              size="13" />
                    </div>
                </div>
            </template>
        </Table>
        <CreateUserModal ref="createModal"
                         @on-create="handleCreate"/>
        <UpdateUserModal ref="updateModal"
                         :user="selectedUser"
                         @on-update="handleUpdate"/>
        <ConfirmModal ref="confirmModal"
                      title="Xác nhận xóa tài khoản"
                      text="Bạn có chắc chắn muốn thực hiện hành động này"
                      @on-ok="handleDeleteUser"/>
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
    import ConfirmModal from '@/components/modal/ConfirmModal.vue';
    import UpdateUserModal from '@/components/users/UpdateUserModal.vue';
    import CreateUserModal from '@/components/users/CreateUserModal.vue';
    export default {
        name: 'UsersManagement',

        components: {
            ConfirmModal,
            UpdateUserModal,
            CreateUserModal,
        },

        created() {
            let formData = new FormData()
            formData.append('file', 'files[0]')
            formData.append('banner_id', '12');
            console.log('formData :', formData);
        },

        data() {
            return {
                selectedUser: null,
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
                        title: 'Trạng thái',
                        slot: 'status',
                        minWidth: 130
                    },
                    {
                        title: ' ',
                        slot: 'action',
                        width: 100,
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
                image: '',
            }
        },

        methods: {
            onImageChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },

            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },

            openCreateModal() {
                this.$refs.createModal.open();
            },

            openUpdateModal(row) {
                this.selectedUser = row;
                this.$refs.updateModal.open();
            },

            openConfirmModal(row) {
                console.log(row);
                this.selectedUser = row;
                this.$refs.confirmModal.open();
            },

            handleCreate(data) {
                this.dataTable.unshift(data);
            },

            handleUpdate(data) {
                this.dataTable = this.dataTable.map(o => {
                    return o.id === data.id ? {
                        ...data,
                    } : o
                })
            },

            handleDeleteUser() {
                this.dataTable = this.dataTable.filter(o => {
                    return o.id !== this.selectedUser.id
                });
                this.selectedUser = null;
                this.$Message.success('Xóa thành công');
            },
        }
    }
</script>
