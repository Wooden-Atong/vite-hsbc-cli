/**
 * @author lihh
 * @description 表示启动项目
 */
import { IExecOptions } from '../types'
import { runCommand } from '../utils'

class StartupProjectRun {
  /**
   * @author lihh
   * @description 项目入口
   * @param options
   */
  async apply(options: IExecOptions) {
    const { tool, projectPath, callback } = options
    // console.log(tool)
    await runCommand(tool+' run', ['dev'], { cwd: projectPath })
    callback && callback()
  }
}

export default new StartupProjectRun()
