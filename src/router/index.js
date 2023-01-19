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
        component: ()=> import("@/views/NotFound.vue"),
    },

];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
