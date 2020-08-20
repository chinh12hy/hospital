<template>
    <div>
        <div v-if="showMessage"
             class="message-uploading">
            Đang tải lên tệp, vui lòng chờ...!
            <button @click="showMessage=false">
                <span class="el-icon-close"></span>
            </button>
        </div>
        <input type="file"
               accept="image/x-png,image/gif,image/jpeg"
               :id="singleFileId"
               @change="f_OnSingleFileChange">

        <input type="file"
               accept="image/x-png,image/gif,image/jpeg"
               :id="multipleFileId"
               multiple
               @change="f_OnMultipleFileChange">
    </div>
</template>

<script>
    export default {
        name: 'UploadFile',
        data() {
            return {
                singleFileId: `file-id-${new Date().getTime()}`,
                multipleFileId: `multiple-file-id-${new Date().getTime()}`,
                callback: null,
                fileStore: null,
                fileStoreId: null,
                working: false,
                showMessage: false
            }
        },

        methods: {
            async f_OnSingleFileChange(e) {
                this.fileStore = e.target.files || e.dataTransfer.files

                if (this.fileStore.length === 0) {
                    this.working = false
                    return 0
                }

                const formData = new FormData()
                formData.append('file', this.fileStore[0]);
                this.$services.auth.login(formData).then(resp => {
                    console.log(resp);
                }, error => {
                    console.log(error);
                })
                console.log('formData: ', this.fileStore);

                this.showMessage = true
            },

            async f_OnMultipleFileChange(e) {
                const fileStore = e.target.files || e.dataTransfer.files

                if (fileStore.length === 0) {
                    this.working = false
                    return 0
                }
                const formData = new FormData();
                console.log('fileStore: ', fileStore);
                Object.keys(fileStore).forEach(key => formData.append('files', fileStore[key]))

                this.showMessage = true
            }
        },
    }
</script>

<style lang="less">
    @keyframes movieUp {
        0% {
            bottom: 0;
        }
        100% {
            bottom: 20px;
        }
    }

    .message-uploading {
        -webkit-animation-name: movieUp;
        -moz-animation-name: movieUp;
        -o-animation-name: movieUp;
        animation-name: movieUp;
        -webkit-animation-duration: 300ms;
        -moz-animation-duration: 300ms;
        -o-animation-duration: 300ms;
        animation-duration: 300ms;
        -webkit-transition: all .3s ease-in-out;
        -moz-transition: all .3s ease-in-out;
        -ms-transition: all .3s ease-in-out;
        -o-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        position: fixed;
        bottom: 20px;
        z-index: 9999;
        right: 10px;
        background-color: orangered;
        color: white;
        padding: 8px;
        width: 300px;
        height: 46px;
        box-shadow: 3px 5px 8px rgba(45, 45, 48, .2);

        button {
            right: 5px;
            position: absolute;
            border: 0;
            width: 26px;
            height: 26px;
            border-radius: 50vh;
            background: rgba(45, 45, 48, .03);
            outline: 0;
            -webkit-transition: all .3s ease-in-out;
            -moz-transition: all .3s ease-in-out;
            -ms-transition: all .3s ease-in-out;
            -o-transition: all .3s ease-in-out;
            transition: all .3s ease-in-out;

            &:hover {
                background-color: rgba(45, 45, 48, .3)
            }
        }
    }
</style>
