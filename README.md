## Personal Emissions Calculator
* Uses React Hooks and Ant Design to render frontend 
    * Some components used from Ant Design include layout, header, sider, menu, footer, form, button, row, col
* Uses Django Rest Framework to render backend
    * One view that receives emissions data and returns total calculations
    * One model and serializer to validate request data

#### How to setup application
* Backend:
    * install python version 3.7.4 or greater (dependent on your computer) -- follow guidlines: https://www.python.org/downloads/
        * note: lower dependencies could work, I have only tested on 3.7.4
    * install pip (dependent on your computer) -- follow guidlines: https://pip.pypa.io/en/stable/installation/
        * note: tested on version 20.2.2
    * navigate to api/
    * command: python3 -m venv env
        * this will create virtual environment and should not require any additional installations
    * command: source env/bin/activate
    * command: pip install django djangorestframework django-cors-headers
    * command: deactivate
        * this command will exit the virtual environment, to run application you will need the virtual environment activated (which can be accomplished by running "source env/bin/activate" in api/)

#### How to run application
* Frontend:
    * navigate to emissions-calculator/
    * command: npm start
* Backend: 
    * navigate to api/
    * command: source env/bin/activate
    * navigate to api/api
    * command: python manage.py runserver

#### How to run tests
* Frontend:
    * navigate to emissions-calculator/
    * command: npm test
* Backend:
    * navigate to api/
    * command: source env/bin/activate
    * navigate to api/api
    * command: python manage.py test
