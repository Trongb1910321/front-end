<template>
    <Form
        @submit="submitContact"
        :validation-schema="contactFormSchema"
    >
        <div class="form-group">
            <label for="title">Nhãn</label>
            <Field
                name="title"
                type="text"
                class="form-control"
                v-model="contactLocal.title"
            />
            <ErrorMessage name="title" class="error-feedback"/>
        </div>
        <div class="form-group">
            <label for="category">Danh mục</label>
            <Field
                name="category"
                type="text"
                class="form-control"
                v-model="contactLocal.category"
            />
            <ErrorMessage name="category" class="error-feedback"/>
        </div>
        <div class="form-group">
            <label for="content">Nội dung</label>
            <Field
                name="content"
                type="text"
                class="form-control"
                v-model="contactLocal.content"
            />
            <ErrorMessage name="content" class="error-feedback"/>
        </div>
        <div class="form-group">
            <label for="image1">Hình ảnh</label>
            <Field
                name="image1"
                type="text"
                class="form-control"
                v-model="contactLocal.image1"
            />
            <ErrorMessage name="image1" class="error-feedback"/>
        </div>
        <!-- <div class="form-group group-check" >
            <label for="favorite" class="form-check-label my-2">
                <input
                id="favorite"
                name="favorite"
                type="checkbox"
                class="form-check-input mx-1"
                v-model="contactLocal.favorite"
                />
                 <strong>Liên hệ yêu thích</strong>
            </label>
        </div>  -->
        <div class="form-group">
            <button class="btn btn-sm btn-primary">
                <i class="fa-solid fa-floppy-disk"></i>  Lưu
            </button>

            <button
                v-if="contactLocal._id"
                type="button"
                class="m-2 btn btn-sm btn-danger"
                @click="deleteContact"
            >
            <i class="fa-solid fa-trash-can"></i> Xóa
            </button>
        </div>
    </Form>
</template>

<script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";

    export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    }, 
    emits: ["submit:contact", "delete:contact"],
    props: {
        contact: {type: Object, require: true}
    },
    data(){
        const contactFormSchema = yup.object().shape({
            title: yup
                .string()
                .required("Tên phải có giá trị."),
               
            category: yup
                .string(),
                
                
            content: yup
                .string(),
                
            image1: yup
                .string()
              
                
        });
        return {
            contactLocal: this.contact,
            contactFormSchema,
        }
    },

    methods: {
        submitContact(){
            this.$emit("submit:contact", this.contactLocal);
        },
        deleteContact(){
            this.$emit("delete:contact", this.contactLocal.id);
        }
    }
   }
</script>

<style scoped>
    @import "@/assets/form.css";
</style>