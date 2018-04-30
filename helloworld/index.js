var MyApp = san.defineComponent({
    template: '<div class=\'hello\'>{{msg}}</div>',

    initData: function () {
        return {
            msg: 'hello world'
        };
    }
});


var myApp = new MyApp();
myApp.attach(document.body);