export type Testimonial = {
  author: string;
  quote: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    author: 'Israel Sarpong',
    quote: 'They made my event banners look incredible.',
    service: 'Event banners',
  },
  {
    author: 'Jeffrey Tottimeh',
    quote: 'Very friendly team and consistent quality every time.',
    service: 'General printing',
  },
  {
    author: 'Jennifer Dove',
    quote: 'Perfect place for small business marketing materials.',
    service: 'Marketing materials',
  },
  {
    author: 'opokujanet',
    quote: 'Reliable partner for all my office printing needs.',
    service: 'Office printing',
  },
  {
    author: 'Patricia Darkwah',
    quote: 'My business card looks premium and professional.',
    service: 'Business cards',
  },
  {
    author: 'Emmanuel Owusu',
    quote: 'Helpful recommendations for materials and finishes.',
    service: 'Print consultation',
  },
  {
    author: 'Marylinn Dzifa Afi Assinyo',
    quote: 'Best pricing compared to other print shops nearby.',
    service: 'Affordable printing',
  },
  {
    author: 'Prince Kyei Baffour',
    quote: 'Their design help improved my flyer layout a lot.',
    service: 'Flyer printing',
  },
  {
    author: 'Sylvester Kwakye',
    quote: 'Perfect for personal gifts and custom prints.',
    service: 'Custom prints',
  },
  {
    author: 'Stephen Boakye-Yiadom',
    quote: 'Saved my school project with fast and affordable printing.',
    service: 'Student printing',
  },
  {
    author: 'Asumadu Jeffery',
    quote: 'Great work done. Your service was beyond my expectation.',
    service: 'General printing',
  },
  {
    author: 'AGYARE DAVID',
    quote: 'Best printing, pricing, and excellent customer care compared to others.',
    service: 'Customer care',
  },
  {
    author: 'Japhet Duga',
    quote: 'Great print quality and very sharp colors. My flyers came out exactly how I wanted.',
    service: 'Flyer printing',
  },
];

export const testimonialsAggregate = {
  ratingValue: 5,
  reviewCount: testimonials.length,
};
