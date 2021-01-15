<template>
  <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1230 250" :width="width" :height="height">
    <g fill="#008eb4">
      <path d="M0,0H118.8l32.1,19.8V123.9l-28.4,17.5,32.1,109.1H104.9L73.3,143.7H51.4V250.5H0ZM99.5,111.4V33L88.8,26.4H51.4V118H88.8Z"/>
      <path d="M241.9,250.5V168.4L179.8,0h55.1L267,122.9,299.1,0h55.1l-62,168.4v82.1Z"/>
      <path d="M534,230.7l-32.1,19.8H412.6l-32.1-19.8V19.8L412.6,0h89.3L534,19.8ZM442.5,27l-10.7,6.6V216.8l10.7,6.6H472l10.7-6.6V33.6L472,27Z"/>
      <path d="M570.4,250.5V191.6h53.5v58.9Z"/>
      <path d="M660.3,19.8,692.4,0h84l32.1,19.8v53H757.2V33.6L746.5,27H722.4l-10.7,6.6V216.8l10.7,6.6h24.1l10.7-6.6V148.3H731.5V120h77V230.7l-32.1,19.8h-84l-32.1-19.8Z"/>
      <path d="M846.5,0h51.4V250.5H846.5Z"/>
      <path d="M1063.8,27H989.9v86h66.4v27.1H989.9V250.5H938.6V0h125.2Z"/>
      <path d="M1180.4,26.4V250.5h-51.3V26.4h-48.7V0h148.7V26.4Z"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    width: {
      type: Number,
      default: 128
    },
    height: {
      type: Number,
      default: 26
    }
  }
}
</script>
