import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from './App';

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

async function set_value_save (index, value) {
  // set the input value for specified index to specified value
  const input = screen.getAllByRole(/textbox/i)
  expect(input[index].value).toBe('')
  await act(async () => {
    await fireEvent.change(input[0], {target: {value: value}})

  })
  expect(input[index].value).toBe(value)
  await waitFor(() => {
    const input = screen.getAllByRole(/textbox/i)
    expect(input[index].value).toBe(value)
  });
  // save inputted value
  const save_button = screen.getByRole(/button/i);
  expect(save_button).toBeInTheDocument();
  await act(async () => {
    await userEvent.click(save_button)
  })
}

// Header Unit Test
test('renders the header', () => {
  act(() => {
    render(<App />);
  })
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
});

// Header Unit Test
test('renders the title', () => {
  act(() => {
    render(<App />);
  })
  const header_text = screen.getByText(/personal emissions calculator/i);
  expect(header_text).toBeInTheDocument();
});

// Sider Unit Test
test('renders the sider', () => {
  act(() => {
    render(<App />);
  })
  const sider = screen.getByRole('complementary');
  expect(sider).toBeInTheDocument();
});

// Menu Unit Test
test('renders the menu', () => {
  act(() => {
    render(<App />);
  })
  const menu = screen.getByRole('menu');
  expect(menu).toBeInTheDocument();
  const menu_item1 = screen.getByText(/Housing Emissions/i);
  expect(menu_item1).toBeInTheDocument();
  const menu_item2 = screen.getByText(/Travel Emissions/i);
  expect(menu_item2).toBeInTheDocument();
  const menu_item3 = screen.getByText(/Food Emissions/i);
  expect(menu_item3).toBeInTheDocument();
  const menu_item4 = screen.getByText(/Results/i);
  expect(menu_item4).toBeInTheDocument();
});

// Footer Unit Test
test('renders the footer', () => {
  act(() => {
    render(<App />);
  })
  const footer = screen.getByRole('contentinfo');
  expect(footer).toBeInTheDocument();
});

// Footer Unit Test
test('renders the footer text', () => {
  render(<App />);
  const footer_text = screen.getByText(/Created by Susie Alptekin/i);
  expect(footer_text).toBeInTheDocument();
});

// Menu Functionality Test
test('menu navigation housing emissions', () => {
  act(() => {
    render(<App />);
  })
  const menu_item1 = screen.getByText(/Housing Emissions/i);
  // should render already to housing emissions
  const content1_1 = screen.getByText(/Electricity/i);
  expect(content1_1).toBeInTheDocument();
  const content1_2 = screen.getByText(/Natural Gas/i);
  expect(content1_2).toBeInTheDocument();
  const content1_3 = screen.getByText(/Fuel Oil/i);
  expect(content1_3).toBeInTheDocument();
  const content1_4 = screen.getByText(/LPG/i);
  expect(content1_4).toBeInTheDocument();
  const content1_5 = screen.getByText(/Waste/i);
  expect(content1_5).toBeInTheDocument();
  const content1_6 = screen.getByText(/Water/i);
  expect(content1_6).toBeInTheDocument();
  // clicking on housing emssions menu tab should remain on housing page
  act(() => {
    userEvent.click(menu_item1);
  })
  expect(content1_1).toBeInTheDocument();
  expect(content1_2).toBeInTheDocument();
  expect(content1_3).toBeInTheDocument();
  expect(content1_4).toBeInTheDocument();
  expect(content1_5).toBeInTheDocument();
  expect(content1_6).toBeInTheDocument();
});

// Menu Functionality Test
test('menu navigation travel emissions', () => {
  act(() => {
    render(<App />);
  })
  // click on travel emissions and validate form text
  const menu_item2 = screen.getByText(/Travel Emissions/i);
  act(() => {
    userEvent.click(menu_item2);
  })
  const content2_1 = screen.getByText(/Vehicle/i);
  expect(content2_1).toBeInTheDocument();
  const content2_2 = screen.getByText(/Bus/i);
  expect(content2_2).toBeInTheDocument();
  const content2_3 = screen.getByText(/Metro/i);
  expect(content2_3).toBeInTheDocument();
  const content2_4 = screen.getByText(/Taxi/i);
  expect(content2_4).toBeInTheDocument();
  const content2_5 = screen.getByText(/Rail/i);
  expect(content2_5).toBeInTheDocument();
  const content2_6 = screen.getByText(/Flying/i);
  expect(content2_6).toBeInTheDocument();
});

