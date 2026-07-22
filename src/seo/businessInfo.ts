export const businessInfo = {
  name: 'ChromInk',
  phoneDisplay: '+233 59 332 1151',
  phoneRaw: '+233593321151',
  whatsappUrl: 'https://wa.me/233593321151',
  email: 'print@chromink.co',
  siteUrl: 'https://chromink.co',
  mapUrl: 'https://www.google.com/maps/place/ChromInk/@6.7130822,-1.5587749,16z/',
  address: {
    streetAddress: 'Asokore-Mampong, Parkoso-Boubai Junction',
    locality: 'Kumasi',
    region: 'Ashanti',
    country: 'Ghana',
    countryCode: 'GH',
  },
  serviceAreas: [
    'Adum',
    'Asokwa',
    'Bantama',
    'KNUST',
    'Ahodwo',
    'Santasi',
    'Suame',
    'Asokore Mampong',
    'Aboabo',
  ],
};

export const fullAddress = `${businessInfo.address.streetAddress}, ${businessInfo.address.locality}, ${businessInfo.address.region}, ${businessInfo.address.country}`;
