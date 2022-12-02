// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
import GlobalFooter from "@/components/GlobalFooter";
import RightContent from "@/components/GlobalHeader/RightContent";
import { getLoginUser } from "@/services/userService";
import { RequestConfig } from "@@/plugin-request/request";
import { RunTimeLayoutConfig } from "@@/plugin-layout/types";

export async function getInitialState(): Promise<InitialState> {
  const defaultState: InitialState = {
    loginUser: undefined,
  };
  // 获取当前登录用户
  try {
    const res = await getLoginUser();
    defaultState.loginUser = res.data;
  } catch (e) {}
  return defaultState;
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    title: "第九艺术",
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    layout: "top",
    rightContentRender: () => <RightContent />,
    footerRender: () => <GlobalFooter />
  };
};

const isDev = process.env.NODE_ENV === 'development';

/**
 * 全局请求配置
 * https://umijs.org/docs/max/request
 */
export const request: RequestConfig = {
  baseURL: isDev ? 'http://localhost:8102/api' : '你的线上接口地址',
  timeout: 10000,
  withCredentials: true,
  // other axios options you want
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  requestInterceptors: [],
  responseInterceptors: [
    (response) => {
      // 不再需要异步处理读取返回体内容，可直接在 data 中读出，部分字段可在 config 中找到
      const data: any = response.data;
      const path = response.request.responseURL;
      if (!data) {
        throw new Error('服务异常');
      }
      // 下载接口没有 code
      if (path.includes('download/data/excel')) {
        return response;
      }
      const code = data.code ?? 50000;
      // 未登录，且不为获取用户登录信息接口
      if (
        code === 40100 &&
        !path.includes('user/get/login') &&
        !location.pathname.includes('/user/login')
      ) {
        // 跳转至登录页
        // window.location.href = `/user/login?redirect=${window.location.href}`;
        throw new Error('请先登录');
      }
      if (code !== 0) {
        console.error(`request error, path = ${path}`, data);
        throw new Error(data.message ?? '服务器错误');
      }
      // do something
      return response;
    },
  ],
};
