from django_filters import rest_framework as filters
from .models import *


class CharFiltersInFilter(filters.BaseInFilter, filters.CharFilter):
    pass


class GoodFilter(filters.FilterSet):
    maker = CharFiltersInFilter(field_name='product__maker', lookup_expr='in')
    country = CharFiltersInFilter(field_name='product__country__name', lookup_expr='in')
    price = filters.RangeFilter()

    class Meta:
        model = Good
        fields = ['product', 'price']
