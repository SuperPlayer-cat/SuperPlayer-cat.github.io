/**
 * 博客全局配置
 *
 * Giscus 评论系统配置步骤：
 * 1. 将代码推送到你的 GitHub 仓库（如 xiaoyugan/xiaoyugan.github.io）
 * 2. 在仓库 Settings → Features 中启用 Discussions
 * 3. 安装 Giscus App: https://github.com/apps/giscus
 * 4. 访问 https://giscus.app/zh-CN 填入仓库名获取 repoId / categoryId
 * 5. 将获取到的值填入下方
 */
const blogConfig = {
  // Giscus 评论（暂时留空则不显示评论框）
  giscus: {
    repo: "", // 格式: "用户名/仓库名"
    repoId: "",
    category: "Announcements",
    categoryId: "",
    mapping: "pathname",
  },
}

export default blogConfig
