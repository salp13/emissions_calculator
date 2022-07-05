import { Form, Input, Button } from 'antd';
import { form_render, form_label } from './Objects';

const Forms = (selectedKey, setHousingEmissions, setTravelEmissions, setFoodEmissions, setValuesChanged ) => {
  // needed for submit functionality
  const [form] = Form.useForm();

  // sets the emissions objects depending on which menu tab is currently rendered
  // sets the valuesChanged to stop rendering of calculation on results page (since displayed values won't represent calculated value)
  const setSelectedEmissions = values => {
    Object.keys(values).forEach(key => {
      if (values[key] == undefined) values[key] = 0
    })
    if (selectedKey == 1) setHousingEmissions(values)
    else if (selectedKey == 2) setTravelEmissions(values)
    else setFoodEmissions(values)
    setValuesChanged(true)
  }

  return (
    <Form  
      form={form}
      labelCol={{ span: 6 }} 
      wrapperCol={{ span: 8, offset: 1 }} 
      onFinish={setSelectedEmissions}>
      <Form.List>
        {fields => (
        <div>
            {form_render[selectedKey].map(field => (
            <Form.Item {...field}>
                <Input />
            </Form.Item>
            ))}
        </div>
        )}
        </Form.List>
    <Form.Item colon={false} label=' ' style={{textAlign: 'center'}}>
        <Button htmlType="submit">
        Save {form_label[selectedKey]} Values
        </Button>
    </Form.Item>
</Form>
)};

export default Forms;