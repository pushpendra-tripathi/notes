"""
    project URL Configuration
"""

from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

API_PREFIX = "api/v1"

# App URLs
urlpatterns = [
    path("admin/", admin.site.urls),
    path("", TemplateView.as_view(template_name="index.html")),
]

# API URLs
urlpatterns += [
    path(f"{API_PREFIX}/notes/", include("notes.urls")),
]
