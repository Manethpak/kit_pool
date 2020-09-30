<template>
    <div>
        <NavBar />
        <div class="container">
            <div class="jumbotron">
                <h1 class="display-4 text-center">Welcome to <br><span class="red">KITPOLL</span></h1>
            </div>

            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Excepturi reprehenderit explicabo fuga molestiae. Odit autem natus voluptatum eos vel iusto voluptate rerum consectetur 
                        aut exercitationem, iste, quod cumque quam. Architecto?
                    </p>
                    <router-link to="sign-up" class="btn btn-red shadow">Get Started With Us!</router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import NavBar from './view/NavBar'

export default {
    name: 'Home',
    components: {
        NavBar
    }
}
</script>


<style scoped>
h1.display-4 {
    font-weight: 500;
}

span.red {
    color: #e74c3c;
}

.jumbotron {
    background-color: white; 
}


div.card-body {
    background: #ecf0f1;
}

a.btn-red {
    background: #e74c3c;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    text-decoration: underline;
}
</style>
