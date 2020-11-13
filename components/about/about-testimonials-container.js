import TestimonialCard from '@components/testimonial-card';

const testimonials = [
	{
		imageSrc: '/images/instagram/lesleypatterson.jpg',
		name: 'Lesley Patterson',
		title: '6x World Triathalon Champion',
		info:
			"I was fighting off a cold for about a week. I don't have time to be sick! Once I tried the Desert Sage Modern Plant cocktail, it really stopped all of the symptoms. It was like night and day.",
	},
	{
		imageSrc: '/images/instagram/vaughnmartin.jpg',
		name: 'Vaugh Martin',
		title: 'Former NFL Player',
		info:
			"I knew the benefits of CBD, but the benefits of Modern Plant's terpene cocktails have been incredibly transformative. I use it for aches and pains after long hours of training. This helps with everything and keeps me going.",
	},
];

const AboutTestimonialsContainer = () => {
	return (
		<div className="testimonials">
			<div className="container _80">
				<h3 className="testimonials__title heading-3">
					Don't just take our word for it. <br />
					See what our subscribers have to say.
				</h3>
			</div>
			<div className="testimonials__cards">
				{testimonials.map((testimonial, i) => (
					<TestimonialCard key={i} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default AboutTestimonialsContainer;
