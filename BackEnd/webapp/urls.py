
from django.contrib import admin
from django.urls import path
from webapp.views import Home, Create, Detail,Update, Delete
from django.urls import path, include
from webapp.views import *
from . import views

urlpatterns = [
    # path('', views.BASE,name='BASE'),
    # path('',Home.as_view(), name="home" ),
    # path('create/', Create.as_view(), name='create'),
    # path('<pk>/', Detail.as_view(), name='detail'),
    # path('update/<pk>/', Update.as_view(), name='update'),
    # path('delete/<pk>/', Delete.as_view(), name='delete'), 
     path('bouteille', BouteilleV.as_view()),
    path('bouteille/<str:pk>', BouteilleDetail.as_view())
    ,   path('rvm', RVMV.as_view()),
    path('rvm/<str:pk>', RVMDetail.as_view())   ,   path('recompense', recompenseV.as_view()),
    path('recompense/<str:pk>', recompenseDetail.as_view()) ,path('user', userV.as_view()),
    path('user/<str:pk_or_username>', userDetail.as_view()),
    path('compare-faces/', compare_faces, name='compare_faces'),



]
