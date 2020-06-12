import TestimonialCard from '@components/testimonial-card'

const testimonials = [
  {
    imageSrc: '/images/global/apothecary.png',
    name: 'John Smith',
    title: 'Lead Geneticist',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut nisi quia inventore dolorem eos, dolores, adipisci voluptatum eligendi, quam praesentium. Nemo laboriosam ratione commodi asperiores ab necessitatibus, veritatis error.'
  },
  {
    imageSrc: '/images/global/apothecary.png',
    name: 'John Smith',
    title: 'Lead Geneticist',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut nisi quia inventore dolorem eos, dolores, adipisci voluptatum eligendi, quam praesentium. Nemo laboriosam ratione commodi asperiores ab necessitatibus, veritatis error.'
  },
  {
    imageSrc: '/images/global/apothecary.png',
    name: 'John Smith',
    title: 'Lead Geneticist',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut nisi quia inventore dolorem eos, dolores, adipisci voluptatum eligendi, quam praesentium. Nemo laboriosam ratione commodi asperiores ab necessitatibus, veritatis error.'
  },
  {
    imageSrc: '/images/global/apothecary.png',
    name: 'John Smith',
    title: 'Lead Geneticist',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut nisi quia inventore dolorem eos, dolores, adipisci voluptatum eligendi, quam praesentium. Nemo laboriosam ratione commodi asperiores ab necessitatibus, veritatis error.'
  },
]

const AboutTestimonialsContainer = () => {
  return (
    <div className="testimonials">
      <div className="container _80">
        <h3 className='testimonials__title heading-3'>Don't just take our word for it.</h3>
      </div>
      <div className='testimonials__cards'>
        { testimonials.map((testimonial, i) => <TestimonialCard key={i} {...testimonial} />)}
      </div>
    </div>
  )
};

export default AboutTestimonialsContainer;