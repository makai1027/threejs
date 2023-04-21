<script lang="tsx">
import { defineComponent } from 'vue'
import { ExampleCard } from '@/config/index'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'CardList',
  setup() {
    const router = useRouter()
    const checkItem = (path: string) => {
        router.push(path)
    }
    return () => ExampleCard.map((el) => {
      return <div class="item-wrapper" onClick={() => checkItem(el.path)}>
        <p class="title">{ el.name }</p>
        <p class="desc">{ el.desc }</p>
      </div>
    })    
  },
})
</script>
<style lang="sass" scoped>
$border-1: #dcdfe6
$font-light: #909399
.item-wrapper
  box-sizing: border-box
  border: 1px solid $border-1
  cursor: pointer
  p
    margin: 0
    &.title
      font-size: 14px
      font-weight: bold
    &.desc
      color: $font-light
      font-size: 12px
</style>
