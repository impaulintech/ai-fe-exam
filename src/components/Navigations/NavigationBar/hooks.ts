import { onMounted, onUnmounted, ref } from 'vue'

import HamburgerMenu from '@/assets/svg/hamburger_menu.svg'
import Profile from '@/assets/svg/profile.svg'
import Logo from '@/components/Logo.vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

export const UserTypes = {
  Editor: 'editor',
  Writer: 'writer',
} as const

export const useHooks = () => {
  const router = useRouter()
  const showDropdown = ref(false)
  const showDropdownMenu = ref(false)
  const dropdownRef = ref<HTMLElement | null>(null)

  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
  }

  const toggleDropdownMenu = () => {
    showDropdownMenu.value = !showDropdownMenu.value
  }

  const handleClickOutside = (event: MouseEvent) => {
    const dropdownElement = dropdownRef.value
    if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
      showDropdown.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })

  const logout = () => {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      text: 'All unsaved changes will be lost.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Logout',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#0DCEDA',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear()
        localStorage.setItem('logoutMessage', 'Thank you for visiting.')

        router.push('/').then(() => {
          Swal.fire({
            title: 'Logout Successful!',
            text: 'Thank you for visiting.',
            icon: 'success',
            confirmButtonColor: '#0DCEDA',
          })
        })
      }
    })
  }

  return {
    Logo,
    logout,
    Profile,
    UserTypes,
    dropdownRef,
    showDropdown,
    HamburgerMenu,
    toggleDropdown,
    showDropdownMenu,
    toggleDropdownMenu,
  }
}
