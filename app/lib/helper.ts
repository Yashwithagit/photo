import Router from "next/router";

export const routerNavigation = (path: string) => {
  return Router.push(path);
};
