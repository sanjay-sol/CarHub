import { CustomFilter, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const allCars = await fetchCars();
  // console.log(allCars);
  const isEmptyData = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
    <Hero/>
    <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home_text-container'>
        <h1 className='text-4xl font-extrabold'>Car Catalog</h1>
        <p>explore the cars</p>

      </div>
      <div className='home__filters'>
        <SearchBar />
        <div className='home__filter-container'>
          <CustomFilter title="fuel"/>
          <CustomFilter title="year"/>


        </div>
      </div>
      { !isEmptyData ? (
        <section>
          WE have cars
        </section>
      ):(
        <div className='home__error-container'> 
          <h1>Unable to load cars data...</h1>
          <p>{allCars?.message}</p>
        </div>
      )}
    </div>
    </main>
  )
}
