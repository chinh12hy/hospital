<template>
    <Modal v-model="isOpen"
           footer-hide
           :title="title">
        <p class="my-2"> {{ text}} ?</p>
        <div class="flex-row-right">
            <Button @click="close"
                    class="mr-2"> Hủy </Button>
            <Button type="primary"
                    @click="handleYes">
                Xác nhận
            </Button>
        </div>
    </Modal>
</template>

<script>
    export default {
        name: 'ConfirmModal',

        props: {
            title: {
                type: String,
                default: '',
            },

            text: {
                type: String,
                default: '',
            }
        },

        data() {
            return {
                isOpen: false,
            }
        },

        methods: {
            open() {
                this.isOpen = true;
            },

            close() {
                this.isOpen = false;
            },

            handleYes() {
                this.$emit('on-ok');
                this.close();
            }
        }
    }
</script>
