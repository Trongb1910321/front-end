<script>
export default {
    props: {
        contacts: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
};
</script>

<template>
    <!-- <ul class="list-group">
        <li
            class="list-group-item"
            v-for="(contact, index) in contacts"
            :key="contact._id"
            :class="{ active: index === activeIndex}"
            @click="updateActiveIndex(index)"
        >
            {{ contact.title }}

        </li>
    </ul> -->
    <div class="row">
            <div 
                class="col-2 mr-2 mt-2" style="background-color:yellow; "
                v-for="(contact, index) in contacts" :key="contact._id"
                :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
                {{ contact.title }}

            </div>
    </div>
</template>