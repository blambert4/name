from django.urls import path
from . import views

urlpatterns = [
path('home/', views.home, name = "home_page"),
path('home/maps/', views.map, name = "api"),
path('home/game/', views.game, name = "game"),
path('home/landing/', views.landing, name = "landing"),
path('home/converter/', views.converter, name = "converter"),
path('home/converter/kilo/', views.kilo, name = "kilo"),
path('home/converter/euro/', views.euro, name = "euro"),
path('home/converter/meter/', views.meter, name = "meter"),
]
