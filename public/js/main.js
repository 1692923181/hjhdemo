$(function(){
    $('#delete').click(function(){
        //发送ajax请求delet
                        //自定义属性data开头的或attr(data-id)
        var id = $(this).data("id");
        var url = "/posts/"+id;
        console.log(id)
        $.ajax({
            url:url,
            method:'DELETE',
            success:function(res){
                if(res.code===0){
                    alert('删除成功')
                    //删除成功跳转到列表页面
                    location.href= "/posts"
                }
                alert("删除成功");
            },
            erorr:function(){
                alert("删除失败");
            }
        })
    })
})