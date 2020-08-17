<template>
    <div class="footer">
        <div class="container">
            <Row class="py-lg">
                <i-col :md="8" :sm="24">
                    <h4 class="text-white">SITE MAP</h4>
                    <ul>
                        <li>Home</li>
                        <li>Khóa học</li>
                        <li>Tính năng</li>
                        <li>Bảng giá</li>
                    </ul>
                </i-col>
                <i-col :md="8" :sm="24">
                    <h4 class="text-white">Khách hàng</h4>
                    <ul>
                        <li>Khách hàng 1</li>
                        <li>Khách hàng 2</li>
                        <li>Khách hàng 3</li>
                        <li>Khách hàng 4</li>
                        <li>Khách hàng 5</li>
                    </ul>
                </i-col>
                <i-col :md="8" :sm="24">
                    <h4 class="text-white">Liên hệ</h4>
                    <ul>
                        <li>
                            <div class="flex-row-middle">
                                <Icon type="ios-mail"  class="mr-sm" size="20"/>
                                <a href="mailto:abc@gmail.com"> abc@gmail.com</a>
                            </div>
                        </li>
                        <li>
                            <div class="flex-row-middle">
                                <Icon type="ios-map" class="mr-sm" size="20"/>
                                <span>Số 1 đường A phố B </span>
                            </div>
                        </li>
                        <li>
                            <div class="flex-row-middle">
                                <Icon type="ios-call"  class="mr-sm" size="20"/>
                                <span>012346789</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex-row">
                                <Icon type="logo-facebook"
                                      class="mr-sm icon-fb"
                                      size="20"/>
                                <Icon type="logo-youtube"
                                      class="icon-yt"
                                      size="20"/>
                            </div>
                        </li>
                    </ul>
                </i-col>
            </Row>
        </div>
    </div>
</template>

<style lang="less">
    .footer {
        background: #070617;
        padding: 30px 0;
        .icon-fb {
            &:hover {
                color: #3578E5;
            }
        }
        .icon-yt {
            &:hover {
                color: #ff0000;
            }
        }
        li {
            color: #999999;
            font-size: 14px;
            font-family: inherit;
            font-weight: 600;
            padding: 5px 0 5px 0;
            cursor: pointer;
            transition: .2s;
            -webkit-transition: .2s;
            -moz-transition: .2s;
            &:hover {
                color: #ffffff;
                transition: .1s;
                -webkit-transition: .1s;
                -moz-transition: .1s;
            }
        }
    }
</style>

<script>
    export default {
        name: 'Footer'
    }
</script>