from rest_framework import serializers
from .models import *

class GoodSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Good
        fields = '__all__'