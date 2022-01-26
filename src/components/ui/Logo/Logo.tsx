import React from 'react'
import { Image } from 'src/components/ui/Image'

function Logo() {

  const logoImageData = {
    src: 'https://storecomponents.vtexassets.com/arquivos/store-theme-logo.png',
    alt: 'Store Theme',
    variant: 'logo',
  }

  return (
    <Image
      src={logoImageData.src}
      alt={logoImageData.alt}
      variant={logoImageData.variant}
    />
  )
}

export default Logo