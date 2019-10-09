from rest_framework import routers
from .api import DishViewSet

router = routers.DefaultRouter()
router.register('api/dishes', DishViewSet, 'dishes')

urlpatterns = router.urls