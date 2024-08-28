import DefaultImage from '@/assets/images/image_default.png'
import Cloud from '@/assets/svg/cloud.svg'
import SelectDate from '@/components/SelectDate/index.vue'
import Flatpickr from 'flatpickr'
import { onMounted, ref } from 'vue'

export const useHooks = () => {
  const title = ref('')
  const link = ref('')
  const company = ref('')
  const uploadImage = ref(null)
  const formattedDate = ref<string>('')
  const backgroundImage = ref(DefaultImage)
  const submitData = ref({})

  const companyOptions = [
    { value: 'company1', label: 'Company 1' },
    { value: 'company2', label: 'Company 2' },
    { value: 'company3', label: 'Company 3' },
  ]

  const handleDateChange: any = (selectedDates: Date[]): any => {
    if (selectedDates[0]) {
      const timestamp = selectedDates[0].getTime()
      formattedDate.value = timestamp.toString()
    }
  }

  const handleSubmit = () => {
    submitData.value = {
      title: title.value,
      link: link.value,
      company: company.value,
      uploadImage: uploadImage.value,
      date: formattedDate.value,
    }
  }

  const handleFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement
    if (input.files && input.files.length > 0) {
      backgroundImage.value = input.files[0].name as string
    }
  }

  onMounted(() => {
    Flatpickr(document.querySelector('input[type="date"]') as HTMLElement, {
      dateFormat: 'm-d-Y',
      onChange: handleDateChange,
    })
  })

  return {
    title,
    link,
    company,
    uploadImage,
    formattedDate,
    companyOptions,
    handleSubmit,
    handleFileChange,
    backgroundImage,
    handleDateChange,
    Cloud,
    SelectDate,
  }
}
