const base = {
    get() {
        return {
            url : "http://localhost:8080/nodejsi2pjk/",
            name: "nodejsi2pjk",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/nodejsi2pjk/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于node的高校社团迎新平台"
        } 
    }
}
export default base
