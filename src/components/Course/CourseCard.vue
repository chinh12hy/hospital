<template>
    <Card to="/course-manager/1"
          :padding="0"
          class="text-normal">
        <img src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
             alt=""
             class="card-img-top" style="height: 200px">
        <div class="card-body">
            <h5 class="card-title">Khóa học 1</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
        </div>
        <div class="card-footer flex-row-middle">
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            <span class="semi-bold pl-sm"> Chính Phạm Đức</span>
        </div>
    </Card>
</template>

<script>
    export default {
        name: 'CourseCard'
    }
</script>