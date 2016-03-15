var app = app || {};

(function () {
    app.router = Sammy(function () {
        var selector = '#hello';

        this.get('#/', function () {
           $(selector).html('Click on names below');
        });

        this.get('#/Bob', function () {
            $(selector).html('Hello, Bob');
        });

        this.get('#/Sam', function () {
            $(selector).html('Hello, Sam');
        });

        this.get('#/Bat-Sali', function () {
            $(selector).html('Hello, Bat Sali');
        });

        this.get('#/Mariika', function () {
            $(selector).html('Hello, Mariika');
        });

        this.get('#/Penka', function () {
            $(selector).html('Hello, Penka');
        });

        this.get('#/Pesho', function () {
            $(selector).html('Hello, Pesho');
        });
    });

    app.router.run('#/');
}());