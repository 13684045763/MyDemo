<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WeChatQuizList.aspx.cs" Inherits="www.marcxml.com.WeChatQuizList" %>

<!DOCTYPE html>
<html>
<meta name="viewport" content="width=640px,maximum-scale=1.0, user-scalable=no,target-densitydpi=320" />
<meta charset="utf-8" />

<head>
    <title>阅读评测</title>
    <link type="text/css" rel="stylesheet" href="Images/WechatStuff/WeChatQuizList.css" />
</head>

<body>

    <div class="warp">
        <div class="header">
            <div class="return">
                <a href="WeChatHome.aspx"><img src="Images/WechatStuff/return.png" /></a>
            </div>
            <div class="biaoti">
                <h1>阅读测验</h1></div>

        </div>


        <div>
        <img src="Images/WechatStuff/<%=GetSplashImage()%>" style="height: 320px;" />
            <h1></h1></div>

        <div class="content">
            <P><%=GetPageTitle()%></P>
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <th colspan="2">推 荐 阅 读 书 目</th>
                </tr>

                    <%=GetPageContents()%>

              </table>

<div class="ding">
    <a href="#top">
        <div class="tr1"></div>
        <div class="tr2"></div>
        
    </a>
</div>



        </div>

    </div>

</body>

</html>

