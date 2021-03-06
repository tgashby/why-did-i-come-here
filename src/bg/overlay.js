
// Create banner
function addBanner(reminderText, height) {
    bumpFacebook(height);
    var $reminderBanner = $(document.createElement('div'));
    var $reminderText   = $(document.createElement('p'));
    $reminderBanner.append($reminderText);

    $reminderBanner.addClass("reminder-banner box-sizing")
                   .css("top", "-" + height + "px");
    $reminderText.attr("contenteditable", "true")
                 .text(reminderText);

    // Close button
    var $closeButton = $(document.createElement('div'));
    $closeButton.addClass("close-button").text('x');
    $closeButton.click(function() {
        $reminderBanner.toggle();
        $('#blueBar').css('top', '0');
        $('._li').css('padding-top', '0');
    })
    $reminderBanner.prepend($closeButton);

    // Prevent typing of newlines
    $reminderText.keypress(function(e){return e.which !== 13;});

    $('body').prepend($reminderBanner);
    $reminderBanner.animate({'top': 0}, 200);
}

function bumpFacebook(bumpAmount) {
    // $('#box').animate({'top':'20px'},200);
    $('._li').animate({'padding-top': bumpAmount + 'px'}, 200);
    $('#blueBar').animate({'top': bumpAmount + 'px'}, 200);
}

// Fade Facebook
var $whiteOverlay = $(document.createElement('div'));
$whiteOverlay.addClass("white-overlay");
$('body').prepend($whiteOverlay);

// Add the input container/field
var $inputContainer = $(document.createElement('div'));
$inputContainer.addClass("input-container box-sizing");

var $inputField = $(document.createElement('input'));
$inputField.addClass("input-field box-sizing");
$inputField.attr("placeholder", "What did you come here to do?");

$inputContainer.prepend($inputField);
$('body').prepend($inputContainer);
$inputField.focus();

$inputField.keypress(function (e) {
    // If return is hit...
    if (e.which === 13) {
        // TODO: Is .val() proper?
        $whiteOverlay.toggle();
        $inputContainer.toggle();
        var message = $inputField.val();
        if(message !== "") {
            addBanner($inputField.val(), 55);
        }
        return false;
    }
});
