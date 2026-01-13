import React from 'react'
import Button from './components/Button'
import ProductBrandRating from './components/ProductBrandRating'
import IconWithText from './components/IconWithText'
import CardSelector from './components/CardSelector'
import SizeColorSelector from './components/SizeColorSelector'
import ProductPrice from './components/ProductPrice'
import StarRating from './components/StarRating'
import ThumbnailRow from './components/ThumbnailRow'
import AngleRight from './components/AngleRight'
import AngleLeft from './components/AngleLeft'
import ProductMediaSection from './components/ProductMediaSection'
import Thumbnail from './components/Thumbnail'
import UtilityLinks from './components/UtilityLinks'
import Links from './components/Links'
import NavMenu from './components/NavMenu'
import Menu from './components/Menu'
import Breadcrumbs from './components/Breadcrumbs'
import HeaderBase from './components/HeaderBase'
import Dropdown from './components/Dropdown'

function App() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Component Library</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Button</h2>
        <div className="flex gap-4">
          <Button type="Primary" icon={true} />
          <Button type="Primary" icon={false} />
          <Button type="Secondary" icon={true} />
          <Button type="Secondary" icon={false} />
          <Button type="Hyperlink" icon={true} />
          <Button type="Hyperlink" icon={false} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Product Brand Rating</h2>
        <div className="flex flex-col gap-4">
          <ProductBrandRating wishlist={true} brandName={true} />
          <ProductBrandRating wishlist={false} brandName={true} />
          <ProductBrandRating wishlist={true} brandName={false} />
          <ProductBrandRating wishlist={false} brandName={false} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Icon with Text</h2>
        <div className="flex gap-4">
          <IconWithText icon={true} />
          <IconWithText icon={false} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Card Selector</h2>
        <div className="flex gap-4">
          <CardSelector state={false} icon={true} />
          <CardSelector state={true} icon={true} />
          <CardSelector state={false} icon={false} />
          <CardSelector state={true} icon={false} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Size & Color Selector</h2>
        <div className="flex flex-col gap-4">
          <SizeColorSelector sizeChart={true} />
          <SizeColorSelector sizeChart={false} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Product Price</h2>
        <div className="flex flex-col gap-4">
          <ProductPrice price="$2,223" strikeoutPrice={false} discountPercentage={false} />
          <ProductPrice price="$1,667" strikeoutPrice={true} discountPercentage={false} />
          <ProductPrice price="$1,667" strikeoutPrice={true} discountPercentage={true} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Star Rating</h2>
        <div className="flex flex-col gap-4">
          <StarRating ratingCount="786" starRating="5 star" ratingCount1={true} />
          <StarRating ratingCount="786" starRating="5 star" ratingCount1={false} />
          <StarRating ratingCount="123" starRating="3 star" ratingCount1={true} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Thumbnail Row</h2>
        <div className="flex flex-col gap-4">
          <ThumbnailRow thumbnailCount="3" />
          <ThumbnailRow thumbnailCount="4" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Angle Right</h2>
        <div className="flex gap-4 items-center">
          <AngleRight state={true} size="56x56" />
          <AngleRight state={false} size="56x56" />
          <AngleRight state={true} size="48x48" />
          <AngleRight state={true} size="40x40" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Angle Left</h2>
        <div className="flex gap-4 items-center">
          <AngleLeft state={true} size="56x56" />
          <AngleLeft state={false} size="56x56" />
          <AngleLeft state={true} size="48x48" />
          <AngleLeft state={true} size="40x40" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Product Media Section</h2>
        <div className="flex flex-col gap-4">
          <ProductMediaSection nav={false} thumbnailCount="3" />
          <ProductMediaSection nav={true} thumbnailCount="4" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Thumbnail</h2>
        <div className="flex gap-4">
          <Thumbnail property1="Default" />
          <Thumbnail property1="Active" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Utility Links</h2>
        <div className="flex flex-col gap-4">
          <UtilityLinks utilityLinks="1" />
          <UtilityLinks utilityLinks="3" />
          <UtilityLinks utilityLinks="6" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Links</h2>
        <div className="flex flex-col gap-4">
          <Links icon={true} text={true} />
          <Links icon={true} text={false} />
          <Links icon={false} text={true} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Nav Menu</h2>
        <div className="flex flex-col gap-4">
          <NavMenu navMenuCount="1" />
          <NavMenu navMenuCount="3" />
          <NavMenu navMenuCount="5" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <div className="flex gap-4">
          <Menu property1="Default" />
          <Menu property1="Variant2" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Breadcrumbs</h2>
        <Breadcrumbs />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Header Base</h2>
        <div className="flex flex-col gap-4">
          <HeaderBase logoAlign="left" />
          <HeaderBase logoAlign="center" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Dropdown</h2>
        <Dropdown />
      </section>
    </div>
  )
}

export default App
