from django.urls import path
from .import views

urlpatterns = [
    path('', views.index, name='dtroy jobs'),
    path('dash/',views.dash, name='dashboard'),
    path('reg/',views.reg, name='register'),
    path('delete/<int:pk>/', views.delete_drive, name='delete_drive'),
    path('sche/',views.sche, name='scheduler'),
    path('profile/',views.profile, name='profile'),
]