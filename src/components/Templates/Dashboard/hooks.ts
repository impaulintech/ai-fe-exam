import ArticleCover from '@/assets/images/login_cover.png'
import ArticleCard from '@/components/Cards/Article/index.vue'
import CountCard from '@/components/Cards/Count/index.vue'
import NavigationBar from '@/components/Navigations/NavigationBar/index.vue'
import Footer from '@/components/Templates/Footer.vue'
import { onMounted, ref } from 'vue'

export type Role = 'editor' | 'writer'

type Status = 'for-edit' | 'published'

interface Article {
  role: Role
  status: Status
  articleTitle: string
  articleSummary: string
  userName: string
  imageLink: string
  date: string
  buttonLabel: string
  buttonType: string
}

export const useHooks = () => {
  const activeTab = ref<Status>('for-edit')
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

  onMounted(() => {
    initializeActiveUser()
  })

  const editorCards = [
    {
      title: 'For Edit',
      count: 333,
    },
    {
      title: 'Published',
      count: 666,
    },
    {
      title: 'Total created articles',
      count: 999,
    },
  ]

  const articles: Article[] = [
    {
      role: 'editor' as Role,
      status: 'published' as Status,
      articleTitle: 'Article Title 1',
      articleSummary: 'Lorem ipsum dolor sit amet consectetur.',
      userName: 'John Paul',
      imageLink: ArticleCover,
      date: '1724641042',
      buttonLabel: 'Edit',
      buttonType: 'primary',
    },
    {
      role: 'writer' as Role,
      status: 'for-edit' as Status,
      articleTitle: 'Article Title 2',
      articleSummary:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      userName: 'Jane Doe',
      imageLink: ArticleCover,
      date: '1724741042',
      buttonLabel: 'Edit',
      buttonType: 'secondary',
    },
    {
      role: 'writer' as Role,
      status: 'published' as Status,
      articleTitle: 'Article Title 3',
      articleSummary:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      userName: 'Alice Smith',
      imageLink: ArticleCover,
      date: '1724841042',
      buttonLabel: 'Edit',
      buttonType: 'primary',
    },
    {
      role: 'editor' as Role,
      status: 'for-edit' as Status,
      articleTitle: 'Article Title 4',
      articleSummary:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      userName: 'Bob Johnson',
      imageLink: ArticleCover,
      date: '1724941042',
      buttonLabel: 'Edit',
      buttonType: 'secondary',
    },
    {
      role: 'editor' as Role,
      status: 'published' as Status,
      articleTitle: 'Article Title 5',
      articleSummary:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      userName: 'Carol White',
      imageLink: ArticleCover,
      date: '1725041042',
      buttonLabel: 'Edit',
      buttonType: 'primary',
    },
    {
      role: 'editor' as Role,
      status: 'published' as Status,
      articleTitle: 'Article Title 1',
      articleSummary: 'Lorem ipsum dolor sit amet consectetur.',
      userName: 'John Paul',
      imageLink: ArticleCover,
      date: '1724641042',
      buttonLabel: 'Edit',
      buttonType: 'primary',
    },
    {
      role: 'writer' as Role,
      status: 'for-edit' as Status,
      articleTitle: 'Article Title 2',
      articleSummary:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      userName: 'Jane Doe',
      imageLink: ArticleCover,
      date: '1724741042',
      buttonLabel: 'Edit',
      buttonType: 'secondary',
    },
    {
      role: 'writer' as Role,
      status: 'published' as Status,
      articleTitle: 'Article Title 3',
      articleSummary:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      userName: 'Alice Smith',
      imageLink: ArticleCover,
      date: '1724841042',
      buttonLabel: 'Edit',
      buttonType: 'primary',
    },
    {
      role: 'editor' as Role,
      status: 'for-edit' as Status,
      articleTitle: 'Article Title 4',
      articleSummary:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      userName: 'Bob Johnson',
      imageLink: ArticleCover,
      date: '1724941042',
      buttonLabel: 'Edit',
      buttonType: 'secondary',
    },
    {
      role: 'editor' as Role,
      status: 'published' as Status,
      articleTitle: 'Article Title 5',
      articleSummary:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      userName: 'Carol White',
      imageLink: ArticleCover,
      date: '1725041042',
      buttonLabel: 'Edit',
      buttonType: 'primary',
    },
    {
      role: 'editor' as Role,
      status: 'published' as Status,
      articleTitle: 'Article Title 1',
      articleSummary: 'Lorem ipsum dolor sit amet consectetur.',
      userName: 'John Paul',
      imageLink: ArticleCover,
      date: '1724641042',
      buttonLabel: 'Edit',
      buttonType: 'primary',
    },
    {
      role: 'writer' as Role,
      status: 'for-edit' as Status,
      articleTitle: 'Article Title 2',
      articleSummary:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      userName: 'Jane Doe',
      imageLink: ArticleCover,
      date: '1724741042',
      buttonLabel: 'Edit',
      buttonType: 'secondary',
    },
    {
      role: 'writer' as Role,
      status: 'published' as Status,
      articleTitle: 'Article Title 3',
      articleSummary:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      userName: 'Alice Smith',
      imageLink: ArticleCover,
      date: '1724841042',
      buttonLabel: 'Edit',
      buttonType: 'primary',
    },
    {
      role: 'editor' as Role,
      status: 'for-edit' as Status,
      articleTitle: 'Article Title 4',
      articleSummary:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      userName: 'Bob Johnson',
      imageLink: ArticleCover,
      date: '1724941042',
      buttonLabel: 'Edit',
      buttonType: 'secondary',
    },
    {
      role: 'editor' as Role,
      status: 'published' as Status,
      articleTitle: 'Article Title 5',
      articleSummary:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      userName: 'Carol White',
      imageLink: ArticleCover,
      date: '1725041042',
      buttonLabel: 'Edit',
      buttonType: 'primary',
    },
  ]

  const onSwitchTab = (tab: Status) => {
    activeTab.value = tab
  }

  const filteredArticles = (status: Status, role: Role): Article[] => {
    return articles.filter(
      (article) => article.status === status && article.role === role,
    )
  }

  return {
    Footer,
    articles,
    CountCard,
    activeTab,
    ArticleCard,
    editorCards,
    activeUser,
    onSwitchTab,
    NavigationBar,
    filteredArticles,
    isCreateArticleVisible,
  }
}
