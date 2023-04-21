import WebGL from 'three/examples/jsm/capabilities/WebGL'
import { Ref } from 'vue'

export default (animate: Function, container: Ref<ComponentRef>) => {
    if (WebGL.isWebGLAvailable()) {
        animate()
    } else {
        const warning = WebGL.getWebGLErrorMessage();
        container.value.appendChild(warning);
    }
}