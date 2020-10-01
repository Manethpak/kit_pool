<template>
    <div>
        <nav class="navbar navbar-bg">
            <div class="container">
                <span class="navbar-brand mb-1 h1">KITPOLL</span>

                <ul class="nav nav-pills nav-fill ">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link"
                        v-on:click="onPage = 'home'"
                        v-bind:class="[onPage == 'home'? activePage : '']">
                            <font-awesome-icon :icon="homeIcon" />
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/question-submission" class="nav-link"
                        v-on:click="onPage = 'sub'"
                        v-bind:class="[onPage == 'sub'? activePage : '']">
                            <font-awesome-icon :icon="commentIcon" />
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/help" class="nav-link" 
                        v-on:click="onPage = 'help'"
                        v-bind:class="[onPage == 'help'? activePage : '']">
                            <font-awesome-icon :icon="questionIcon" />
                        </router-link>
                    </li>
                </ul>

                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <router-link to="sign-in" class="nav-link" >Sign in</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="sign-up" class="nav-link" >Sign up</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'NavBar',
    data() {
        return {
            homeIcon: faHome,
            commentIcon: faCommentAlt,
            questionIcon: faQuestionCircle,
            onPage: '',
            activePage: 'active'
        }
    },
    components: {
        FontAwesomeIcon
    }
}
</script>

<style scoped>

nav.navbar-bg{
    background-color: #E74C3C;
}

.navbar-brand{
    font-size: 26px;
    font-weight: 700;
}

.nav-link{
    color: black;
    font-weight: 500;
}

.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    background:#c0392b;
}

</style>
