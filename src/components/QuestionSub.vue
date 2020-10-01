<template>
    <div>
        <NavBar />
        <div class="container">
            <div class="question-type">
                <h3 class="text-center my-4">Choose your type of question</h3>
                <div class="form-check text-center p-1">
                    <input class="form-check-input" type="radio" name="binary" id="binary" value="0" v-model="questionType" checked>
                    <label class="form-check-label" for="binary"> Binary </label>
                </div>
                <div class="form-check text-center p-1">
                    <input class="form-check-input" type="radio" name="multiple" id="multiple" value="1" v-model="questionType">
                    <label class="form-check-label" for="multiple"> Multiple </label>
                </div>
            </div>

            <div class="question text-center">
                <h3 class="mt-4">Your question</h3>
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <h6 class="subtitle"> 120 character limited </h6>
                        <textarea class="form-control" id="question" rows="4" v-model="questionMsg"></textarea>
                    </div>
                </div>
            </div>

            <div class="options">
                <h3 class="mt-4 text-center">Answer options</h3> 

                <div v-if="questionType === '0'">
                    <form>
                        <div class="form-row justify-content-center">
                            <div class="col-md-4" >
                                <input type="text" class="form-control" placeholder="Answer 1">
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control" placeholder="Answer 2">
                            </div>
                        </div>
                    </form>
                </div>

                <div v-else>
                    <form>
                        <div class="form-row justify-content-center my-3">
                            <div class="col-md-3" >
                                <label class="form-check-label text-center">Numbers of option</label>
                                <input type="number" class="form-control" min="3" max="10" placeholder="Limited betwen 3 - 10"
                                v-model="options">
                            </div>
                        </div>
                        <div class="row justify-content-center"
                            v-for="value in parseInt(options)"
                            v-bind:key="value">
                            <div class="col-md-4 mb-2">
                                <input type="text" class="form-control" placeholder="Optional">
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <div class="d-flex justify-content-center my-4">
                <button type="submit" class="btn btn-outline-danger">Submit post</button>
            </div>
            
        </div>
    </div>
</template>

<script>
import NavBar from './view/NavBar'

export default {
    name: 'QuestionSub',
    data() {
        return {
            questionMsg: '',
            questionType: '',
            options: 3
        }
    },
    components: {
        NavBar
    }
}
</script>

<style scoped>
h6.subtitle {
    color: #bdc3c7;
}
</style>