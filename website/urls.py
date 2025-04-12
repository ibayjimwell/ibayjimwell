from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('projects/list/', views.project_list, name='project_list'),
    path('experience/', views.experience, name='experience'),
    path('skills/', views.skills, name='skills'),
    path('certificates/', views.certificates, name='certificates'),
]