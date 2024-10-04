$(document).ready(function() {
    let precioUnitario = 870; // Precio por unidad

    // Actualizar el total cuando se cambia la cantidad
    $('#cantidad').on('input', function() {
        let cantidad = parseInt($(this).val()) || 1;
        let total = cantidad * precioUnitario;
        $('#total').text('$' + total);
    });

    // Simulación del cupón de descuento
    $('#cupon').on('input', function() {
        let cupon = $(this).val();
        let cantidad = parseInt($('#cantidad').val()) || 1;
        let total = cantidad * precioUnitario;

        if (cupon === "DESCUENTO10") {
            total *= 0.9; // 10% de descuento
        }

        $('#total').text('$' + total.toFixed(2));
    });
});
