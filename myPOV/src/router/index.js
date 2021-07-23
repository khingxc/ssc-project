import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue"
import store from "@/store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/signup",
        name: "Signup",
        component: () =>
            import("../components/Signup.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/diary",
        name: "Diary",
        component: () =>
            import("../components/diary.vue"),
    },
    {
        path: "/questions",
        name: "Questions",
        component: () =>
            import("../components/questions.vue"),
    },
    {
        path: "/selfchecklist",
        name: "Selfchecklist",
        component: () =>
            import("../components/SelfChecklist.vue"),
    },
    {
        path: "/calendar",
        name: "Calendar",
        component: () =>
            import("../components/Calendar.vue"),
    },

];

const router = new VueRouter({
    routes,
});

router.beforeEach(async (to, from, next) => {

    let response = await Vue.axios.get("/api/whoami");
    await store.dispatch("setLoggedInUser", response.data);
    let isLoggedIn = store.state.loggedIn;
    console.log(isLoggedIn);
    console.log(response);
    // next({name: "Home"});
    if (to.name === 'Login' && isLoggedIn){
        return next({name: "Diary"});
    }
    if (to.name !== "Login" && !isLoggedIn){
        await next({name: "Login"});
    }
    else{
        next();
    }
});

export default router;