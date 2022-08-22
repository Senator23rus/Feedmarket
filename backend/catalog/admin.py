from django.contrib import admin
from .models import *

# admin.site.register(Good)
admin.site.register(TypeOfIndustry)
admin.site.register(TypeMaterial)
# admin.site.register(Premix)
# admin.site.register(Materials)
# admin.site.register(Kombikorm)
# admin.site.register(BVMK)
admin.site.register(Country)
admin.site.register(Industry)
admin.site.register(BirdsType)
# admin.site.register(Pig)
# admin.site.register(Birds)
# admin.site.register(Cows)

@admin.register(Good)
class GoodAdmin(admin.ModelAdmin):
    list_display = ('name', 'product', 'animal', 'price', 'user', 'date', 'summary', 'blending')
    fields = ('name', 'product', 'image', 'animal', 'price', 'user', 'date', 'summary', 'blending')
    list_filter = ('price', 'date', 'animal', 'date')
@admin.register(Premix)
class PremixAdmin(admin.ModelAdmin):
    list_display = ('industry', 'country', 'weight', 'maker')
    fields = ('industry', 'country', 'weight', 'maker')
    list_filter = ('industry', 'country', 'weight', 'maker')

@admin.register(Materials)
class MaterialsAdmin(admin.ModelAdmin):
    list_display = ('industry', 'country', 'weight', 'materials_type', 'maker')
    fields = ('industry', 'country', 'weight', 'materials_type', 'maker')
    list_filter = ('industry', 'country', 'weight', 'maker', 'materials_type')

@admin.register(Kombikorm)
class KombikormAdmin(admin.ModelAdmin):
    list_display = ('industry', 'country', 'weight', 'maker')
    fields = ('industry', 'country', 'weight', 'maker')
    list_filter = ('industry', 'country', 'weight', 'maker')

@admin.register(BVMK)
class BVMKAdmin(admin.ModelAdmin):
    list_display = ('industry', 'country', 'weight', 'maker')
    fields = ('industry', 'country', 'weight', 'maker')
    list_filter = ('industry', 'country', 'weight', 'maker')

@admin.register(Pig)
class PigAdmin(admin.ModelAdmin):
    list_display = ('industry', 'animal_description', 'animal_day_min', 'animal_day_max', 'animal_month_min', 'animal_month_max',
                    'weight_min', 'weight_max')
    fields = ['industry', ('animal_day_min', 'animal_day_max'), ('animal_month_min', 'animal_month_max'),
              ('weight_min', 'weight_max'), 'animal_description']
    list_filter = ('animal_description', )

@admin.register(Birds)
class BirdsAdmin(admin.ModelAdmin):
    list_display = ('industry', 'animal_description', 'animal_day_min', 'animal_day_max', 'animal_month_min', 'animal_month_max',
                    'weight_min', 'weight_max', 'animal_type')
    fields = ['industry', ('animal_day_min', 'animal_day_max'), ('animal_month_min', 'animal_month_max'),
              ('weight_min', 'weight_max'), 'animal_type', 'animal_description']
    list_filter = ('animal_description', 'animal_type')

@admin.register(Cows)
class CowsAdmin(admin.ModelAdmin):
    list_display = ('industry', 'animal_description', 'animal_day_min', 'animal_day_max', 'animal_month_min', 'animal_month_max',
                    'weight_min', 'weight_max')
    fields = ['industry', ('animal_day_min', 'animal_day_max'), ('animal_month_min', 'animal_month_max'),
              ('weight_min', 'weight_max'), 'animal_description']
    list_filter = ('animal_description', )
