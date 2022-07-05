from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import Calculation_Input_Serializer

@api_view(['post'])
def calculations(request):
    if request.method == 'POST':
        # Input validation
        serializer = Calculation_Input_Serializer(data=request.data)
        if serializer.is_valid():
            # Emissions calculations
            electricity = int(request.data['electricity'])*.309
            natural_gas = int(request.data['natural_gas'])*.185
            fuel_oil = int(request.data['fuel_oil'])*2.5
            LPG = int(request.data['LPG'])*3.26
            waste = int(request.data['waste'])*52*.68
            water = int(request.data['water'])*365*.00059
            vehicle = int(request.data['vehicle'])*.993
            bus = int(request.data['bus'])*.01
            metro = int(request.data['metro'])*.013
            taxi = int(request.data['taxi'])*.993
            rail = int(request.data['rail'])*.021
            flying = int(request.data['flying'])*.4
            red_meat = int(request.data['red_meat'])*365*.0596
            white_meat = int(request.data['white_meat'])*365*.0061
            dairy = int(request.data['dairy'])*365*.0212
            cereals = int(request.data['cereals'])*365*.0014
            vegetables = int(request.data['vegetables'])*365*.0005
            oils = int(request.data['oils'])*365*.0076
            fruit = int(request.data['fruit'])*365*.0007
            snacks = int(request.data['snacks'])*365*.0017
            drinks = int(request.data['drinks'])*365*.0003
            housing_emissions = electricity + natural_gas + fuel_oil + LPG + waste + water 
            travel_emisssions = vehicle + bus + metro + taxi + rail + flying 
            food_emissions = red_meat + white_meat + dairy + cereals + vegetables + oils + fruit + snacks + drinks 
            total_emissions = housing_emissions + travel_emisssions + food_emissions
            return Response(round(total_emissions, 3))
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_400_BAD_REQUEST)

