import BackgroundImage from '@/assets/images/login_cover.png'
import LogoXL from '@/assets/images/logo_xl.png'
import Profile from '@/assets/svg/profile.svg'
import Swal from 'sweetalert2'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useHooks = () => {
  const username = ref('')
  const password = ref('')
  const rememberMe = ref(false)
  const router = useRouter()
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-start',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer
      toast.onmouseleave = Swal.resumeTimer
    },
  })

  const handleLogin = () => {
    const writerCredentials = { username: 'writeruser', password: 'letmein' }
    const editorCredentials = { username: 'editoruser', password: 'letmein' }

    if (
      username.value === writerCredentials.username &&
      password.value === writerCredentials.password
    ) {
      localStorage.setItem('user', 'writer')
      router.push('/dashboard')
      Toast.fire({
        icon: 'success',
        title: 'Welcome Writer User!',
      })
    } else if (
      username.value === editorCredentials.username &&
      password.value === editorCredentials.password
    ) {
      localStorage.setItem('user', 'editor')
      router.push('/dashboard')
      Toast.fire({
        icon: 'success',
        title: 'Welcome Editor User!',
      })
    } else {
      Toast.fire({
        icon: 'error',
        title: 'username or password is incorrect',
      })
    }
  }

  return {
    username,
    password,
    rememberMe,
    handleLogin,
    BackgroundImage,
    LogoXL,
    Profile,
  }
}
