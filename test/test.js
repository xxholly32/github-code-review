const codeReview = require("../src/index")

const test = async () => {
    let data = await codeReview.getCommits("https://api.github.com/repos/EmptyCup20/easy-codereview/commits/a524e18374e3fb263a24c999ddf8b704d34fabc2")

    console.log(`新增行数${data.newline}行，删除行数${data.delline}行，低级缺陷${data.low}行，中级缺陷${data.medium}行，高级缺陷${data.senior}行`)
}

test()