from rest_framework import serializers

from .models import *

class GoodSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Good
        fields = '__all__'


class IndustrySerializer(serializers.ModelSerializer):
    name = serializers.CharField(source="__str__")
    class Meta:
        model = Industry
        fields = ('id', 'name',)



class ProductSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Product
        fields = '__all__'

class AnimalSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Animal
        fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    user=serializers.StringRelatedField(read_only=True)
    class Meta:
        model = UserProfile
        fields='__all__'