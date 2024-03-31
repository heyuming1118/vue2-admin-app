import { logout } from '@/api/sys'

/**
 * 移除 loading 节点
 */
export function hideLoading() {
  const root = document.getElementById('loading')
  if (root) {
    root.remove()
  }
}

/**
 * 显示错误信息
 *
 * @param {Error} err
 */
export function showErrorInfo(err) {
  const root = document.getElementById('error')
  const buttonShuaXin = document.getElementById('errmsg-shuaXin')
  const buttonTuiChu = document.getElementById('errmsg-tuiChu')

  if (!root) return

  // 去掉 display=none
  root.style.display = null

  buttonShuaXin.onclick = function () {
    location.reload()
  }

  buttonTuiChu.onclick = function () {
    logout()
  }

  const msgEl = root.querySelector('.errmsg-text')
  if (!msgEl) return

  // 生产不显示详细的错误信息
  if (process.env.NODE_ENV === 'production') {
    msgEl.innerHTML = `<code><pre>${err.message}</pre></code>`
  } else {
    msgEl.innerHTML = `<code><pre>${err.stack}</pre></code>`
  }
}

/**
 * 错误应用的错误边界
 *
 * @param {Error} error
 */
export function onAppErrorBoundary(error) {
  hideLoading()
  showErrorInfo(error)
}
