from django.contrib import admin
from django.urls import path, include, re_path
from catalog import views
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from . views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/drf-auth/', include('rest_framework.urls')),
    path('api/v1/good/', GoodAPIList.as_view()),
    path('api/v1/good/<int:pk>/', GoodAPIUpdate.as_view()),
    path('api/v1/good_delete/<int:pk>/', GoodAPIDetail.as_view()),


# JWT tokens
    path('api/v1/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

# swagger

    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),


    # path('', views.index, name='index'),
    # path('premix/', views.PremixListView.as_view(), name='premix-list'),
    # path('<int:pk>/', views.ProductPremixDetalView.as_view(), name='product-detail'),
    # # path('<int:pk>/', views.SalesmanProductPremixDetalView.as_view(), name='product-salesman'),
    # path('accounts/', include('django.contrib.auth.urls')),
]   + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

