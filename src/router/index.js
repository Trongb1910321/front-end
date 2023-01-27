import { createWebHashHistory, createRouter } from "vue-router";
import ContactCanTho from "@/views/ContactCanTho.vue";

const routes = [
    {
        path: "/",
        name: "contactcantho",
        component: ContactCanTho,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/post/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true //enable to use $route.params as props
    },
    {
        path: "/create",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"),
        props: true //enable to use $route.params as props
    },

];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
