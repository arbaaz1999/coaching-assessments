var srNo = 0
$("#saveBtn").click(function() {
    srNo++
    var amount = $("#amount").val()
    var type = $("#type").val()
    var remark = $("#remark").val()
    var content = `<tr>
    <td>${srNo}</td>
    <td>${amount}</td>
    <td>${type}</td>
    <td>${remark}</td>
    </tr>`
    $("#body").append(content)
    $("#amount").val("")
    $("#type").val("")
    $("#remark").val("")

    var arr = []
})
