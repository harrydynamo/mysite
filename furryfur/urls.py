from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name="index"),
    path('login', views.user_login, name="login"),
    path('logout', views.logout, name="logout"),
    path('signInSignUp', views.signInSignUp, name="signInSignUp"),
    path('register', views.user_signup, name="register")
]
