const {
    connectGithub
  } = require("./tools")
const LOW_STRING = "低级缺陷"
const MEDIUM_STRING = "中级缺陷"
const SENIOR_STRING = "高级缺陷"
  
const getCommits = async (url, low_string, medium_string, senior_string) => {
    try{    
      // let url = 'https://api.github.com/repos/xxholly32/github-api-test/commits/4341547c5954f5314e8f95a61f10864ce42e8413'
      let url = 'https://api.github.com/repos/EmptyCup20/easy-codereview/commits/a524e18374e3fb263a24c999ddf8b704d34fabc2'
      // 获取单个commit的资源
      // 对应commit url地址 https://github.com/xxholly32/github-api-test/commit/4341547c5954f5314e8f95a61f10864ce42e8413
      let commitData = await connectGithub(url)
  
      let commitFiles = commitData.files
      let newline = 0
      let delline = 0
      
      // 获取所有变化行数
      for(let file of commitFiles){
        newline += file.changes
        delline += file.deletions
      }
  
      // 获取上述commitid 的评论
      let commentsData = await connectGithub(`${url}/comments`)
  
      // 获取bug个数 规则 评论中存在bug
      let low = commentsData.filter((obj) => obj.body.indexOf(low_string || LOW_STRING) > -1).length
      let medium = commentsData.filter((obj) => obj.body.indexOf(medium_string || MEDIUM_STRING) > -1).length
      let senior = commentsData.filter((obj) => obj.body.indexOf(senior_string || SENIOR_STRING) > -1).length

      return {
          low, medium, senior, newline, delline
      }
      
    }catch(e){
      console.error(e)
      return e
    }
}

module.exports = {
    getCommits
}