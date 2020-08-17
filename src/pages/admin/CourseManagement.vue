<template>
    <div>
        quản lý khóa học
        <Button type="primary"
                @click="renderEditor"> Render </Button>
        <ckeditor :editor="editor"
                  v-model="editorData"
                  :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    // import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/';
    export default {
        name: 'CourseManagement',

        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    extraPlugins: [this.uploader],
                    // toolbar: [ 'bold', 'italic', '|', 'link' ]
                }
            }
        },

        methods: {
            renderEditor() {
                console.log('editorData: ', this.editorData);
            },
            uploader(editor)
            {
                editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
                    console.log('loader: ', loader);
                    // return new UploadAdapter( loader );
                };
            },
        }
    }
</script>