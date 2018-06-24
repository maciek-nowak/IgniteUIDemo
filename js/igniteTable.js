$(function () {

    var data = [
        { "Name": "John Smith", "Age": 45 },
        { "Name": "Mary Johnson", "Age": 32 },
        { "Name": "Bob Ferguson", "Age": 27 }
    ];

    $("#dialog").igDialog({ height: 250 });
    $("#open_dialog").click(
        function() {
            $("#dialog").igDialog("open")
    });
    $("#add_person_button").click(
        function() {
            var name = $("#Name").val();
            var age = $("#Age").val();
            data.push({ "Name": name, "Age": age });
            $("#dialog").igDialog("close");
            console.log(data);

            render();

        }
    );

    render();

    function render() {
        $("#grid").igGrid({
            dataSource: data, //JSON Array defined above
            features: [
                {
                    name: 'Resizing',
                },
                {
                    name: "Filtering",
                    type: "local",
                    persist: true
                },
            ]
        });
    }

});