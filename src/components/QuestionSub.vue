<template>
    <div>
        <NavBar />
        <div class="container">
            <div class="question-type">
                <h3 class="text-center my-4">Choose your type of question</h3>
                <div class="form-check text-center p-1">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                <label class="form-check-label" for="exampleRadios1"> Binary </label>
                </div>
                <div class="form-check text-center p-1">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                <label class="form-check-label" for="exampleRadios2"> Multiple </label>
                </div>
            </div>
            <div class="question">
                <h3 class="text-center my-4">Your question</h3>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from './view/NavBar'

export default {
    name: 'QuestionSub',
    components: {
        NavBar
    }
}
</script>

<style scoped>

</style>