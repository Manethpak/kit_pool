<template>
    <section id="login">
        <form>
            <h2>Sign in to KITPOLL</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button >Sign in</button>
            <h4>Forgot your password?</h4>
        </form>
    </section>
</template>

<script>
export default {
    name: 'SignIn'
}
</script>

<style scoped>

section{
/* 	background-color: rgba(0, 0, 0, 0.72); */
	background: #E74C3C;
	width:25%;
	min-height:25%;
	display:flex;
	flex-direction:column;
	border-radius: 25px;
	/*margin-left:auto;
	margin-right:auto;*/
}

form{
	display:flex;
	flex-direction:column;
	padding: 15px; 
}

h2{
	font-family: 'Archivo Black', sans-serif;
	color:#e0dada;
	margin-left:auto;
	margin-right:auto;
}

h4{
	font-family: 'Archivo Black', sans-serif;
	color:#e0dada;
	margin-left:auto;
	margin-right:auto;
}

input{
	height:35px;
	padding: 5px 5px;
	margin: 10px 0px;
	background-color:#e0dada;
	border:none;
	border-radius: 100px;
}

button{
	height:50px;
	position: abolute;
	padding: 5px 5px; 
	margin: 10px 0px; 
	font-weight:bold;
/* 	background-color:#be5256; */
	background: rgba(81, 224, 255, 0.81);
	border:none;
	color:#e0dada;
	cursor:pointer;
	font-size:16px;
	border-radius: 100px;
}

button:hover{
/* 	background-color:#711f1b; */
	background: rgba(39, 103, 117, 0.9);
}

.shake{
	animation-name: shake;
	animation-duration:1s;
	/*animation-fill-mode: both;*/
}

@media screen and (max-width: 780px) {
	section{
		width:90%;
	}
}
</style>