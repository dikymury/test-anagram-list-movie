<template>
    <div class="modal-image">
        <div class="modal-image-close" @click="closed()">
            <i class="feather icon-x"></i>
        </div>
        <img :src="Image ? Image : '/images/noimage.png'" alt="Modal Images">
    </div>
</template>
<script>
export default {
    props:{
        Image: String
    },
    methods: {
        closed(){
            this.$emit('poweroff')
        }
    },
}
</script>