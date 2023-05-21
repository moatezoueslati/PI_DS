from rest_framework import serializers
from webapp.models import *


class BouteilleSerializer(serializers.ModelSerializer):
    class Meta:
        model = bouteille
        fields = '__all__'



class RVMSerializer(serializers.ModelSerializer):
    class Meta:
        model = rvm
        fields = '__all__'


class RecompenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = recompense
        fields = '__all__'
        
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'