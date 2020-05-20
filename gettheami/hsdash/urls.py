from django.urls import path

from . import views

urlpatterns = [
    path('home/', views.index, name='index'),
    path('', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('forgotpassword/', views.forgot_password, name='forgot-password'),
]
