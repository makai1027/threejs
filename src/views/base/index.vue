<script lang="tsx">
import { defineComponent, onMounted, ref } from 'vue'
import * as Three from 'three'
import RunHandler from '@/utils/runWebGl'

export default defineComponent({
    setup() {
        const root = ref()
        onMounted(() => {
            // 设置一个场景
            const scene = new Three.Scene()

            //创建一透视相机, 视角， 视野长宽比， 最近观察距离、最远观察距离
            const camera = new Three.PerspectiveCamera(75, root.value.clientWidth / root.value.clientHeight, 0.1, 1000)

            // 定义一个webGl渲染器
            const renderer = new Three.WebGLRenderer()
            // 设置画布大小
            renderer.setSize(root.value.clientWidth, root.value.clientHeight)
            // 设置画布背景色
            renderer.setClearColor('#fff')

            root.value.appendChild(renderer.domElement)

            // 定义一个几何体 -立方体, width, height, 长， 宽高长的分段数，默认是1
            const geomety = new Three.BoxGeometry(2, 2, 2, 2, 2, 2)

            // 添加一个材质
            const materical = new Three.MeshBasicMaterial({ color: 'red' })

            const cube = new Three.Mesh(geomety, materical)
            // 导入模型
            scene.add(cube)

            //  设置相机位置
            camera.position.z = 16
            // 设置渲染方法
            function render () {
                // const time = msTime / 1000;
                // cube.position.x = Math.cos( time ) * 30;
                // cube.position.y = Math.sin( time ) * 30;
                // cube.position.z = Math.sin( time ) * 30;
                requestAnimationFrame(() => {
                    render()
                })
                cube.rotation.x += 0.01
                cube.rotation.y += 0.01
                renderer.render(scene, camera)
            }
            RunHandler(render, root)
            
        })
        return () => <div class="canvas-box" ref={root}></div>
    }
})
</script>
<style>
    .canvas-box {
        width: 100%;
        height: 100%
    }
</style>