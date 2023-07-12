Ext.define('MyApp.store.EmployeesApi', {
    extend: 'Ext.data.Store',
    
    alias: 'store.EmployeesApi',

    model: 'MyApp.model.Employee',

    autoLoad: true,

    pageSize: null,

    sorters: [{
        property: 'id',
        direction: 'ASC'
    }],

    autoSync:false,

    proxy: {
        //cors: true,
        //crossDomain: true,
        //useDefaultXhrHeader: true,
        //useDefaultXhrHeader: false,
        //extraParams: {
            //type: 'aux'
        //},
        noCache: false,
        type: 'ajax',
        api: {
            read: 'https://localhost:7069/api/EmployeesController',
            create: 'https://localhost:7069/api/EmployeesController/',
            update: 'https://localhost:7069/api/EmployeesController/',
            destroy: 'https://localhost:7069/api/EmployeesController/'
        },
        actionMethods: {
            create: 'POST',
            update: 'PUT',
            destroy: 'DELETE'
        },

        reader: {
            type: 'json',
            headers: { 'Accept': 'application/json' },
        },
        writer: {
            writeAllFields: true,
            encode: false
        },
    },

    listeners: {
        load: function( store, records) {
          console.log(records);
        }
    }
});
