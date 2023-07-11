Ext.define('MyApp.store.EmployeesApi', {
    extend: 'Ext.data.Store',
    
    proxy: {
        type: 'ajax',
        url:'https://localhost:7069/api/EmployeesController'
    },
    autoLoad:true
});
