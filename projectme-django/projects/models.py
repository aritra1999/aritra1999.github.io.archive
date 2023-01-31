from django.db import models

TYPE = [
    ('github', 'Github'),
    ('behance', 'Behance')
]


class Project(models.Model):
    title = models.CharField(max_length=100)
    # thumbnail = models.ImageField(upload_to='project_thumnail')
    thumbnail = models.URLField(max_length=200)
    description = models.TextField(max_length=1000)
    type = models.CharField(choices=TYPE, max_length=120)
    url = models.URLField(max_length=200)
    demo_url = models.URLField(max_length=200)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
