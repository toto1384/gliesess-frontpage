import { domain } from "./mainUtils";


// type d = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
// type YYYY = `19${d}${d}` | `20${d}${d}`;
// type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
// type MM = `0${oneToNine}` | `1${0 | 1 | 2}`;

// type DD = `${0}${oneToNine}` | `${1 | 2}${d}` | `3${0 | 1}`;

// export type DateYMString = `${YYYY}-${MM}`;
// export type DateYMDString = `${DateYMString}-${DD}`;




export const authors = [
  {
    name: 'Alexandru Totolici',
    image: '/alex-totolici-profile-photo.jpg',
    shortDescription: 'Alex is the founder of Gliesess. With a foundation built on 7 years of experience, technical expertise is not a lack of his. After discovering SEO accidentally, he fell in love with it.',
    longDescription: 'Alex got started in 2017 in mobile development, but very shortly he experimented with lots of different technologies until he chose web as the main thing. He built everything from complicated SaaS\'es with hundreds of thousands of lines of code, to presentation sites, blogs, mobile apps, and landing pages.',
    linkedin: 'https://www.linkedin.com/in/alex-totolici-2a4709186/',
    website: 'https://www.alex-totolici.com',
    jsonSchema: (id?: string) => `
{
  "@context": "https://schema.org",
  "@type": "Person",
  ${id ? `"@id": "${id}",` : ''}
  "name": "Alex Totolici",
  "url": "https://www.gliesess.com/blog/authors/alexandru-totolici",
  "image": "https://www.gliesess.com/alex-totolici-profile-photo.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/alex-totolici-2a4709186/",
    "https://www.facebook.com/people/Totolici-Ionut-Alexandru/pfbid0PPPxFUf15rztk5oq36F7unpzrGWXR4sAjBJZQ8qppyyVdh6n8QREJTk3uXFgbFTZl/"
  ],
  "jobTitle": "Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "Gliesess"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "College of the Navy"
  },
  "birthDate": "2002-07-13",
  "gender": "Male",
  "knowsAbout": ["SEO", "Content Marketing", "Web Development"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Constanta",
    "addressRegion": "CO",
    "postalCode": "900272",
    "streetAddress": "Str Baragan nr 21"
  },
  "email": "mailto:alex@gliesess.com"
}`
  }
] as const


export const categories = [
  {
    name: 'Case Study',
    image: 'case-study-illustration.webp'
  },
  {
    name: 'Small Business',
    image: 'small-businesses.webp'
  }
] as const