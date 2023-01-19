<script>
    export default {
        props: {
            contact: { type: Object, requied: true },
        },
    };
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ contact.title }}
        </div>
        <div class="p-1">
            <strong>E-mail:</strong>
            {{ contact.category }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ contact.content }}
        </div>
        <div class="p-1">
            <strong>Điện thoại:</strong>
            <img :src="`/${contact.image}`" alt="">
            <!-- <img src="contact.image" alt=""> -->
            <!-- {{ contact.image }} -->
        </div>
       
        <!-- <div class="p-1" >
            <strong >Liên hệ yêu thích: &nbsp;</strong>
            <i v-if="contact.favorite" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div> -->
    </div>
</template>
