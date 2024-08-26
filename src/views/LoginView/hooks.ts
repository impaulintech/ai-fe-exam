import BackgroundImage from '@/assets/images/login_cover.png'
import LogoXL from '@/assets/images/logo_xl.png'
import Profile from '@/assets/svg/profile.svg'
import { ref } from 'vue'

export const useHooks = () => {
  const username = ref('')
  const password = ref('')
  const rememberMe = ref(false)

  const handleLogin = () => {
    // biome-disable-next-line noEmptyBlockStatements: TODO: Implement handleLogin functionality
  }

  return {
    username,
    password,
    rememberMe,
    LogoXL,
    Profile,
    BackgroundImage,
    handleLogin,
  }
}
