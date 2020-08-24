<template>
    <nav id="sidebar">
        <Menu :active-name="activeMenuName"
              theme="dark"
              width="auto"
              class="pt-lg-5"
              style="height: 100%"
              :class="menuitemClasses">
            <MenuItem name="dashboard" :to="{ name: 'Home'}">
                <Icon type="md-home" size="20"></Icon>
                <span>Trang chủ</span>
            </MenuItem>
            <MenuItem name="department"
                      :to="{ name: 'department' }">
                <Icon type="ios-folder-open" size="20"></Icon>
                <span>Phòng ban</span>
            </MenuItem>
            <MenuItem name="Posts"
                      :to="{ name: 'Posts'}">
                <Icon type="ios-person" size="20"></Icon>
                <span>Bài viết</span>
            </MenuItem>
            <MenuItem name="UsersManagement"
                      :to="{ name: 'UsersManagement'}">
                <Icon type="ios-person" size="20"></Icon>
                <span>Tài khoản</span>
            </MenuItem>
            <MenuItem name="pendingUsers"
                      :to="{ name: 'pendingUsers'}">
                <Icon type="ios-person" size="20"></Icon>
                <span>Tài khoản chờ phê duyệt</span>
            </MenuItem>
        </Menu>
    </nav>
</template>
<script>
    export default {
        name: 'Sidebar',
        data () {
            return {
                isCollapsed: false,
            }
        },
        computed: {
            activeMenuName() {
                console.log(this.$route);
                return this.$route.name
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
    }
</script>
