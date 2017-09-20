$(function() {
    AppName.Modules.ThemeModule.init();
    $(window).resize(function() {
        AppName.Modules.ThemeModule.resize();
    });
});