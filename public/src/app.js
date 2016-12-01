var vm = new Vue({
    el: '#app',
    data: {
        services: [],
        orderedServices: new Map(),
        costumer: { name: "", mobile: "" }
    },
    computed: {
        selectedServices: function() {
            return this.services.filter(service => service.checked);
        },
        orderedServicesFormatted: function() {
            var services = this.orderedServices.map(service => ' ' + service.name)
            return services.toLocaleString();
        }
    },
    methods: {
        orderHandler: function() {
            window.location.href = "#yourOrder";
            this.orderedServices = this.selectedServices
                .map(service => {

                    service.checked = false;
                    return service;
                });
        },
        getTotalPrice: function(services) {
            return services.reduce((total, service) => {
                total += parseInt(service.price);
                return total;
            }, 0);

        },
        sendOrder: function() {
            console.log(this.costumer.name + ',' + this.costumer.mobile +
                ',' + this.orderedServicesFormatted +
                ',' + this.getTotalPrice(this.orderedServices));

        },
        selectServiceHelper: function(e) {
            console.log(e.target || e)

        }
    }
});

$('.localScroll').localScroll();
axios.get('/services').then(function(data) {
    console.log(data.data);
    vm.services = data.data.map(service => {
        service.checked = false;
        return service;
    })
});