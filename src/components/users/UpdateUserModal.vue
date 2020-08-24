<template>
    <Modal v-model="isOpen"
           title="Cập nhật thông tin tài khoản"
           footer-hide
           @on-visible-change="visibleChange"
           class-name="custom-modal">
        <div class="p-lg">
            <Form ref="formUpdate"
                  label-position="top"
                  :model="formUpdate"
                  :rules="ruleInline">
                <FormItem label="Tên" prop="name">
                    <Input type="text"
                           v-model="formUpdate.name"
                           placeholder="Nhâp tên">
                        <Icon type="ios-person-outline"
                              slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem label="Số điện thoại" prop="phone_number">
                    <Input type="text"
                           v-model="formUpdate.phone_number"
                           placeholder="Nhâp số điện thoại">
                        <Icon type="ios-person-outline"
                              slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem label="Chuyên nhành" prop="specialized">
                    <Input type="text"
                           v-model="formUpdate.specialized"
                           placeholder="Nhập chuyên ngành">
                        <Icon type="ios-lock-outline"
                              slot="prepend"></Icon>
                    </Input>
                </FormItem>

                <Switch v-model="formUpdate.status"
                        true-color="#13ce66"
                        false-color="#ff4949"/>
                <span class="pl-sm"> {{ formUpdate.status ? 'Hoạt động' : 'Bị khóa '}} </span>
            </Form>
        </div>
        <div class="footer">
            <div class="flex-row-right">
                <Button @click="this.close">Đóng</Button>
                <Button type="primary"
                        class="ml-2"
                        @click="this.handleSubmit">
                    Cập nhật
                </Button>
            </div>
        </div>
    </Modal>
</template>

<script>
    export default {
        name: 'UpdateUserModal',

        props: {
            user: {
                type: Object,
                default() {
                    return {}
                }
            }
        },

        data() {
            return {
                isOpen: false,
                formUpdate: {
                    phone_number: '',
                    specialized: ''
                },
                ruleInline: {
                    phone_number: [
                        { message: 'Vui lòng nhập số điện thoại', trigger: 'blur' }
                    ],
                    specialized: [
                        { message: 'Vui lòng nhập email', trigger: 'blur' },
                    ]
                }
            }
        },

        methods: {
            visibleChange(status) {
                if (status) {
                    this.formUpdate = this.$lodash.clone(this.user);
                }
            },

            open() {
                this.isOpen = true;
            },

            close() {
                this.isOpen = false;
            },

            handleSubmit() {
                this.$refs.formUpdate.validate((valid) => {
                    if (valid) {
                        this.$emit('on-update', this.formUpdate);
                        this.close();
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>
