Ext.define('MyApp.store.EmployeesApi', {
    extend: 'Ext.data.Store',
    
    alias: 'store.EmployeesApi',

    model: 'MyApp.model.Employee',

    autoLoad: true,
    pageSize: null,

    proxy: {
        type: 'ajax',
        url: 'https://localhost:7069/api/EmployeesController',
        useDefaultXhrHeader: false,
        reader: {
            type: 'json',
            headers: { 'Accept': 'application/json' },
        }
    },

    listeners: {
        load: function( store, records) {
          console.log(records);
        }
    }
});