// Menu Functionality Test
test('menu navigation food emissions', () => {
  act(() => {
    render(<App />);
  })
  // click on food emissions and validate form text
  const menu_item3 = screen.getByText(/Food Emissions/i);
  act(() => {
    userEvent.click(menu_item3);
  })
  const content3_1 = screen.getByText(/Red/i);
  expect(content3_1).toBeInTheDocument();
  const content3_2 = screen.getByText(/White/i);
  expect(content3_2).toBeInTheDocument();
  const content3_3 = screen.getByText(/Dairy/i);
  expect(content3_3).toBeInTheDocument();
  const content3_4 = screen.getByText(/Cereals/i);
  expect(content3_4).toBeInTheDocument();
  const content3_5 = screen.getByText(/Vegetables/i);
  expect(content3_5).toBeInTheDocument();
  const content3_6 = screen.getByText(/Oils/i);
  expect(content3_6).toBeInTheDocument();
  const content3_7 = screen.getByText(/Fruit/i);
  expect(content3_7).toBeInTheDocument();
  const content3_8 = screen.getByText(/Snacks/i);
  expect(content3_8).toBeInTheDocument();
  const content3_9 = screen.getByText(/Drinks/i);
  expect(content3_9).toBeInTheDocument();
});

// Menu Functionality Test
test('menu navigation results', () => {
  act(() => {
    render(<App />);
  })
  // click on results and validate form text
  const menu_item4 = screen.queryByText(/Results/i);
  act(() => {
    userEvent.click(menu_item4);
  })
  // shouldn't contain the emissions calculations or any undefined values
  const content4_1 = screen.queryByText(/kg CO2e/i);
  expect(content4_1).toBeNull();
  const content4_2 = screen.queryByText(/undefined/i);
  expect(content4_2).toBeNull();
  // every emissions value should be 0
  const content4_3 = screen.getAllByText(/0/i);
  expect(content4_3).toHaveLength(21)
});

// Save Button Functionality Test
test('save functionality', async () => {
  act(() => {
    render(<App />);
  })
  // input new value and save
  await set_value_save(0, '100');
  // navigate to results page and validate the saved value renders
  const results = screen.getByText(/Results/)
  await act(async () => {
    await userEvent.click(results)
  })
  const saved_value = screen.getByText('100', {exact: false})
  expect(saved_value).toBeInTheDocument();
});

// API Call Functionality Test
test('api call with some empty values', async () => {
  act(() => {
    render(<App />);
  })
  // populate some input values
  await set_value_save(0, '100')
  const menu_item2 = screen.getByText(/Travel Emissions/i);
  await act(async () => {
    await userEvent.click(menu_item2);
  })
  await set_value_save(0, '100')
  const menu_item3 = screen.getByText(/Food Emissions/i);
  await act(async () => {
    await userEvent.click(menu_item3);
  })
  await set_value_save(0, '100')
  const results = screen.getByText(/Results/)
  await act(async () => {
    await userEvent.click(results)
  })
  // mock fetch function so it doesn't actually hit api
  global.fetch = jest.fn(() => Promise.resolve({
    status: 200,
    json: () => Promise.resolve(2305.6)
  }))
  const results_button = screen.getByRole(/button/i);
  expect(results_button).toBeInTheDocument();
  await act(async () => {
    await userEvent.click(results_button)
  })
  // validate results from api call render on results page
  const emissions_results = screen.getByText('2305.6', {exact: false});
  expect(emissions_results).toBeInTheDocument();
});

// API Call Functionality Test
test('api call errors', async () => {
  act(() => {
    render(<App />);
  })
  // set input value with invalid value
  await set_value_save(0, 'hi')
  const results = screen.getByText(/Results/)
  await act(async () => {
    await userEvent.click(results)
  })
  global.fetch = jest.fn(() => Promise.resolve({
    status: 400,
    json: () => Promise.resolve(2305.6)
  }))
  const results_button = screen.getByRole(/button/i);
  expect(results_button).toBeInTheDocument();
  await act(async () => {
    await userEvent.click(results_button)
  })
  // validate that api call with bad request status will not render on screen
  const emissions_results = screen.queryByText('2305.6', {exact: false});
  expect(emissions_results).toBeNull();
});
