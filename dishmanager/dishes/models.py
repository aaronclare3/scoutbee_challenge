from django.db import models

# Create your models here.


class Dish(models.Model):
    dish = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)