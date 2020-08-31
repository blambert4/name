from django.urls import path
from . import views


urlpatterns = [
path('', views.one, name = "one"),
path('kilo/', views.two, name = "two"),
path('euro/', views.three, name = "three"),
]