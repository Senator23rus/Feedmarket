from datetime import datetime

from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,related_name="profile")
    description=models.TextField(blank=True,null=True)
    location=models.CharField(max_length=30,blank=True)
    date_joined=models.DateTimeField(auto_now_add=True)
    updated_on=models.DateTimeField(auto_now=True)
    is_organizer=models.BooleanField(default=False)

    def __str__(self):
        return self.user.username


class Good(models.Model):
    name = models.CharField(max_length=200, help_text="Введите название Товара", verbose_name="Название Товара", default=0)

    code_of_good = models.CharField(max_length=20, help_text="Введите код Товара", verbose_name="Код Товара",
                                    null=True, blank=True)
    input_percentage = models.CharField(max_length=50, help_text="Введите процент ввода", verbose_name="Процент ввода",
                                    null=True, blank=True)
    image = models.ImageField(help_text="Добавьте картинку продукта", verbose_name="Картинка", default=0)

    product = models.ForeignKey('Product', on_delete=models.CASCADE, help_text="Выберете продукт",
                                verbose_name="Продукт", null=True)
    animal = models.ForeignKey('Animal', on_delete=models.CASCADE, help_text="Выберите Животное",
                               verbose_name="Животное", null=True, blank=True)
    date = models.DateField(help_text="Введите дату добавления товара", verbose_name="Дата добавления товара", null=True, blank=True)

    price = models.DecimalField(decimal_places=2, max_digits=10, help_text="Введите цену ", verbose_name="Цена",
                                default=0)
    summary = models.TextField(max_length=1000, help_text="Введите описание товара",
                               verbose_name="Описание товара", null=True, blank=True)
    file_summary = models.FileField(upload_to='uploads/%Y/%m/%d/', help_text="Добавьте файл к описанию",
                                verbose_name="Файл описания товара", null=True, blank=True)
    blending = models.TextField(max_length=1000, help_text="Введите описание по смешиванию",
                                verbose_name="Описание по смешиванию", null=True, blank=True)
    file_blending = models.FileField(upload_to='uploads/%Y/%m/%d/', help_text="Добавьте файл к рецепту смешивания",
                                    verbose_name="Файл рецепта смешивания", null=True, blank=True)
    user = models.ForeignKey(User, verbose_name='Пользователь', on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"
    

    objects = models.Manager()

    def __str__(self):
        return '%s %s %s %s' % (self.name, self.product, self.animal, self.price)


# Продукты
class Product(models.Model):

    industry = models.ForeignKey('Industry', on_delete=models.CASCADE, help_text="Выберите Отрасль",
                                 verbose_name="Отрасль", null=True)

    country = models.ForeignKey('Country', on_delete=models.CASCADE, help_text="Выберите страну изготовителя",
                                verbose_name="Страна изготовитель", null=True)
    weight = models.IntegerField(help_text="Выберите вес продукта",
                               verbose_name="Вес продукта", null=True)
    maker = models.CharField(max_length=200, help_text="Введите Производителя", verbose_name="Производитель", null=True, blank=True)

    objects = models.Manager()

    def __str__(self):
        return '%s %s %s %s' % (self.industry, self.country, self.weight, self.maker)


class Premix(Product):
    class Meta:
        verbose_name = "Премикс"
        verbose_name_plural = "Премикс"


class Materials(Product):
    materials_type = models.ForeignKey('TypeMaterial', on_delete=models.CASCADE, help_text="Выберите тип Сырья",
                                       verbose_name="Сырьё", null=True, blank=True)

    class Meta:
        verbose_name = "Сырьё"
        verbose_name_plural = "Сырьё"


class Kombikorm(Product):
    class Meta:
        verbose_name = "Комбикорм"
        verbose_name_plural = "Комбикорм"

class BVMK(Product):
    class Meta:
        verbose_name = "БВМК"
        verbose_name_plural = "БВМК"


class TypeMaterial(models.Model):
    name = models.CharField(max_length=200, help_text="Введите тип сырья", verbose_name="Тип Сырья")
    objects = models.Manager()
    
    class Meta:
        verbose_name = "Тип сырья"
        verbose_name_plural = "Типы сырья"
    def __str__(self):
        return '%s' % (self.name)


class Country(models.Model):
    name = models.CharField(max_length=200, help_text="Введите страну изготовителя", verbose_name="Страна изготовитель")
    objects = models.Manager()

    class Meta:
        verbose_name = "Страна"
        verbose_name_plural = "Страны"

    def __str__(self):
        return '%s' % (self.name)




# Животные

class Animal(models.Model):
    industry = models.ForeignKey('Industry', on_delete=models.CASCADE, help_text="Выберите Отрасль",
                                 verbose_name="Отрасль", null=True)
    animal_description = models.CharField(max_length=200, help_text="Введите описание Животного",
                                          verbose_name="Описание Животного", null=True, blank=True)

    animal_day_min = models.IntegerField(help_text="Введите минимальный Возраст в днях",
                                         verbose_name="Минимальный Возраст в днях", null=True, blank=True)
    animal_day_max = models.IntegerField(help_text="Введите максимальный Возраст в днях",
                                         verbose_name="Максимальный Возраст в днях", null=True, blank=True)
    animal_week_min = models.IntegerField(help_text="Введите минимальный Возраст в неделях",
                                         verbose_name="Минимальный Возраст в неделях", null=True, blank=True)
    animal_week_max = models.IntegerField(help_text="Введите максимальный Возраст в неделях",
                                         verbose_name="Максимальный Возраст в неделях", null=True, blank=True)


    weight_min = models.DecimalField(max_digits=6, decimal_places=3, help_text="Выберите вес Животного (от)",
                                 verbose_name="Минимальный вес Животного", null=True)
    weight_max = models.DecimalField(max_digits=6, decimal_places=3, help_text="Выберите вес Животного (до)",
                                     verbose_name="Максимальный вес Животного", null=True)
    objects = models.Manager()

    def __str__(self):
        return '%s %s' % (self.industry, self.animal_description)


class Pig(Animal):
    class Meta:
        verbose_name = "Свинья"
        verbose_name_plural = "Свиньи"


class Birds(Animal):
    animal_type = models.ForeignKey('BirdsType', on_delete=models.CASCADE, help_text="Выберите тип Птицы",
                                    verbose_name="Птица", null=True, blank=True)

    class Meta:
        verbose_name = "Птица"
        verbose_name_plural = "Птицы"


class Cows(Animal):
    class Meta:
        verbose_name = "Корова"
        verbose_name_plural = "Коровы"


class Industry(models.Model):
    industry_animal = models.ForeignKey('TypeOfIndustry', on_delete=models.CASCADE, help_text="Выберите Отрасль",
                                        verbose_name="Отрасль", null=True)
    objects = models.Manager()

    class Meta:
        verbose_name = "Отрасль"
        verbose_name_plural = "Отрасли"

    def __str__(self):
        return '%s' % (self.industry_animal)


class TypeOfIndustry(models.Model):
    name = models.CharField(max_length=50, help_text="Введите Отрасль", verbose_name="Отрасль")
    objects = models.Manager()

    class Meta:
        verbose_name = "Тип Отрасли"
        verbose_name_plural = "Типы Отрасли"

    def __str__(self):
        return '%s' % (self.name)


class BirdsType(models.Model):
    name = models.CharField(max_length=200, help_text="Введите тип птицы", verbose_name="Птица")
    objects = models.Manager()

    class Meta:
        verbose_name = "Тип птицы"
        verbose_name_plural = "Типы птицы"

    def __str__(self):
        return '%s' % (self.name)



