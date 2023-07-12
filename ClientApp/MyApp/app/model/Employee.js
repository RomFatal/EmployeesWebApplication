Ext.define('MyApp.model.Employee', {
    extend: 'MyApp.model.Base',

    fields: [
        { name: 'id', type: 'int' ,persist: false}, 'name', 'job', 'title', 'age', 'company', 'workstationNo', 'site'
    ]
});
