var arr = arr || {};

(function (scope) {
    scope.persons = {
        'persons' : [
            {
                'name' : 'Garry Finch',
                'jobTitle' : 'Front End Technical Lead',
                'website' : 'http://website.com'
            },

            {
                'name' : 'Bob McFray',
                'jobTitle' : 'Photographer',
                'website' : 'http://goo.gle'
            },

            {
                'name' : 'Jenny O\'Sullivan',
                'jobTitle' : 'LEGO Geek',
                'website' : 'http://stackoverflow.com'
            }
        ]
    };

    $.get('template.html', function (template) {
        var output = Mustache.render(template, scope.persons);
        $('#wrapper').html(output);
    })
}(arr));