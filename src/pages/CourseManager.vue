<template>
    <div class="container">
        <div class="p-lg row">
            <div v-for="(item, index) in 10"
                 :key="index"
                 class="col-md-4 mb-xl">
                <CourseCard/>
            </div>
        </div>
    </div>
</template>

<script>
    import CourseCard from '@/components/Course/CourseCard.vue'
    export default {
        name: 'CourseManager',

        components: {
            CourseCard,
        },
    }
</script>