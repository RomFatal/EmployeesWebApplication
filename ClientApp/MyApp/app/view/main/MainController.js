/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    OnEdit: function (sender, records, data, result,FullName ) {
        Ext.Msg.alert('Edit', 'Edit' + " " + ["0"].records);
    },

    OnDelete: function(sender, records) {
        Ext.Msg.confirm('Delete Changes', 'Do you want to delete' + " " + (records + 1), function(choice){
            if (choice === 'yes') {
    
                //declare store and remove records 
                //var store = this.getViewModel().getStore('EmployeesApi');
                var store = Ext.getStore('EmployeesApi');
                console.log(store);
                store.remove(store.findRecord('id',records));  
                console.log(store); 
                store.sync();
            }   
       });
    },

    AddRecord: function(sender, record) {
        Ext.Msg.form( )
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            store.remove(records);   
        }
    }
});
