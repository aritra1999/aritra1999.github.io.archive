from django.shortcuts import render, redirect
from django.core.mail import EmailMessage
from django.template.loader import get_template
from apiclient.discovery import build

from .forms import ContactForm

def home_view(request):
    context = {
        'title': 'Home',
    }
    return render(request, "pages/home.html", context)


def about_view(request):
    context = {
        'title': 'About Me',
    }
    return render(request, "pages/about.html", context)


def youtube_view(request):
    youtube = build('youtube', 'v3', developerKey="AIzaSyChpvpQnBT3nWK6UE3k56Zb3vqZPm94mWM")
    # req = youtube.channels().list(id='UCaOZb2OH84nCezEt9gnKy-Q', part='contentDetails').execute()
    req = youtube.playlistItems().list(playlistId='UUaOZb2OH84nCezEt9gnKy-Q', part='snippet').execute()

    videos = []

    for item in req['items']:
        datetime = (item['snippet']['publishedAt']).split("T")
        uploadedOn = {
            "date": datetime[0],
            "time" : datetime[1][:5]
        }

        video = {
            "timestamp": uploadedOn,
            "title": item['snippet']['title'],
            "url": item['snippet']['resourceId']['videoId'],
            "thumbnail_url": item['snippet']['thumbnails']['high']['url']

        }
        videos.append(video)

    context = {
        "title": "Youtube",
        "videos": videos,
    }
    return render(request, "pages/youtube.html", context)


def resume_view(request):
    context = {
        'title': 'Resume and Certificates',
    }
    return render(request, "pages/cvcerti.html", context)
