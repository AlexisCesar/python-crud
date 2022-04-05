from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contacts/', views.contacts, name='contacts'),
    path('contacts/add/', views.add_contact, name='add_contact'),
    path('contacts/update/', views.udpate_contact, name='update_contact'),
]
