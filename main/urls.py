from django.urls import path
from . import views
from .views import *
urlpatterns = [

    path('', index),
    path('', contact_view, name='contact'),
    path('contacts', contacts),
    path('contacts', contact_view, name='contact'),
    path('service', service),
    path('about', about),
    path('news', news),

]
