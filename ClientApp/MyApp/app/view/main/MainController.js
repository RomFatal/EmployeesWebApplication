/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    OnEdit: function (sender, records, data, result, FullName) {
        //Ext.Msg.alert('Edit', 'Edit' + " " + ["0"].records);
        var store = sender.store;        
        let item = store.data.items[records];
        store.proxy.api.update = 'https://localhost:7069/api/EmployeesController/' + item.id
        var win = Ext.create('Ext.window.Window', {
            title: "Update Employee",
            height: 380,
            width: 400,
            closeAction: 'hide',
            closable: true,

            items: [{
                xtype: 'form',
                defaultType: 'textfield',
                layout: 'anchor',

                items: [
                    {
                        fieldLabel: 'Full Name',
                        name: 'name',
                        type: 'String',
                        value: item.data.name,
                        allowBlank: false
                    },
                    {
                        fieldLabel: 'Job',
                        name: 'job',
                        type: 'String',
                        value: item.data.job,
                    },
                    {
                        fieldLabel: 'Title',
                        name: 'title',
                        type: 'String',
                        value: item.data.title,
                    },
                    {
                        fieldLabel: 'Age',
                        name: 'age',
                        type: 'int',
                        value: item.data.age,
                        allowBlank: false
                    },
                    {
                        fieldLabel: 'Company',
                        name: 'company',
                        type: 'String',
                        value: item.data.company,
                    },
                    {
                        fieldLabel: 'Workstation No.',
                        name: 'workstationNo',
                        type: 'String',
                        value: item.data.workstationNo,
                    },
                    {
                        fieldLabel: 'Site',
                        name: 'site',
                        type: 'String',
                        value: item.data.site,
                    },],
                buttons: [{
                    text: 'Update',
                    formBind: true,
                    disabled: true,
                    handler: function () {

                        let formValues = this.up('form').getForm().getValues();
                        console.log('formValues ', formValues);
                        let form = this.up('form').getForm();

                        if (form.isValid()) {
                            for (const [key, value] of Object.entries(item.data)) {
                                if(value != formValues[key]) 
                                    item.set(key,formValues[key])
                              }
                            store.sync({
                                failure: function (batch, options) {
                                    Ext.each(batch.exceptions, function (operation) {
                                        if (operation.hasException()) {
                                            Ext.log.warn('error message: ' + operation.error);
                                            Ext.Msg.alert('Failed to add employee', 'Status ' + operation.error.status + '' + operation.error.statusText);
                                        }
                                    });
                                },
                                success: function () {
                                    win.hide();
                                    Ext.getCmp("mainlist-1012").store.reload();                                      //var x = grid.getStore();
                                }
                            });
                            store.load(function () {

                            })

                        }
                    },
                }, {
                    text: 'Close', handler: function () {
                        this.up('window').close();
                    }
                }],
                renderTo: Ext.getBody(),
            }]
        }).show();
    },

    OnDelete: function (sender, records) {
        let grid = sender.grid;
        var store = Ext.getStore('EmployeesApi');
        let item = store.data.items[records]
        Ext.Msg.confirm('Delete Changes', 'Do you want to delete employee id:' + " " + (item.id), function (choice) {
            if (choice === 'yes') {
                console.log(store);
                store.remove(item);
                store.proxy.api.destroy = 'https://localhost:7069/api/EmployeesController/' + item.id
                store.sync();
                grid.store.reload();
            }
        });
    },

    AddRecord: function (sender, record) {
        var store = Ext.getStore('EmployeesApi');
        var win = Ext.create('Ext.window.Window', {
            title: "Add Employee",
            height: 420,
            width: 400,
            closeAction: 'hide',
            closable: true,

            items: [{
                xtype: 'form',
                defaultType: 'textfield',
                layout: 'anchor',

                items: [
                    {
                        fieldLabel: 'Id',
                        name: 'Id',
                        type: 'int',
                        allowBlank: false
                    },
                    {
                        fieldLabel: 'Full Name',
                        name: 'name',
                        type: 'String',
                        allowBlank: false
                    },
                    {
                        fieldLabel: 'Job',
                        name: 'job',
                        type: 'String',
                    },
                    {
                        fieldLabel: 'Title',
                        name: 'title',
                        type: 'String',
                    },
                    {
                        fieldLabel: 'Age',
                        name: 'age',
                        type: 'int',
                        allowBlank: false
                    },
                    {
                        fieldLabel: 'Company',
                        name: 'company',
                        type: 'String',
                    },
                    {
                        fieldLabel: 'Workstation No.',
                        name: 'workstationNo',
                        type: 'String',
                    },
                    {
                        fieldLabel: 'Site',
                        name: 'site',
                        type: 'String',
                    },],
                buttons: [{
                    text: 'Add',
                    formBind: true,
                    disabled: true,
                    handler: function () {

                        let formValues = this.up('form').getForm().getValues();
                        console.log('formValues ', formValues);
                        let form = this.up('form').getForm();

                        if (form.isValid()) {
                            store.add(form.getValues());
                            store.sync({
                                failure: function (batch, options) {
                                    Ext.each(batch.exceptions, function (operation) {
                                        if (operation.hasException()) {
                                            Ext.log.warn('error message: ' + operation.error);
                                            Ext.Msg.alert('Failed to add employee', 'Status ' + operation.error.status + '' + operation.error.statusText);
                                        }
                                    });
                                },
                                success: function () {
                                    win.hide();
                                    Ext.getCmp("mainlist-1012").store.reload();                                      //var x = grid.getStore();
                                }
                            });
                        }
                    },
                }, {
                    text: 'Close', handler: function () {
                        this.up('window').close();
                    }
                }],
                renderTo: Ext.getBody(),
            }]
        }).show();
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            store.remove(records);   
        }
    }
});
