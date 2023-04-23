$(function(){
    //给时间补零
    function padZero(n){
        return n<10?'0'+n:n
    }
    //定义事件格式化过滤器
    template.defaults.imports.dateFormat=function(dtstr){
        var dt=new Date(dtstr)
        var y=dt.getFullYear()
        var m=padZero(dt. getMonth()+1)
        var d=padZero(dt.getDate()) 
        var hh=padZero(dt.getHours())
        var mm=padZero(dt.getMinutes())
        var ss=padZero(dt.getSeconds())
         return y+'-'+m+'-'+d+' '+hh+':'+mm+':'+ss

    }
    function getNewsList() {
        $.get('http://www.liulongbin.top:3006/api/news',
        function(res){
            if(res.status!=200) return alert('失败')
            //console.log(res.data);
            for(var i=0;i<res.data.length;i++){
                //把每一项的tags属性，从字符串改成数组
                res.data[i].tags=res.data[i].tags.split(',')
            }
            var htmlstr=template('tpl-news',res)
            $('#news-list').html(htmlstr)
        })
    }
    getNewsList()
})