<template>
    <div class="pt-md-3 pb-md-3">
        <div class="container">
            <h2>Giới thiệu khóa học</h2>
            <p>Tác giả rất may mắn được tham gia xây dựng văn hoá doanh nghiệp cho một công ty vừa ngay
                từ giai đoạn bắt đầu và có sự tư vấn của chuyên gia. Sau đó cũng làm luận văn thạc sĩ để nghiên
                cứu sâu hơn về đề tài này. Nên bài giảng này sẽ giúp các bạn vừa có thể hiểu bản chất của văn hoá
                doanh nghiệp một cách dễ dàng nhất, vừa hiểu được về quy trình xây dựng văn hoá doanh nghiệp từ đầu,
                từng bước, từng bước một có hướng dẫn cụ thể.</p>
            <p>Hy vọng sẽ giúp cho các anh chị trong công tác nhân sự của mình.</p>
        </div>
        <div id="course_content"
             class="pt-lg-5">
            <div class="container">
                <h2>Nội dung khóa học</h2>
                <div class="section">
                    <div class="title-section">
                        <span> Nội dung khóa học </span>
                    </div>
                    <a v-for="(item, index) in 5"
                       :key="index"
                       href="#"
                       class="lecture hover-underline">
                        <Icon type="logo-youtube"
                              size="20"
                              class="mr-xs"/>
                        <span>bài học {{item}} (2:25)</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #course_content {
        .section {
            .title-section {
                background: #e8e8e8;
                padding: 10px 16px!important;
                font-size: 16px;
                border-bottom: 1px solid #fff !important;
                font-weight: 600;
                cursor: pointer;
            }

            .lecture {
                background: #f0f0f0;
                line-height: 2;
                padding: 10px 16px;
                font-size: 16px;
                border-bottom: 1px solid #fff;
                display: block;
                text-decoration: none;
                color: #000000db;
            }
        }
    }
</style>

<script>
    export default {
        name: 'CourseDetail'
    }
</script>