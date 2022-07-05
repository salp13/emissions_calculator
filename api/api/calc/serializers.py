from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Calculation_Input

class Calculation_Input_Serializer(ModelSerializer):
	class Meta:
		model = Calculation_Input
		fields = '__all__'