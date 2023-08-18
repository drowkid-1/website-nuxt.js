<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ title: 'Apps' })
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Apps de código abierto" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="Apps by DrowKid" />
      <div>Apps</div>
    </LayoutPageSection>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="Another Section" />
      <div>Apps</div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
