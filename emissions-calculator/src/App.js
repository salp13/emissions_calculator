import { Layout, Menu } from 'antd';
import { useState } from 'react';
import "antd/dist/antd.css";
import Results from "./Results";
import Forms from './Forms';
import { menu_items, housing_emissions_default, travel_emissions_default, food_emissions_default } from './Objects'
const { Header, Content, Footer, Sider } = Layout;



const App = () => {
  // used to determine when emissions calculations should render
  const [valuesChanged, setValuesChanged] = useState(true);
  // used to determine which menu tab content should render
  const [selectedKey, setSelectedKey] = useState(1);
  // object of all housing emissions and their saved values
  const [housingemissions, setHousingEmissions] = useState(housing_emissions_default);
  // object of all travel emissions and their saved values
  const [travelemissions, setTravelEmissions] = useState(travel_emissions_default);
  // object of all food emissions and their saved values
  const [foodemissions, setFoodEmissions] = useState(food_emissions_default);
  // custom hooks for form rendering
  const forms = Forms(selectedKey, setHousingEmissions, setTravelEmissions, setFoodEmissions, setValuesChanged);
  // custom hooks for results rendering
  const results = Results(housingemissions, travelemissions, foodemissions, valuesChanged, setValuesChanged);

  return (
  <Layout style={{height: '100vh'}}>
    <Header style={{ color: 'white', textAlign: 'center', fontSize: 24 }}>
      Personal Emissions Calculator
    </Header>
    <Layout>
      <Sider 
        width={220}
        className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          selectable
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={menu_items}
          onClick={(e) => setSelectedKey(e.key)}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Content
          className="site-layout-background"
          style={{
            background: '#fff',
            margin: '16px 0',
            padding: 24,
            overflow: 'auto'
          }}
        >
        {(selectedKey == 4) ? results : forms}
        </Content>
      </Layout>
    </Layout>
    <Footer className="footer"
      style={{
        backgroundColor: '#001529',
        textAlign: 'center',
        color: 'white'
      }}>
        Created by Susie Alptekin
        </Footer>
  </Layout>
)};

export default App;