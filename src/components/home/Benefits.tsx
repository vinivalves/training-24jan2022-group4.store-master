import React from 'react'
import { Icon } from '@faststore/ui'
import { Box, Delivery, Store, Coupon } from 'src/components/common/Icons/Index'

function Benefits() {
  return (
    <section className="max-w-full bg-benefitsgray text-white text-sm">
      <div className="flex flex-row justify-around pt-2 pb-2">
        <div className="flex flex-col m-2 items-center">
          <Icon component={<Box />} />
          <span>Free shipping</span>
        </div>
        <div className="flex flex-col m-2 items-center">
          <Icon component={<Delivery />} />
          <span>One day delivery!</span>
        </div>
        <div className="flex flex-col m-2 items-center">
          <Icon component={<Store />} />
          <span>Pick up in store</span>
        </div>
        <div className="flex flex-col m-2 items-center">
          <Icon component={<Coupon />} />
          <span>Exclusive deals</span>
        </div>
      </div>
    </section>
  )
}

export default Benefits