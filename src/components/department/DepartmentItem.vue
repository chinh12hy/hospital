<template>
    <div class="department-item">
        <router-link :to="`department/${inputData.id}`"
                     class="text-normal">
            <div class="flex-row-middle">
                <Icon type="ios-folder-open"
                      size="60"/>
                <div class="pl-sm">
                    <p>{{inputData.name}}</p>
                    <p class="fs-sm text-secondary">20-08-2020 20:30</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'DepartmentItem',

        props: {
            inputData: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>