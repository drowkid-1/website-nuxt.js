<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({
  titleTemplate: '',
  title: awesome?.name || 'Bienvenidxs a DrowKid Web',
})
</script>

<template>
  <AwesomeWelcome :with-alert="true" />
</template>
