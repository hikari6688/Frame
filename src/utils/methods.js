//常用公共方法
export function menuFilter(data) {
  return data.filter((item) => {
    return item.meta&&item.meta.showMenu;
  });
}
