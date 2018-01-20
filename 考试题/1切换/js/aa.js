  var Home={
        template:`
          <div>
            <div class='pull-left' style="width:500px;background-color:blue">
              <h1>文章列表</h1>
              </div>
              <div class="pull-right"style="width:500px;background-color:blue">
              <h1>视屏列表</h1>
            </div>
          </div>
          `
    };
    var User={
        template:`
            <div>
                <div style="height:100px;background-color:blue">
                  新闻条目
                </div>
                <div style="height:100px;background-color:blue;marigin-top:220px">
                  新闻条目
                </div>
                <div style="height:100px;background-color:blue;marigin-top:220px">
                  新闻条目
                </div>
            </div>
        `
    };
    var Video={
        template:`
          <div>
                <div style="height:200px;background-color:blue">
                  <h1>广告栏</h1>
                </div>
                <div style="height:400px;background-color:blue;marigin-top:120px">
                  <h1>视屏内容</h1>
                </div>
          </div>
          `
    };

    const routes=[
        {path:'/home', component:Home},
        {path:'/user',component:User},
        {path:'/video',component:Video},
        {path:'*', redirect:'/home'}
    ];

    const router=new VueRouter({
        routes
    });

    new Vue({
        router,
        el:'#box'
    });
