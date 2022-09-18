from rest_framework import routers
from django.urls import path, include
from notes import views

router = routers.DefaultRouter()
router.register(r"", views.NoteViewSet)
urlpatterns = [
    path("", include(router.urls)),
]
