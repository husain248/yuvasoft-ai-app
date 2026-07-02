import Hero            from '@/components/home/Hero'
import About           from '@/components/home/About'
import Services        from '@/components/home/Services'
import Portfolio       from '@/components/home/Portfolio'
import ProductsWeServe from '@/components/home/ProductsWeServe'
import AIAgents        from '@/components/home/AIAgents'
import SkillsSlider    from '@/components/home/SkillsSlider'
import Achievement     from '@/components/home/Achievement'
import DataSection     from '@/components/home/DataSection'
import Testimonials    from '@/components/home/Testimonials'
import Subscribe       from '@/components/home/Subscribe'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <ProductsWeServe />
      <AIAgents />
      <SkillsSlider />
      <Achievement />
      <DataSection />
      <Testimonials />
      <Subscribe />
    </main>
  )
}
