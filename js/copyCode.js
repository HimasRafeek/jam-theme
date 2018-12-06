$(function () {
    /* Prism copy to clipbaord for all pre with copytoclipboard class */
    $('.copytoclipboard').each(function () {
        $this = $(this);
        $button = $('<button class="btn-primary btn-sm">Copy</button>');
        $this.wrap('<div/>').removeClass('copytoclipboard');
        $wrapper = $this.parent();
        $wrapper.addClass('copytoclipboard-wrapper').css({
            position: 'relative'
        })
        $button.css({
            position: 'absolute',
            top: 10,
            right: 10
        }).appendTo($wrapper).addClass('copytoclipboard btn btn-default');
        /* */
        var copyCode = new ClipboardJS('button.copytoclipboard', {
            target: function (trigger) {
                return trigger.previousElementSibling;
            }
        });
        copyCode.on('success', function (event) {
            event.clearSelection();
            event.trigger.textContent = 'Copied';
            window.setTimeout(function () {
                event.trigger.textContent = 'Copy';
            }, 2000);
        });
        copyCode.on('error', function (event) {
            event.trigger.textContent = 'Press "Ctrl + C" to copy';
            window.setTimeout(function () {
                event.trigger.textContent = 'Copy';
            }, 2000);
        });
    });

})

