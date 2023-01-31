from django.shortcuts import render
from projects.models import Project


def projects_view(request):
    # projects = Project.objects.all()
    context = {
        'title': 'Porjects',
        # 'projects': projects,
    }
    return render(request, "projects/projects.html", context)
