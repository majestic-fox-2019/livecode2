<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="add" tabindex="-1" role="dialog" aria-labelledby="addTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="addRate" @submit.prevent="$store.dispatch('addRate')">
                        <div class="form-group">
                            <label for="reviewer">Reviewer</label>
                            <input type="text" v-model="reviewer" class="form-control" id="reviewer"  placeholder="Enter your name">
                        </div>
                        <div class="form-group">
                            <label for="ratting">Rating</label>
                            <input type="number" v-model="rating" class="form-control" id="ratting" placeholder="Enter rating">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" @click="closeModal" form="addRate" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="editTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="updateMovie" @submit.prevent="$store.dispatch('updateMovie')">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" v-model="title" class="form-control" id="title" placeholder="Enter title">
                        </div>
                        <div class="form-group">
                            <label for="year">Year</label>
                            <input type="text" v-model="year" class="form-control" id="year" placeholder="Enter Year">
                        </div>
                        <div class="form-group">
                            <label for="type">Example select</label>
                            <select class="form-control" v-model="type" id="type">
                            <option value="movie">movie</option>
                            <option class="series">series</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="poster">Poster</label>
                            <input type="text" v-model="poster" class="form-control" id="poster" placeholder="Enter Poster">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" form="updateMovie" @click="closeModal2">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/">Home</router-link>
        </nav>
        <div class="div">
            <div class="image" :style="`background-image: url('${$store.state.selectedMovie.poster}')`">
                <button class="btn btn-warning edit" data-toggle="modal" data-target="#edit">Edit</button>
            </div>
            <div class="rate">
                <h2>All Review</h2>
                <button class="btn btn-outline-primary kanan margin" data-toggle="modal" data-target="#add">Add</button>
                <br>
                <br>
                <br>
                <div class="card2" v-for="(rate, i) in $store.state.selectedMovie.Rates" :key="rate.id">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <ul class="inline">
                                <li><span>{{rate.reviewer}}</span></li>
                                <li><span>{{rate.point}}</span></li>
                                <li class="kanan">
                                    <button class="btn btn-outline-danger" @click="$store.dispatch('deleteRate', {id: rate.id, i: i})">delete</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Rate", 
    methods: {
        closeModal() {
            $('#add').modal('toggle');
        },
        closeModal2() {
            $('#edit').modal('toggle');
        }
    },
    computed: {
        reviewer: {
            get() {
                return this.$store.state.reviewer;
            }, 
            set(val) {
                this.$store.commit("updateReviewer", val);
            }
        }, 
        rating: {
            get() {
                return this.$store.state.rating;
            }, 
            set(val) {
                this.$store.commit("updateRating", val);
            }
        },

        title: {
            get() {
                return this.$store.state.title;
            }, 
            set(val) {
                this.$store.commit("updateTitle", val);
            }
        },
        year: {
            get() {
                return this.$store.state.year;
            }, 
            set(val) {
                this.$store.commit("updateYear", val);
            }
        },
        type: {
            get() {
                return this.$store.state.type;
            }, 
            set(val) {
                this.$store.commit("updateType", val);
            }
        },
        poster: {
            get() {
                return this.$store.state.poster;
            }, 
            set(val) {
                this.$store.commit("updatePoster", val);
            }
        },
        imdb: {
            get() {
                return this.$store.state.imdb;
            }, 
            set(val) {
                this.$store.commit("updateImdb", val);
            }
        },
    }
}
</script>

<style lang="scss">

.div {
    position: relative;
    width: 90%;
    height: auto;
    left: 50%;
    transform: translateX(-50%);
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
    margin-top: 50px;
    margin-bottom: 50px;
}
.image {
    position: relative;
    width: 100%;
    height: 500px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-color: rgba(0,0,0,0.1)
}
.content {
    position: relative;
    width: 100%;
    height: auto;
    background-color: red;
}
.card2 {
    position: relative;
    width: 100%;
    border-top: 1px solid rgba(0,0,0,0.1);
}
.inline li {
    display: inline;
    list-style: none;
    padding: 10px 15px;
}
.rate {
    text-align: left;
    padding: 40px 5%;
    h2 {
        float: left;
        margin-bottom: 20px;
    }
}
span {
    position: relative;
    top: 15px;
}
.kanan {
    float: right;
}
.margin {
    margin-right: 3%;
}
.modal-body {
    text-align: left
}
.edit {
    position: absolute;
    float: right;
    top: 95%;
    transform: translateY(-95%);
    right: 8%;
}
</style>