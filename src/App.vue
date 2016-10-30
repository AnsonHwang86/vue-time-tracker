<template>
    <div id="wrapper">
        <nav class="navbar navbar-default">
            <div class="container">
                <a href="/" class="navbar-brand">
                    <i class="glyphicon glyphicon-time">
                        Vue Time Tracker
                    </i>
                </a>
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/home">Home</router-link>
                    <li>
                        <router-link to="/time-entries">Time Entries</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <div class="col-sm-3">
                <sidebar :time="totalTime"></sidebar>
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import Sidebar from './components/Sidebar.vue'
    export default {
      components: { 'sidebar': Sidebar },
      data () {
        return { totalTime: 1.5 }
      }
    }
</script>