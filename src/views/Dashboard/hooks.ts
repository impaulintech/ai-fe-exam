import ArticleCard from '@/components/Cards/Article/index.vue'
import CountCard from '@/components/Cards/Count/index.vue'
import NavigationBar from '@/components/Navigations/NavigationBar/index.vue'
import Dashboard from '@/components/Templates/Dashboard/index.vue'
import Footer from '@/components/Templates/Footer.vue'
import { onMounted, ref } from 'vue'

export type Role = 'editor' | 'writer'

export const useHooks = () => {
  const activeUser = ref<Role>('writer')
  const isCreateArticleVisible = ref<boolean>(false)

  const initializeActiveUser = () => {
    const userRole = localStorage.getItem('user')
    if (userRole === 'writer' || userRole === 'editor') {
      activeUser.value = userRole as Role
    } else {
      activeUser.value = 'writer'
    }
  }

  const handleClickFAB = () => {
    isCreateArticleVisible.value = !isCreateArticleVisible.value
  }

  const handleCreateArticle = () => {
    // biome-disable-line no-console: TODO: Create article
  }

  onMounted(() => {
    initializeActiveUser()
  })

  return {
    Footer,
    CountCard,
    Dashboard,
    activeUser,
    ArticleCard,
    NavigationBar,
    handleClickFAB,
    handleCreateArticle,
    isCreateArticleVisible,
  }
}
