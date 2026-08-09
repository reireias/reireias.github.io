<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useHead, useRoute, useSeoMeta } from '#imports'
import { computed } from 'vue'
import { getCanonicalUrl, getPageSeo, siteUrl } from '@/constants/seo'

const route = useRoute()
const seo = computed(() => getPageSeo(route.path))
const canonicalUrl = computed(() => getCanonicalUrl(route.path))

useSeoMeta({
  title: () => seo.value.title,
  description: () => seo.value.description,
  robots: () => seo.value.robots ?? 'index, follow',
  ogTitle: () => seo.value.title,
  ogDescription: () => seo.value.description,
  ogUrl: () => canonicalUrl.value,
  twitterTitle: () => seo.value.title,
  twitterDescription: () => seo.value.description,
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonicalUrl.value }],
  script:
    route.path === '/'
      ? [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': `${siteUrl}/#website`,
                  url: siteUrl,
                  name: 'reireias.dev',
                  inLanguage: 'ja',
                },
                {
                  '@type': 'ProfilePage',
                  '@id': `${siteUrl}/#profile-page`,
                  url: siteUrl,
                  name: seo.value.title,
                  isPartOf: { '@id': `${siteUrl}/#website` },
                  mainEntity: { '@id': `${siteUrl}/#person` },
                },
                {
                  '@type': 'Person',
                  '@id': `${siteUrl}/#person`,
                  name: 'reireias',
                  url: siteUrl,
                  image: `${siteUrl}/icon.png`,
                  jobTitle: 'Principal Engineer',
                  knowsAbout: [
                    'Site Reliability Engineering',
                    'Security Engineering',
                    'AI Engineering',
                    'Software Architecture',
                  ],
                },
              ],
            }),
          },
        ]
      : [],
}))
</script>
