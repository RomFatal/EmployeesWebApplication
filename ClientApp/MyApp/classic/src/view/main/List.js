/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.EmployeesApi'
    ],

    title: 'Employees',

    store: {
        type: 'EmployeesApi'
    },

    columns: [
        { text: 'Id',  dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text: 'Age', dataIndex: 'age'},
        { text: 'Company', dataIndex: 'company', flex: 1 },
        { text: 'Workstation No.', dataIndex: 'workstationNo', flex: 1 },
        { text: 'Site', dataIndex: 'site', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
