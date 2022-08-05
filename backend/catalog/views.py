from django.shortcuts import render
from drf_yasg import openapi
from django_filters.rest_framework import DjangoFilterBackend
from drf_yasg.views import get_schema_view
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser, IsAuthenticated
from .permissions import *
from .models import UserProfile
from .serializers import *
from .service import *

from .models import *
from .permissions import *

schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


class GoodAPIListPagination(PageNumberPagination):
    page_size = 4
    page_size_query_param = 'page_size'
    max_page_size = 10000


class GoodAPIList(generics.ListAPIView):
    """Вывод списка товаров """
    queryset = Good.objects.all()
    serializer_class = GoodSerializer
    pagination_class = GoodAPIListPagination
    filter_backends = (DjangoFilterBackend,)
    filterset_class = GoodFilter


class IndustryAPIList(generics.ListAPIView):
    """Вывод списка Отраслей """
    queryset = Industry.objects.select_related("industry_animal").all()
    serializer_class = IndustrySerializer


class GoodAPICreate(generics.CreateAPIView):
    """Добавление новых Товаров если Авторизирован"""
    queryset = Good.objects.all()
    serializer_class = GoodSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = (IsAuthenticated,)


class ProductAPICreate(generics.ListCreateAPIView):
    """Список Продуктов под конкретный Товар и добавление новых если Авторизирован"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (IsAuthenticated,)


class AnimalAPICreate(generics.ListCreateAPIView):
    """Список Животных под конкретный Товар и добавление новых если Авторизирован"""
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer
    permission_classes = (IsAuthenticated,)


class GoodAPIUpdate(generics.RetrieveUpdateAPIView):
    """Изменение конкретного товара если Создатель"""
    queryset = Good.objects.all()
    serializer_class = GoodSerializer
    permission_classes = (IsOwnerOrReadOnly,)


class GoodAPIDetail(generics.RetrieveDestroyAPIView):
    """Удаление конкретного товара если Создатель"""
    queryset = Good.objects.all()
    serializer_class = GoodSerializer
    permission_classes = (IsOwnerOrReadOnly,)


class UserProfileListCreateView(generics.ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)


class UserProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsOwnerProfileOrReadOnly, IsAuthenticated]
