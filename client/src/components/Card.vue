<template>
  <div >
     <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src=movie.poster class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body :title="movie.title">
                <b-card-text>
                    <b-btn ><router-link :to="'/movie/' + movie.id" :movie="movie">detail</router-link></b-btn>
                </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
    props:['movie']
}
</script>

<style>

</style>