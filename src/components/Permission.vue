<script>
import store from "../store";
export default {
  name: "Permission",
  functional: true,
  render(h, { children, props }) {
    const { rule } = props;
    const { role } = store.state.user;
    let hasPermission = true
    if (Array.isArray(rule)) {
      hasPermission = rule.includes(role);
    } else if (typeof rule === "function") {
      hasPermission = rule(role);
    } else {
      throw new Error("错误：rule 接收一个数组或函数");
    }
    if (!hasPermission) return null;
    return children;
  },
};
</script>
