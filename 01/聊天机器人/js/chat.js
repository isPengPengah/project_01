$(function(){
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()


    //为发送按钮绑定鼠标点击事件
    $('#btnsend').on('click',function(){
        var text=$('#ipt').val().trim()
        if(text.length<=0){
            return $('#ipt').val('')
        }
        //如果用户输入内容,给聊天框加入对话
        $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>'
        +text+'</span></li>')
        
        $('#ipt').val('')
        //重置滚动条位置
        resetui()
        //发起请求
        getMsg(text)
    })
    //键盘回车发送事件,这个地方不能绑定btnsend
    $('#ipt').bind('keyup',function (e) {
        if (e.keyCode === 13) {
             $('#btnsend').click()
        }
    })
    

    //获取机器人发送的消息
    function getMsg(text){
        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data:{
                spoken:text
            },
            success: function(res){
                console.log(res);
                if(res.message=='success'){
                    //接受聊天消息
                    var msg=res.data.info.text
                    $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>'
                    +msg+'</span></li>')
                    resetui()
                    //调用getvoice
                    getVoice(msg)
                }
            }
        })
    }

    //文字转语音
    function getVoice(text){
        $.ajax({
            method:'get',
            url:'http://www.liulongbin.top:3006/api/synthesize',
            data:{
                text:text
            },
            success:function(res){
                //console.log(res);
                if(res.status==200){
                    //播放
                    $('#voice').attr('src',res.voiceUrl)
                }
            }
        })
    }
  })
