export default function sitemap() {
  const baseUrl = 'https://www.carpetcodukinfield.co.uk'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
