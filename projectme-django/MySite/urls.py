from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from pages.views import home_view, resume_view, youtube_view, about_view
from projects.views import projects_view

urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('', home_view, name="home"),
                  path('youtube/', youtube_view, name="youtube"),
                  path('about/', about_view, name="about"),
                  path('cv/', resume_view, name="cv"),
                  path('projects/', projects_view, name="projects"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
