<template>
    <div>
        <nav class="navbar navbar-bg">
            <div class="container">
                <span class="navbar-brand mb-1 h1">KITPOLL</span>

                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            <font-awesome-icon :icon="homeIcon" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <font-awesome-icon :icon="commentIcon" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <font-awesome-icon :icon="questionIcon" />
                        </a>
                    </li>
                </ul>

                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sign in</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sign up</a>
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
            questionIcon: faQuestionCircle
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
    padding: 0.5rem 2rem 0.5rem 2rem;
}

li.nav-item {
    margin: 0 1rem;
}
</style>
