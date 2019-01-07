var drawCircles = function(quantity) {
    for (i = 0; i < quantity; i++) {

        var wy = $(window).height();
        var wx = $(window).width();

        var color = ["#00ffff", "#f0ffff", "#f5f5dc", "#000000", "#0000ff", "#a52a2a", "#00ffff", "#00008b", "#008b8b", "#a9a9a9", "#006400", "#bdb76b", "#8b008b", "#556b2f", "#ff8c00", "#9932cc", "#8b0000", "#e9967a", "#9400d3", "#ff00ff", "#ffd700", "#008000", "#4b0082", "#f0e68c", "#add8e6", "#e0ffff", "#90ee90", "#d3d3d3", "#ffb6c1", "#ffffe0", "#00ff00", "#ff00ff", "#800000", "#000080", "#808000", "#ffa500", "#ffc0cb", "#800080", "#800080", "#ff0000", "#c0c0c0", "#ffffff", "#ffff00"];
        var clr = color[Math.floor(Math.random() * color.length)];

        var rad = function(min, max) {
            var rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));
            return rand;
        };

        var wid = rad(50, 200);
        var min = 0;
        var xMax = wx - wid;
        var yMax = wy - wid;
        var x = rad(min, xMax);
        var y = rad(min, yMax);

        var container = $('.main');
        var circle = $('<div>');
        $(circle).css({ 'width': wid, 'height': wid, 'top': y, 'left': x, 'background': clr, 'border-radius': '50%', 'position': 'absolute' });
        container.append(circle);
    }
};