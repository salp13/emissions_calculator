## Personal Emissions Calculator
* Uses React Hooks and Ant Design to render frontend 
    * Some components used from Ant Design include layout, header, sider, menu, footer, form, button, row, col
* Uses Django Rest Framework to render backend
    * One view that receives emissions data and returns total calculations
    * One model and serializer to validate request data

## How to run application
* Frontend:
    * navigate to emissions-calculator/
    * command: npm start
* Backend: 
    * navigate to api/
    * command: source env/bin/activate
    * navigate to api/api
    * command: python manage.py runserver

## How to run tests
* Frontend:
    * navigate to emissions-calculator/
    * command: npm test
* Backend:
    * navigate to api/
    * command: source env/bin/activate
    * navigate to api/api
    * command: python manage.py test