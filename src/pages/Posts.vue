<template>
    <div class="posts p-lg-3">
        <Row :gutter="20">
            <i-col v-for="(item, index) in 10"
                   :key="index"
                   :xs="24"
                   :sm="24"
                   :md="12"
                   :xl="8"
                   :xxl="6">
                <PostCard/>
            </i-col>
        </Row>
    </div>
</template>

<script>
    import PostCard from '@/components/posts/PostCard.vue';
    export default {
        name: 'Posts',

        components: {
            PostCard,
        }
    }
</script>
