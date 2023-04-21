<script lang="tsx">
import { defineComponent, ref, onMounted, render } from "vue";
import * as Three from "three";

export default defineComponent({
  name: "Line",
  setup() {
    const root = ref();
    let renderer: Three.WebGLRenderer | null = null;
    let camera: Three.PerspectiveCamera | null = null;
    // 注册场景
    const init = () => {
      let width = root.value.clientWidth;
      let height = root.value.clientHeight;

      renderer = new Three.WebGLRenderer({
        // 抗锯齿
        antialias: true,
      });
      renderer.setSize(width, height);
      renderer.setClearColor("lightgreen");

      root.value.appendChild(renderer.domElement);
    };
    // 注册远景相机
    const initCamera = () => {
      let width = root.value.clientWidth;
      let height = root.value.clientHeight;
      camera = new Three.PerspectiveCamera(45, width / height, 1, 1000);
      // 设置相机位置
      camera.position.set(0, 0, 100);

      // 设置观测原点
      camera.lookAt(0, 0, 0);
    };

    onMounted(() => {
      init();
      initCamera();

      //  初始化场景
      const scene = new Three.Scene();

      // c创建一个材质
      const material = new Three.LineBasicMaterial({ color: "blue" });

      // 定义几何体
      const points = [];
      points.push(new Three.Vector3(-10, 0, 0));
      points.push(new Three.Vector3(0, 10, 0));
      points.push(new Three.Vector3(10, 0, 0));

      const geometry = new Three.BufferGeometry().setFromPoints(points);

      const line = new Three.Line(geometry, material);
      scene.add(line);
      renderer && renderer.render(scene, camera);
    });

    return () => <div class="fang100" ref={root}></div>;
  },
});
</script>
