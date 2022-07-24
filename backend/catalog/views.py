from django.shortcuts import render
from drf_yasg import openapi
from django_filters.rest_framework import DjangoFilterBackend
from drf_yasg.views import get_schema_view
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


class GoodAPIList(generics.ListCreateAPIView):
    """Вывод списка товаров с возможностью добавления новых если Админ"""
    queryset = Good.objects.all()
    serializer_class = GoodSerializer
    permission_classes = (IsAdminOrReadOnly, )
    pagination_class = GoodAPIListPagination
    filter_backends = (DjangoFilterBackend, )
    filterset_class = GoodFilter


class GoodAPICreate(generics.CreateAPIView):
    """Добавление новых товаров если Админ"""
    queryset = Good.objects.all()
    serializer_class = GoodSerializer
    permission_classes = (IsAdminOrReadOnly,)
    pagination_class = GoodAPIListPagination


class GoodAPIUpdate(generics.RetrieveUpdateAPIView):
    """Изменение конкретного товара если Создатель"""
    queryset = Good.objects.all()
    serializer_class = GoodSerializer
    permission_classes = (IsOwnerOrReadOnly, )


class GoodAPIDetail(generics.RetrieveDestroyAPIView):
    """Удаление конкретного товара если Создатель"""
    queryset = Good.objects.all()
    serializer_class = GoodSerializer
    permission_classes = (IsOwnerOrReadOnly, )

class UserProfileListCreateView(generics.ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)


class UserProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsOwnerProfileOrReadOnly,IsAuthenticated]