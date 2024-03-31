<script>
export default {
  name: "AppAsideMenuList",
  functional: true,
  render(h, { props }) {
    const { menuList } = props;
    const el = menuList.map((item) => {
      // 如果有子级
      if (item.children && item.children.length) {
        const child = [];
        item.icon && child.push(h("i", { class: item.icon }));
        child.push(h("span", item.title));

        return h(
          "el-submenu",
          { props: { index: item.id, key: item.id } },
          [
            h("span", { slot: "title" }, child),
            // 递归组件
            h("AppAsideMenuList", { props: { menuList: item.children } }),
          ]
        );
      } else {
        const child = [];
        item.icon && child.push(h("i", { class: item.icon }));
        child.push(h("span", { slot: "title" }, item.title));

        return h(
          "el-menu-item",
          { props: { index: item.path, key: item.id } },
          child
        );
      }
    });
    return el;
  },
};
</script>
