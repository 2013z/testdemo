export default ({ app}) => {
    app.router.beforeEach((to,from,next) => {
        console.log('%c即%c刻加入我们,\n%c构%c建最好的未来。\n%c等%c什么呢！\n%c你%c怀才不遇？正好，我们老板怀财不遇！\n\n%czego前端工程师%c等你来！简历直通车邮箱：zhaowei@zego.im',"color:red","color:black","color:red","color:black","color:red","color:black","color:red","color:black","color:red","color:black");
        next()
    })
}
