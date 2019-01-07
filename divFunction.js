var divCreator = function(pixels) {

    var leng = pixels / 8;

    var container = $('<div class="grid-container" style="line-height: 0; border: 1px solid #000">');
    $(container).css({ 'width': pixels, 'height': pixels });
    $('body').append(container);

    for (j = 0; j < 8; j++) {

        for (i = 0; i < 8; i++) {
            
            var eve = (i + j) % 2 === 0;
            if (eve) {

                var div = $('<div>');
                $(div).css({ 'width': leng, 'height': leng, 'display': 'inline-grid', 'background': 'black' });
                container.append(div);

            } else {

                var div = $('<div>');
                $(div).css({ 'width': leng, 'height': leng, 'display': 'inline-grid' });
                container.append(div);
            }
        }
    }
};