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
    actions: {

        edit: {
            iconCls: 'x-fa fa-wrench',
            tooltip: 'Edit',
            handler: 'OnEdit'
        },

        delete: {
            iconCls: 'x-fa fa-trash',
            text: 'Delete',
            handler: 'OnDelete'
        }
    },
    columns: [
        { text: 'Id', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Job', dataIndex: 'job', flex: 1 },
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text: 'Age', dataIndex: 'age' },
        { text: 'Company', dataIndex: 'company', flex: 1 },
        { text: 'Workstation No.', dataIndex: 'workstationNo', flex: 1 },
        { text: 'Site', dataIndex: 'site', flex: 1 },
        {
            text: 'Action', width: 70, dataIndex: 'action', xtype: 'actioncolumn',
            items: ['@edit', '@delete'],
        }
    ],

    tbar: [
        { xtype: 'button', text: 'Add Employee', cls: 'x-btn-default-small', handler: 'AddEmployee' }
    ],
    form: {

        fields: {
            text: 'Id',
            text: 'Last Name',
        },
    },
    listeners: {
        select: 'onItemSelected'
    }
});
