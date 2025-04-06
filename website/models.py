from django.db import models

class Project(models.Model):

    project_category_choices = [
        ('Web', 'Web'),
        ('Mobile', 'Mobile'),
        ('Desktop', 'Desktop'),
        ('Game', 'Game'),
        ('Api', 'Api'),
    ]

    project_status_choices = [
        ('Production', 'Production'),
        ('Development', 'Development'),
    ]

    id = models.AutoField(primary_key=True)
    project_name = models.CharField(max_length=255)
    project_description = models.TextField()
    project_image_path = models.CharField(max_length=255)
    project_url = models.CharField(max_length=255)
    project_category = models.CharField(max_length=50, choices=project_category_choices, default='Web')
    project_status = models.CharField(max_length=50, choices=project_status_choices, default='Development')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
