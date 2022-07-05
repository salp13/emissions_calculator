import { HomeOutlined, CarOutlined, ShoppingCartOutlined, DotChartOutlined } from '@ant-design/icons';

// returns proper formatting for menu items
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

// menu items to render in sider
export var menu_items = [
  getItem('Housing Emissions', '1', <HomeOutlined />),
  getItem('Travel Emissions', '2', <CarOutlined />,),
  getItem('Food Emissions', '3', <ShoppingCartOutlined />),
  getItem('Results', '4', <DotChartOutlined />)
];

// housing fields to render for form
export var housing_fields = [
    {name: 'electricity', label: 'Electricity Usage (kWh/year)'},
    {name: 'natural_gas', label: 'Natural Gas Usage (kWh/year)'},
    {name: 'fuel_oil', label: 'Fuel Oil Usage (kg/year)'},
    {name: 'LPG', label: 'LPG Usage (liter/year)'},
    {name: 'waste', label: 'Waste (kg/week)'},
    {name: 'water', label: 'Water Usage (liter/day)'},
]

// travel fields to render for form
export var travel_fields = [
  {name: 'vehicle', label: 'Vehicle Distance (mi/year)'},
  {name: 'bus', label: 'Bus Distance (mi/year)'},
  {name: 'metro', label: 'Metro Distance (mi/year)'},
  {name: 'taxi', label: 'Taxi Distance (mi/year)'},
  {name: 'rail', label: 'Rail Distance (mi/year)'},
  {name: 'flying', label: 'Flying Distance (mi/year)'},
]

// food fields to render for form
export var food_fields = [
  {name: 'red_meat', label: 'Red Meat Consumption (g/day)'},
  {name: 'white_meat', label: 'White Meat Consumption (g/day)'},
  {name: 'dairy', label: 'Dairy Consumption (g/day)'},
  {name: 'cereals', label: 'Cereals Consumption (g/day)'},
  {name: 'vegetables', label: 'Vegetables Consumption (g/day)'},
  {name: 'oils', label: 'Oils Consumption (g/day)'},
  {name: 'fruit', label: 'Fruit Consumption (g/day)'},
  {name: 'snacks', label: 'Snacks Consumption (g/day)'},
  {name: 'drinks', label: 'Drinks Consumption (g/day)'},
]

// aggregation of above fields to be indexed by selected key (dependent on menu selection)
export var form_render = {
  1: housing_fields,
  2: travel_fields,
  3: food_fields,
  4: []
}

// identification for button rendering
export var form_label = {
  1: "Housing",
  2: "Travel",
  3: "Food",
  4: ""
}

// default state variable value
export var housing_emissions_default = {
  'electricity': 0,
  'natural_gas': 0,
  'fuel_oil': 0,
  'LPG': 0,
  'waste': 0,
  'water': 0
}

// default state variable value
export var travel_emissions_default = {
  'vehicle': 0,
  'bus': 0,
  'metro': 0,
  'taxi': 0,
  'rail': 0,
  'flying': 0
}

// default state variable value
export var food_emissions_default = {
  'red_meat': 0,
  'white_meat': 0,
  'dairy': 0,
  'cereals': 0,
  'vegetables': 0,
  'oils': 0,
  'fruit': 0,
  'snacks': 0,
  'drinks': 0
}