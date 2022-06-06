import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import BreweryCard from './index';

test('verify card data', () => {
  const propsMock = {
      id: 'test',
      name: 'Barrel Brothers Brewing Company',
      street: "399 Business Park Ct Ste 506",
      city: "Windsor",
      state: "California",
      country: "United States",
      breweryType: "micro",
      postalCode: "95492-6652",
      phone: "7076969487",
      loading: false
  }
  const { getByText } = render(<BreweryCard {...propsMock} />)

  expect(getByText('micro')).toBeTruthy()
  expect(getByText(/Windsor/i)).toBeTruthy()
  expect(getByText('7076969487')).toBeInTheDocument()
  expect(getByText('Barrel Brothers Brewing Company')).toBeTruthy()
  expect(getByText('399 Business Park Ct Ste 506')).toBeTruthy()


});
