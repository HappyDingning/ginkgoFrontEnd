import Vue from 'vue'
import superComponent from "./components/superComponent.vue"

var app = new Vue({
    el: '#superComponent',
    render: function (createElements){
        return createElements(superComponent)
    }
})
