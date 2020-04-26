$(function () {

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var no = 1;
        for (var country in result) {
            if(`${country}`=='Taiwan*'){
                var row = `<tr>
                        <th scope="row">${no}</th>
                        <td>
                        <a href="country.html?country=${country}">${country}</a>
                        </td>
                        <td><img src="National-flag/Taiwan.png" width="100" height="50"></td>
                    </tr>`;
            $("#data").append(row);
            no++;
            } else {
            var row = `<tr>
                        <th scope="row">${no}</th>
                        <td>
                        <a href="country.html?country=${country}">${country}</a>
                        </td>
                        <td><img src="National-flag/${country}.png" width="100" height="50"></td>
                    </tr>`;
            $("#data").append(row);
            no++;
            }
        }

    });





})
