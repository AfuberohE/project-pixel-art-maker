// Select color input
var colorPicker = $('#colorPicker');
// Select size input
var input_height = $('#input_height');
var input_width = $('#input_width');

// When size is submitted by the user, call makeGrid()
$('#Reset').click(function() {
    $('.pixel_canvas').html("");
});
$('#submit').on('click', function(e) {
    // $('.pixel_canvas').html("");
    e.preventDefault();
    makeGrid();
});

function makeGrid() {
    var row = input_height.val();
    var col = input_width.val();

    var tablerow;
    for (var r = 0; r < row; r++) {
        tablerow += '<tr>';
        for (var c = 0; c < col; c++) {
            tablerow += '<td></td>';
        }
        tablerow += '</tr>';
    }
    $('.pixel_canvas').append(tablerow);
    $('td').on('click', function() {
        var colorp = colorPicker.val();
        $(this).css({
            'background-color': colorp
        });
    });
}