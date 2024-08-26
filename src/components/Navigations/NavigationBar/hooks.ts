import { onMounted, onUnmounted, ref } from 'vue'

import HamburgerMenu from '@/assets/svg/hamburger_menu.svg'
import Profile from '@/assets/svg/profile.svg'
import Logo from '@/components/Logo.vue'

export const UserTypes = {
  Editor: 'editor',
  Writer: 'writer',
} as const

export const useHooks = () => {
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
    // biome-disable-next-line noEmptyBlockStatements: TODO: Implement logout functionality
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
