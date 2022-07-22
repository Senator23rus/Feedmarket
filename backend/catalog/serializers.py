from rest_framework import serializers

from .models import *

class GoodSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Good
        fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    user=serializers.StringRelatedField(read_only=True)
    class Meta:
        model = UserProfile
        fields='__all__'