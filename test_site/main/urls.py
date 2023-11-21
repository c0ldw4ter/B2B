from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('servs', views.serv),
    path('cont', views.cont),
]