from django.test import TestCase
import json

class CalculationsTestCase(TestCase):
    def setUp(self):
        self.body = {
            'electricity': 0,
            'natural_gas': 0,
            'fuel_oil': 0,
            'LPG': 0,
            'waste': 0,
            'water': 0,
            'vehicle': 0,
            'bus': 0,
            'metro': 0,
            'taxi': 0,
            'rail': 0,
            'flying': 0,
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

    # Incorrect request data
    def test_missing_data_values(self):
        body = self.body
        body = body.pop('vehicle')
        response = self.client.post("/calculations/", json.dumps(body), content_type='application/json')
        assert(response.status_code == 400)

    # Incorrect request data
    def test_chars_in_data(self):
        body = self.body
        body['electricity'] = 'hi'
        response = self.client.post("/calculations/", json.dumps(body), content_type='application/json')
        assert(response.status_code == 400)

    # Incorrect request data
    def test_float_input(self):
        body = self.body
        body['electricity'] = 0.5
        response = self.client.post("/calculations/", json.dumps(body), content_type='application/json')
        assert(response.status_code == 400)

    # Correct request data 
    def test_valid_calculations(self):
        body = self.body
        for k in body:
            body[k] = 1
        response = self.client.post("/calculations/", json.dumps(body), content_type='application/json')
        assert(response.status_code == 200)
        assert(response.data == 80.431)
