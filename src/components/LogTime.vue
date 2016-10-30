<template>
    <div class="form-horizontal">
        <div class="form-group">
            <div class="col-sm-6">
                <label for="firstName">FirstName</label>
                <input type="text" v-model="timeEntry.user.firstName"
                class="form-control" placeholder="firstName" id="firstName"/>
            </div>
            <div class="col-sm-6">
                <label for="lastName">LastName</label>
                <input type="text" class="form-control"
                v-model="timeEntry.user.lastName" placeholder="lastName" id="lastName"/>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-6">
                <label for="timeEntryDate">Date</label>
                <input type="date" class="form-control"
                v-model="timeEntry.date"
                placeholder="Date" id="timeEntryDate"/>
            </div>

            <div class="col-sm-6">
                <label>Hours</label>
                <input type="number" class="form-control"
                v-model="timeEntry.totalTime"
                placeholder="Hours"/>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-12">
                <label>Comment</label>
                <input type="text"
                class="form-control"
                v-model="timeEntry.comment"
                placeholder="Comment"/>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-12">
                <label>Image</label>
                <input type="text" v-model="timeEntry.user.image"
                class="form-control"/>
            </div>
        </div>
        <button class="btn btn-primary" @click="save()">Save</button>
        <router-link tag="button" to="/time/entries" class="btn btn-danger">Cancel</router-link>
        <hr>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          timeEntry: {
            user: {
              firstName: 'Ryan',
              lastName: 'Chenkie',
              email: 'dfdf@gmail.com',
              image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250&d=retro&r='
            }
          }
        }
      },
      methods: {
        save () {
          let timeEntry = this.timeEntry
          this.$emit('timeUpdate', timeEntry)
          this.timeEntry = {
            user: {}
          }
        }
      }
    }
</script>
