var cont = cont || {};
cont.io = (function () {
    var context = {};
    context.Get = function (url, success, fail, always)
    {
        $.get(url, function (result)
        {
            success(result);
        }).fail(function (err)
        {
            fail(err);
        }).always(function ()
        {
            always();
        });
    };

    context.post = function (url,obj, success, fail, always)
    {
        $.post(url,obj, function (result)
        {
            success(result);
        }).fail(function (err)
        {
            fail(err);
        }).always(function ()
        {
            always();
        });
    };
    return context;
})();
