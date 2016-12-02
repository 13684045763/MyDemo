<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WeChatHome.aspx.cs" Inherits="www.marcxml.com.WeChatHome" %>

<!DOCTYPE html>
<html>
<meta name="viewport" content="width=640px,maximum-scale=1.0, user-scalable=no,target-densitydpi=320" />

<meta charset="utf-8" />

<head>
    <title>我的图书馆</title>
    <link type="text/css" rel="stylesheet" href="Images/WechatStuff/style.css" />
</head>

<body>

    <div class="warp">
        <div class="header">
            <div class="search">
                    <form action="WeChatSearch.aspx" method="GET">
                    <input type="hidden" name="Job" value="<%=GetJobName()%>">
                    <input type="text" id="keyword" name="query" placeholder="我的图书馆" class="input" onkeypress="submitForm()" />
                </form>
            </div>
        </div>


        <div>
       <img src="Images/WechatStuff/<%=GetSplashImage()%>" style="height: 320px; margin-top: 95px;" />
       <h1></h1></div>

        <div class="content">
           <ul class="list">
                <!-- 第1排图标 -->
                <li class="li-1"><a href="wechatbarcode.aspx"><span>我的读者证</span></a></li>
                <li class="li-2"><a href="wechathistory.aspx"><span>借书记录</span></a></li>
                <li class="li-3"><a href="WeChatScore.aspx"><span>我的成绩</span></a></li>
                <li class="li-4"><a href="WechatLoan.aspx"><span>未还/续借</span></a></li>
                <!-- 第2排图标 -->
                <li class="li-5"><a href="WeChatQuizList.aspx"><span>阅读测评</span></a></li>
                <li class="li-6"><a href="wechatranking.aspx"><span>图书热评</span></a></li>
                <li class="li-7"><a href="wechatranking.aspx?state=14"><span>本馆热借</span></a></li>
                <li class="li-8"><a href="wechatsearch.aspx?state=12"><span>查书/预约</span></a></li>
                <!-- 第3排图标 -->
                <li class="li-9"><a href="WeChatReadingRanking.aspx"><span>读书排行</span></a></li>
                <li class="li-10"><a href="WechatReadingRoom.aspx"><span>阅览室座位</span></a></li>
                <li class="li-11"><a href="WeChatDocView.aspx?PageID=电影资讯"><span>电影</span></a></li>
                <li class="li-12"><a href="WeChatRequestPurchare.aspx"><span>我的荐购</span></a></li>
            </ul>

        </div>

<style type="text/css">
    .list-1{
        background: url(Images/WechatStuff/bottom-1-2.png) 50% 5px no-repeat;
    }
        </style>


        <div class="footer">
            <ul class="list">
                <li class="list-1"><a href="WechatHome.aspx"><span style="color:#a30000;">首页</span></a></li>
                <li class="list-2"><a href="WechatHome.aspx"><span>发现</span></a></li>
                <li class="list-3"><a href="WechatHome.aspx"><span>活动</span></a></li>
                <li class="list-4"><a href="WechatHome.aspx"><span>我的</span></a></li>
            </ul>
        </div>


    </div>



</body>



</html>
