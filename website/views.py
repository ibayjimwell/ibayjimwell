from django.shortcuts import render
from .models import Project

def index(request):
    projects = Project.objects.all()
    current_route = 'index'
    return render(request, 'index.html', {'projects': projects, 'current_route': current_route})

def project_list(request):
    projects = Project.objects.all()
    return render(request, 'project-list.html', {'projects': projects})

def experience(request):
    current_route = 'experience'
    return render(request, 'experience.html', {'current_route': current_route})

def skills(request):
    current_route = 'skills'
    return render(request, 'skills.html', {'current_route': current_route})

def certificates(request):
    current_route = 'certificates'
    return render(request, 'certificates.html', {'current_route': current_route})