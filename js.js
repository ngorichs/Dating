/**
 * Created by noah.gorichs123 on 9/8/16.
 */
<script type="text/javascript">

function readURL(input) {

    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {

            $('#blah')

            .attr('src', e.target.result)

            .width(150)

                .height(200);

        };

        reader.readAsDataURL(input.files[0]);

    }

}

</script>