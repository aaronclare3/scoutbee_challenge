from dishes.models import Dish
from rest_framework import viewsets, permissions
from .serializers import DishSerializer

class DishViewSet(viewsets.ModelViewSet):
    queryset = Dish.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = DishSerializer