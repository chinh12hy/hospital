<template>
    <Card :padding="0" class="mt-3">
        <div class="post-container">
            <div class="post-image">
                <a href="/posts/1">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                         alt="Image"
                         style="border-radius: 3px 3px 0 0"
                         height="200">
                </a>
            </div>
            <div class="excerpt p-lg-2">
                <span class="post-category text-white bg-secondary mb-2">Politics</span>
                <h2 class="post-title">
                    <a href="/posts/1" class="text-normal">
                        The AI magically removes moving objects from videos.
                    </a>
                </h2>
                <div class="post-meta align-items-center text-left clearfix">
                    <span class="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quo sunt tempora dolor laudantium sed optio, explicabo ad
                    deleniti impedit facilis fugit recusandae! Illo, aliquid,
                    dicta beatae quia porro id est.
                </p>
                <p><a href="#">Read More</a></p>
            </div>
        </div>
    </Card>
</template>

<style lang="less">
    .post-image {
        position: relative;
        overflow: hidden;
        img {
            transition: .3s;
            height: 250px;
            object-fit: cover;
            &:hover {
                transform: scale(1.2);
                border-radius: 6px !important;
            }
        }
    }
    .post-title {
        font-size: 24px;
        margin-bottom: 30px;
        font-weight: 700;
    }
    .post-category {
        display: inline-block;
        padding: 2px 10px;
        border-radius: 4px;
        letter-spacing: .2em;
        font-weight: 700;
        font-size: .6rem;
        text-transform: uppercase;
    }
</style>

<script>
    export default {
        name: 'PostCard'
    }
</script>
