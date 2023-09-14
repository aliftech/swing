import { defineStore } from 'pinia'

export const themeSwitcher = defineStore('theme', {
  state: () => {
    return {
      theme: 'light',
      icon: 'mdi mdi-weather-sunny'
    }
  },
  actions: {
    change() {
      if (this.theme == 'light') {
        this.theme = 'dark'
      } else {
        this.theme = 'light'
      }
    },
    changeIcon() {
      if (this.theme == 'light') {
        this.icon = "mdi mdi-weather-night"
      } else {
        this.icon = "mdi mdi-weather-sunny"
      }
    }
  },
})
