(function ($) {
    $(document).ready(function () {




        $("button.btn").on("click", function (e) {
            e.preventDefault()

            var textInput = $.trim($("#inlineFormInput").val());
            var ul = $("ul.wpisz");
            var li = $("<li></li>", {
                text: textInput,
                class: "list-group-item"

            });

            if (textInput.length > 0) {
                ul.append(li);
            }
            $("#inlineFormInput").val('');
        });
    });
})(jQuery);