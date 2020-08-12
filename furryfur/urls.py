from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name="index"),
    path('login', views.userLogin, name="login"),
    path('logout', views.logout, name="logout"),
    path('signInSignUp', views.signInSignUp, name="signInSignUp"),
    path('register', views.userSignup, name="register"),
    path('findsitterview', views.findSitterView, name="findsitterview"),
    path('findsitter', views.findSitter, name="findsitter"),
]
