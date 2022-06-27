import { ElLoading } from 'element-plus'
const loading = {
  loadingInstance: null,
  // 打开
  open() {
    if (this.loadingInstance === null) {
      this.loadingInstance = ElLoading.service({
        target: 'body',
        background: 'rgba(0, 0, 0, 0.4)'
      })
    }
  },
  // 关闭
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}
export default loading
