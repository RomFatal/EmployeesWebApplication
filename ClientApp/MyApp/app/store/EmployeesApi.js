Ext.define('MyApp.store.EmployeesApi', {
    extend: 'Ext.data.Store',
    
    alias: 'store.EmployeesApi',

    model: 'MyApp.model.Employee',

    proxy: {
        type: 'ajax',
        url:'https://localhost:7069/api/EmployeesController'
    },
    autoLoad:true
});
