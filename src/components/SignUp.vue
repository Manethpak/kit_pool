<template>

    <div>
        <p class="sign_up">Sign up</p>
        <!--signup div-->
        <div class="div_sign_up">
            <div class="div">
                <i class="fas fa-user-circle fa-2x fa-fw"></i>
                <input placeholder="Username" class="input" v-bind="username">
            </div>

            <div class="div">
                <i class="fas fa-envelope fa-2x"></i>
                <input class="input" placeholder="Email" type="email" v-bind="email">
            </div>

            <div class="div">
                <i class="fas fa-key fa-2x"></i>
                <input class="input" placeholder="password" type="password" v-bind="password">
            </div>

            <button class="submit_button" v-on:click="onSubmit">Submit</button>
            <p class="p_gg_signUp"><!-- for the sign up with GooGle--><a href="https://www.google.com/"><b><u>SignUp</u></b></a> with Google </p>
        </div>
    </div>
</template>


<script>
import PostService from '../PostService';
const postService=new PostService();
export default {
    name: 'SignUp',
    data(){
        return{
        username:"",
        email:"",
        password:""
        }
    },
    methods:{
        onSubmit(){
            const user = {
                name: this.username,
                email: this.email,
                password: this.password
            }
            postService.insertUser(user).then(()=> {this.username='',this.email="",this.password=""})

        }
    }
}
</script>

<style scoped>
.sign_up{
    text-align: center;
    font-size: 25px;
    color: black;
    font-weight:bold;
    margin-top: 3%;
}
.div_sign_up{
    background-color: #E74C3C;
    width: 400px;
    height: 400px;
    margin-top:25px;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom:5px ;

    
}
.input{
    background:white;
    size: 20px;
    width: 265px;
    height: 45px;
    border-radius: 100px;
    margin-left: 0px;
    font-size: 20px;
    font-weight: bold;
    padding-left:5px ;
    border: 0px;
    outline: none;
}
.div{
    margin-top:20px ;
    background:white;
    size: 20px;
    width: 320px;
    height: 50px;
    border-radius: 20px;
    margin-left: 40px;
    padding-top:5px ;
    padding-left: 10px;
    border-color:none;
    font-size: 20px;
    font-weight: bold;
    display: flex;
  

}
.fas {
  color :#C0392B;
}
.submit_button{
    background:#45B6CF;
    size: 20px;
    width: 140px;
    height: 50px;
    border-radius: 20px;
    margin-top: 20px;
    margin-left: 130px;
    align-self: center;
    font-weight: bold;
    font-size: 20px;
    outline: none;
    border: none;
   
}
.submit_button:hover{
    background-color: #118fac;
}
.p_gg_signUp{
    text-align: center;
    margin-top: 30px;
}
</style>