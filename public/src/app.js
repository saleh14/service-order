var vm = new Vue({
    el: '#app',
    data: {
        services: [],
        testValue:false,

    },
    computed: {
        selectedServices:function(){
            return this.services.filter(service=>service.checked);
        }
    }

});

axios.get('/services').then(function (data) {
    console.log(data.data);
    vm.services = data.data.map(service => {
        service.checked =false;
        return service;
    })
});