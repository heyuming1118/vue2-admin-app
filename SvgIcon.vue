<template>
  <svg :class="svgClass" aria-hidden="true" ref="svg" @load="generateShadowColor">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      svgShadowColor: 'rgba(0, 0, 0, 0.3)', // 默认阴影颜色
    };
  },
  computed: {
    iconName() {
      return `#icon-${this.icon}`;
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className;
      }
      return 'svg-icon';
    }
  },
  mounted() {
    this.generateShadowColor();
  },
  methods: {
    generateShadowColor() {
      const svgElement = this.$refs.svg;
      const colors = this.extractColorsFromSVG(svgElement);
      const mainColor = this.calculateMainColor(colors);
      this.svgShadowColor = `rgba(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]}, 0.5)`;
      this.applyShadowColor();
    },
    extractColorsFromSVG(svgElement) {
      const colors = [];
      const paths = svgElement.querySelectorAll('path');
      paths.forEach(path => {
        const fill = path.getAttribute('fill');
        if (fill) {
          colors.push(this.hexToRgb(fill));
        }
      });
      return colors;
    },
    calculateMainColor(colors) {
      const avgColor = colors.reduce(
        (acc, color) => {
          acc[0] += color[0];
          acc[1] += color[1];
          acc[2] += color[2];
          return acc;
        },
        [0, 0, 0]
      );
      avgColor[0] = Math.floor(avgColor[0] / colors.length);
      avgColor[1] = Math.floor(avgColor[1] / colors.length);
      avgColor[2] = Math.floor(avgColor[2] / colors.length);
      return avgColor;
    },
    hexToRgb(hex) {
      let r = 0, g = 0, b = 0;
      if (hex.length == 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
      } else if (hex.length == 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
      }
      return [r, g, b];
    },
    applyShadowColor() {
      this.$refs.svg.style.filter = `drop-shadow(2px 2px 4px ${this.svgShadowColor})`;
    }
  }
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>
